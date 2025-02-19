import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { fastifyJwt } from "@fastify/jwt";
import { fastifyPlugin } from "fastify-plugin";

export default fastifyPlugin(
    async (fastify: FastifyInstance) => {
        // register the jwt plugin
        await fastify.register(fastifyJwt, {
            secret: process.env.JWT_SECRET!,
            cookie: {
                cookieName: "token",
                signed: false,
            },
            verify: {
                extractToken(request) {
                    return (
                        request.cookies.token ||
                        request.headers.authorization?.split(" ").at(1)
                    );
                },
            },
            decoratorName: "jwtUser",
        });
        // decorate the jwt plugin
        fastify.decorate(
            "jwtAuth",
            async function jwtAuthHandler(
                request: FastifyRequest,
                reply: FastifyReply
            ): Promise<void> {
                try {
                    await request.jwtVerify();
                } catch (err) {
                    await reply.unauthorized();
                }
            }
        );
    },
    { name: "cookie", dependencies: ["env-config"] }
);

export interface JwtPayload {
    id: string;
    discordId: string;
    fullName: string;
    avatar: string;
    email: string;
    iat: number;
    exp: number;
}

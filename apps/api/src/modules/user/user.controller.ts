import type { FastifyReply, FastifyRequest } from "fastify";
import type UserService from "./user.service";

export default class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    public async me(request: FastifyRequest, reply: FastifyReply) {
        const userDiscordId = request.jwtUser.discordId;

        const dbUser = await this.userService.me(userDiscordId);

        if (!dbUser) {
            return reply.notFound();
        }
        return reply.send({
            user: dbUser,
        });
    }
}

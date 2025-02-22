import type { FastifyInstance } from "fastify";
import UserController from "./user.controller";
import UserService from "./user.service";
import { userSchemaRef, userSchemas } from "./user.schema";

export default function AuthRoute(fastify: FastifyInstance) {
    // Register schemas
    for (const schema of userSchemas) {
        fastify.addSchema(schema);
    }

    const userController = new UserController(new UserService());

    fastify.get(
        "/@me",
        {
            onRequest: [fastify.jwtAuth],
            schema: {
                tags: ["User"],
                description: "Get the current user data",
                response: {
                    200: userSchemaRef("200"),
                    404: userSchemaRef("404"),
                },
            },
        },
        userController.me.bind(userController)
    );
}

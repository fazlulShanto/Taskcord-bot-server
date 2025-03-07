import type { FastifyInstance } from "fastify";
import AuthService from "../auth/auth.service";
import UserController from "./user.controller";
import UserService from "./user.service";
import { userSchemaRef, userSchemas } from "./user.schema";

export default function AuthRoute(fastify: FastifyInstance) {
  // Register schemas
  for (const schema of userSchemas) {
    fastify.addSchema(schema);
  }

  const userController = new UserController(new UserService(new AuthService()));

  fastify.get(
    "/@me",
    {
      onRequest: [fastify.jwtAuth],
      schema: {
        tags: ["User"],
        description: "Get the current user data",
        response: {
          200: userSchemaRef("meResponse"),
          404: userSchemaRef("meErrorResponse"),
        },
      },
    },
    userController.me.bind(userController)
  );
  fastify.get(
    "/discord/guilds",
    {
      onRequest: [fastify.jwtAuth],
      schema: {
        tags: ["User"],
        description:
          "Get the current user's discord servers where user is owner or has admin permissions",
        response: {
          200: userSchemaRef("discordServerListResponse"),
        },
      },
    },
    userController.getUserDiscordServerList.bind(userController)
  );
}

import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import fjwt from "@fastify/jwt";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import userRoutes from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";
import postRoutes from "./modules/post/post.route";
import { getPostsHandler } from "./modules/post/post.controller";
// import fastifyPlugin from "fastify-plugin" 

export const server = Fastify();

dotenv.config();

server.register(fjwt, {
  secret: process.env.SECRET as string,
});

server.register(cors, {
  origin: true,
});

server.decorate(
  "auth",
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (e) {
      return reply.send(e);
    }
  }
);

server.get("/healthcheck", async function () {
  return { status: "OK" };
});

server.get("/", getPostsHandler);

async function main() {
  for (const schema of userSchemas) {
    server.addSchema(schema);
  }

  server.register(userRoutes);
  server.register(postRoutes);
  try {
    await server.listen({ port: process.env.PORT as any });
    console.log(`Server ready at http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();

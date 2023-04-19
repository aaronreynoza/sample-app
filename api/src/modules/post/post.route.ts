import { FastifyInstance } from "fastify";
import { createNewPostHandler, deletePostHandler, getPostsHandler, getPostHandler } from "./post.controller";
import {
  createPostSchema,
  // getPostSchema,
  readPostsResponseSchema,
  createPostResponseSchema,
  deletePostSchema,
  deletePostResponseSchema,
} from "./post.schema";

async function postRoutes(server: FastifyInstance) {
  server.post(
    "/post",
    {
      schema: {
        body: createPostSchema,
        response: { 201: createPostResponseSchema },
      },
    },
    createNewPostHandler
  );

  server.get(
    "/post/:postId",
    {
      schema: {
        response: { 201: readPostsResponseSchema },
      },
    },
    getPostHandler
  );

  server.get(
    "/posts",
    {
      schema: {
        response: { 201: readPostsResponseSchema },
      },
    },
    getPostsHandler
  );

  server.delete(
    "/deletepost",
    {
      schema: {
        body: deletePostSchema,
        response: { 201: deletePostResponseSchema },
      },
    },
    deletePostHandler
  );
}

export default postRoutes;

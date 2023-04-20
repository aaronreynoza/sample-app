export const postCore = {
  type: "object",
  properties: {
    username: { type: "string" },
    text: { type: "string" },
  },
  required: ["username", "text"],
};

export const createPostSchema = {
  type: "object",
  properties: {
    ...postCore.properties,
  },
  required: postCore.required,
};


export const createPostResponseSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    ...postCore.properties,
  },
};

export const getPostSchema = {
  type: "object",
  properties: {
    ...postCore.properties,
  },
  required: postCore.required,
};

export const readPostsResponseSchema = {
  type: "object",
  properties: {
    postId: { type: "string" },
  },
};


export const deletePostResponseSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
  },
  required: ["id"],
};

const postSchemas = {
  createPostSchema,
  createPostResponseSchema,
  deletePostResponseSchema,
  getPostSchema,
  readPostsResponseSchema,
};

export { postSchemas };

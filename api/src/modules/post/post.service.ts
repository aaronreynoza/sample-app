import prisma from "../../utils/prisma";

export async function createPost(input: any) {
  const { username, text, ...rest } = input;

  const post = await prisma.posts.create({
    data: { text, usersId: username, ...rest },
  });

  return post;
}

export async function deletePost(postId: string) {
  return prisma.posts.delete({
    where: { id: postId },
  });
}

export async function findPost(req: any) {
  const { postId } = req.params;
  return await prisma.posts.findUnique({
    where: { id: postId },
  });
}

export async function findPosts() {
  return prisma.posts.findMany({
    select: { id: true, text: true, usersId: true },
  });
}

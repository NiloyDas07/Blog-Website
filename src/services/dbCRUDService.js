import { createPost, deletePost, getPost, getPosts } from "../appwrite/config";

async function createPost({
  title,
  slug,
  content,
  featuredImage,
  status,
  userId,
}) {
  try {
    return await createPost({
      title,
      slug,
      content,
      featuredImage,
      status,
      userId,
    });
  } catch (error) {}
}

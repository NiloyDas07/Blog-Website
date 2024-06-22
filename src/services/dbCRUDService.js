import appwriteService from "../appwrite/config";

async function createPost({
  title,
  slug,
  content,
  featuredImage,
  status,
  userId,
}) {
  try {
    const file = featuredImage
      ? await appwriteService.uploadFile(featuredImage)
      : null;

    return await appwriteService.createPost({
      title,
      slug,
      content,
      featuredImage: file ? file.$id : null,
      status,
      userId,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function updatePost(
  slug,
  { title, content, originalImage, newImage, status },
) {
  try {
    const file = newImage ? await appwriteService.uploadFile(newImage) : null;

    if (file) appwriteService.deleteFile(originalImage);

    return await appwriteService.updatePost(slug, {
      title,
      content,
      featuredImage: file ? file.$id : originalImage,
      status,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deletePost(slug) {
  try {
    return await appwriteService.deletePost(slug);
  } catch (error) {
    return false;
  }
}

async function getPost(slug) {
  try {
    return await appwriteService.getPost(slug);
  } catch (error) {
    return false;
  }
}

async function getPosts() {
  try {
    return await appwriteService.getPosts();
  } catch (error) {
    return false;
  }
}

async function getFilePreview(fileId) {
  try {
    return await appwriteService.getFilePreview(fileId);
  } catch (error) {
    return false;
  }
}

export {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getPosts,
  getFilePreview,
};

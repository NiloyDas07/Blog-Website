import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class appwriteService {
  client = new Client();
  databases;
  buckets;

  /**
   * Initializes the client with endpoint and project ID, and sets up databases and buckets.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.buckets = new Storage(this.client);
  }

  /**
   * Creates a new post in the specified Appwrite database and collection.
   *
   * @param {Object} postData - The data for the new post.
   * @param {string} postData.title - The title of the post.
   * @param {string} postData.slug - The slug of the post.
   * @param {string} postData.content - The content of the post.
   * @param {string} postData.featuredImage - The URL of the featured image.
   * @param {string} postData.status - The status of the post.
   * @param {string} postData.userId - The ID of the user who created the post.
   * @return {Promise<Object>} A promise that resolves to the created document.
   * @throws {Error} If the document creation fails.
   */
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionPostsId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates a post in the Appwrite database with the given slug.
   *
   * @param {string} slug - The unique identifier of the post.
   * @param {Object} data - The updated data for the post.
   * @param {string} data.title - The new title of the post.
   * @param {string} data.content - The new content of the post.
   * @param {string} data.featuredImage - The new URL of the featured image.
   * @param {string} data.status - The new status of the post.
   * @return {Promise<Object>} A promise that resolves to the updated document.
   * @throws {Error} If the document update fails.
   */
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionPostsId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        },
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a post from the Appwrite database with the given slug.
   *
   * @param {string} slug - The unique identifier of the post.
   * @return {Promise<boolean>} A promise that resolves to true if the post is successfully deleted, otherwise false.
   * @throws {Error} If the post deletion fails.
   */
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionPostsId,
        slug,
      );

      return true;
    } catch (error) {
      console.log("Error in Appwrite Service :: deletePost ", error);
      return false;
    }
  }

  /**
   * Retrieves a post from the Appwrite database with the given slug.
   *
   * @param {string} slug - The unique identifier of the post.
   * @return {Promise<Object|boolean>} A promise that resolves to the post document if successful, or false if an error occurs.
   */
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionPostsId,
        slug,
      );
    } catch (error) {
      console.log("Error in Appwrite Service :: getPost ", error);
      return false;
    }
  }

  /**
   * Retrieves a list of posts from the databases based on the given queries.
   *
   * @param {Array} queries - An array of queries used to filter the posts. Defaults to [Query.equal("status", "active")].
   * @return {Promise<Array|boolean>} - A promise that resolves to an array of posts if successful, or false if an error occurs.
   */
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionPostsId,
        queries,
      );
    } catch (error) {
      console.log("Error in Appwrite Service :: getPosts ", error);
      return false;
    }
  }

  // File/Bucket Upload Services

  /**
   * Uploads a file to the Appwrite bucket.
   *
   * @param {File} file - The file to be uploaded.
   * @return {Promise<Object|boolean>} A promise that resolves to the uploaded file object if successful, or false if an error occurs.
   */
  async uploadFile(file) {
    try {
      return await this.buckets.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.log("Error in Appwrite Service :: uploadFile ", error);
      return false;
    }
  }

  /**
   * Deletes a file from the Appwrite bucket with the given fileId.
   *
   * @param {string} fileId - The unique identifier of the file to be deleted.
   * @return {Promise<boolean>} A promise that resolves to true if the file is successfully deleted, otherwise false.
   */
  async deleteFile(fileId) {
    try {
      return await this.buckets.deleteFile(fileId);
    } catch (error) {
      console.log("Error in Appwrite Service :: deleteFile ", error);
      return false;
    }
  }

  /**
   * Retrieves the preview of a file from the Appwrite bucket.
   *
   * @param {string} fileId - The unique identifier of the file.
   * @return {Promise<Object|boolean>} A promise that resolves to the file preview object if successful, or false if an error occurs.
   */
  getFilePreview(fileId) {
    try {
      return this.buckets.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Error in Appwrite Service :: getFilePreview ", error);
      return false;
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
export { createPost, deletePost, getPost, getPosts };

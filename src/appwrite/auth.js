import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

/**
 * Class representing the authentication service using Appwrite.
 */
export class AppwriteAuthService {
  client = new Client();
  account;

  /**
   * Initialize the Appwrite client and account.
   */
  constructor() {
    // Create the account only after a new object is created.
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  /**
   * Create a new user account.
   * @param {Object} param0 - The user details.
   * @param {string} param0.name - The name of the user.
   * @param {string} param0.email - The email of the user.
   * @param {string} param0.password - The password of the user.
   * @returns {Promise<Object|boolean>} - Returns the login session if account creation is successful, otherwise false.
   * @throws Will throw an error if account creation fails.
   */
  async createAccount({ name, email, password }) {
    console.log("createAccount", name, email, password);
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) return await this.login({ email, password });
      else return false;
    } catch (error) {
      console.log("Error in Appwrite Service :: createAccount ", error);
      throw error;
    }
  }

  /**
   * Login with email and password.
   * @param {Object} param0 - The login details.
   * @param {string} param0.email - The email of the user.
   * @param {string} param0.password - The password of the user.
   * @returns {Promise<Object>} - Returns the session object if login is successful.
   * @throws Will throw an error if login fails.
   */
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get the currently logged-in user.
   * @returns {Promise<Object|boolean>} - Returns the user account if a user is logged in, otherwise false.
   * @throws Will throw an error if fetching the current user fails.
   */
  async getCurrentUser() {
    try {
      // If user is logged in then return the account.
      return await this.account.get();
    } catch (error) {
      throw error;
    }

    return false;
  }

  /**
   * Logout the current user.
   * @returns {Promise<Object>} - Returns the result of the session deletion.
   * @throws Will throw an error if logout fails.
   */
  async logout() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      throw error;
    }
  }
}

const appwriteAuthService = new AppwriteAuthService();

export default appwriteAuthService;

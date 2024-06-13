import appwriteAuthService from "../appwrite/auth";

/**
 * @returns {Promise<Object|boolean>} - Returns the login session if account creation is successful, otherwise false.
 */
async function createAccount(data) {
  console.log('services', data)
  try {
    return await appwriteAuthService.createAccount(data);
  } catch (error) {
    throw error;
  }
}

/**
 * Login with email and password.
 * @returns {Promise<Object>} - Returns the session object if login is successful.
 */
async function login({ email, password }) {
  try {
    return await appwriteAuthService.login({ email, password });
  } catch (error) {
    throw error;
  }
}

/**
 * Get the currently logged-in user.
 * @returns {Promise<Object|boolean>} - Returns the user account if a user is logged in, otherwise false.
 */
async function getCurrentUser() {
  try {
    return await appwriteAuthService.getCurrentUser();
  } catch (error) {
    throw error;
  }
}

/**
 * Logout the current user.
 * @returns {Promise<Object>} - Returns the result of the session deletion.
 */
async function logout() {
  try {
    return await appwriteAuthService.logout();
  } catch (error) {
    throw error;
  }
}

export { createAccount, login, getCurrentUser, logout };

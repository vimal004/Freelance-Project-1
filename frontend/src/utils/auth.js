// Mock token storage key
const AUTH_TOKEN_KEY = "mern_dashboard_auth_token";

/**
 * Mock login function.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {boolean} - True if login is successful (mock credentials match).
 */
export const login = (email, password) => {
  // Hardcoded credentials for mock authentication
  if (email === "123@gmail.com" && password === "123") {
    localStorage.setItem(AUTH_TOKEN_KEY, "mock-jwt-token-12345");
    return true;
  }
  return false;
};

/**
 * Checks if a user is currently authenticated.
 * @returns {boolean} - True if a token exists in local storage.
 */
export const isAuthenticated = () => {
  return !!localStorage.getItem(AUTH_TOKEN_KEY);
};

// You can add a logout function if needed later
export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

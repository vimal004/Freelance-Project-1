// Mock token storage key
const AUTH_TOKEN_KEY = "mern_dashboard_auth_token";

/**
 * Mock login function.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @param {string} role - The selected user role ('Admin' or 'User').
 * @returns {boolean} - True if login is successful (mock credentials match).
 */
export const login = (email, password, role) => {
  let isAuthenticated = false;

  // Hardcoded credentials for mock authentication based on role
  if (role === "Admin" && email === "123@gmail.com" && password === "123") {
    isAuthenticated = true;
  } else if (role === "User" && email === "user@kayaa.com" && password === "user123") {
    isAuthenticated = true;
  } else if (role === "Other" && email === "123@gmail.com" && password === "123") {
    isAuthenticated = true;
  }

  if (isAuthenticated) {
    // In a real app, the token would encode the role
    localStorage.setItem(AUTH_TOKEN_KEY, `mock-jwt-token-${role}`);
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
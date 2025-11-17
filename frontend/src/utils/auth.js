// frontend/src/utils/auth.js

// Mock User Database (to simulate persistence)
const MOCK_USERS = [
  { email: "admin@kayaa.com", password: "admin123", role: "Admin" },
  { email: "user@kayaa.com", password: "user123", role: "User" },
];

const AUTH_TOKEN_KEY = "mern_dashboard_auth_token";

/**
 * Mock login function.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @param {string} role - The selected user role ('Admin' or 'User').
 * @returns {boolean} - True if login is successful (mock credentials match).
 */
export const login = (email, password, role) => {
  const user = MOCK_USERS.find(u => u.email === email && u.password === password && u.role === role);

  if (user) {
    // Store token and the role in local storage
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

/**
 * Retrieves the user's role from the stored token.
 * @returns {string | null} - The role (Admin or User) or null if not authenticated.
 */
export const getRole = () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    // Mock token structure: mock-jwt-token-ROLE
    const match = token.match(/mock-jwt-token-(.+)/);
    // If we can't parse the role, default to 'User'
    return match ? match[1] : 'User'; 
  }
  return null;
};

/**
 * Logs out the user and clears authentication state.
 */
export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

/**
 * MOCK function to simulate inviting a new user and assigning a role.
 * In a real app, this would hit an API endpoint.
 */
export const mockInviteUser = (email, role) => {
    // Check if user already exists
    if (MOCK_USERS.find(u => u.email === email)) {
        return { success: false, message: "User already exists." };
    }
    
    // Simulate user creation (using a default mock password)
    MOCK_USERS.push({ email, password: "default_mock_password", role });
    
    // Log for verification
    console.log(`[MOCK DB] Invited new ${role}: ${email}. Total users: ${MOCK_USERS.length}`);

    return { success: true, message: `Successfully invited ${email} with ${role} privileges.` };
};
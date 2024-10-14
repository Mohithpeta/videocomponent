// src/api/authApi.js

// Function to handle login with Google
export const loginWithGoogle = async (token) => {
    try {
      const response = await fetch('/api/auth/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to log in with Google');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during Google login:', error);
      return null;
    }
  };
  
  // Function to get user preferences
  export const getUserPreferences = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}/preferences`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user preferences');
      }
  
      const preferences = await response.json();
      return preferences;
    } catch (error) {
      console.error('Error fetching user preferences:', error);
      return null;
    }
  };
  
  // Function to log out user
  export const logoutUser = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to log out');
      }
  
      return true;
    } catch (error) {
      console.error('Error during logout:', error);
      return false;
    }
  };
  
import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getUserPreferences, loginWithGoogle, logoutUser } from '../api/authApi';

// Create Auth Context
export const AuthContext = createContext(); // Exporting the AuthContext

// Custom hook to use AuthContext
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [preferences, setPreferences] = useState(null); // State to store user preferences
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Example function to log in with Google
  const login = async () => {
    const result = await loginWithGoogle();
    if (result) {
      setUser(result.user);
      const userPreferences = await getUserPreferences(result.user.id); // Fetch preferences from backend
      setPreferences(userPreferences); // Store preferences in state
      navigate('/dashboard'); // Redirect to a protected route
    }
  };

  // Example function to log out
  const logout = async () => {
    await logoutUser();
    setUser(null);
    setPreferences(null); // Clear preferences on logout
    navigate('/');
  };

  // Function to check for an existing session
  const checkSession = async () => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
      const userPreferences = await getUserPreferences(savedUser.id); // Fetch preferences if user exists
      setPreferences(userPreferences); // Store preferences in state
    }
    setLoading(false);
  };

  useEffect(() => {
    // Check session on mount
    checkSession();
  }, []);

  // Provide the user state, login/logout functions, preferences, and checkSession to the rest of the app
  const value = { user, preferences, login, logout, checkSession };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Only render children if not loading */}
    </AuthContext.Provider>
  );
};

// PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children as React node
};


import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the path as necessary
import PropTypes from 'prop-types'; // Import PropTypes

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  return children; // Render the children if the user is authenticated
};

// PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is required and is a node
};

// Default export
export default ProtectedRoute;

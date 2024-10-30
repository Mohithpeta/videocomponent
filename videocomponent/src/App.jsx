import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import VideosPage from './pages/VideosPage';
import ArticlesPage from './pages/ArticlesPage'; // Import the ArticlesPage
import Profile from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider, useAuth } from './context/AuthContext'; // Ensure correct import of useAuth
import GoogleLoginButton from './components/GoogleLoginButton';
import './App.css';

const AppContent = () => {
  const { user, checkSession } = useAuth(); // Access user and checkSession from auth context
  const isAuthenticated = Boolean(user); // Determine if the user is authenticated

  // Check for an existing session when the app loads
  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<GoogleLoginButton />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/articles" element={<ArticlesPage />} /> {/* New Articles route */}
        
        {/* Protected Routes */}
        <Route 
          path="/profile" 
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>} 
        />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
};

export default App;

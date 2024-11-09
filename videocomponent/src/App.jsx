import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import VideosPage from './pages/VideosPage';
import ArticlesPage from './pages/ArticlesPage';
import PostpartumHypertension from './pages/PostpartumHypertension';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider, useAuth } from './context/AuthContext';
import GoogleLoginButton from './components/GoogleLoginButton';
import './App.css';
import AnalIncontinence from './pages/AnalIncontinence';
import UrinaryIncontinence from './pages/UrinaryIncontinence';
import GestationalDiabetes from './pages/GestationalDiabetes';
import DyspareuniaArticle from './pages/Dyspareunia';
import PelvicProlapseArticle from './pages/PelvicOrganProlapse';
import Obesity from './pages/Obesity';
import BackPain from './pages/BackPain';
import Depression from './pages/Depression';
import Anxiety from './pages/Anxiety';
import SecondaryInfertility from './pages/SecondaryInfertility';

const AppContent = () => {
  const { user, checkSession } = useAuth();
  const isAuthenticated = Boolean(user);

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
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/postpartum-hypertension" element={<PostpartumHypertension />} /> {/* Updated route for PostpartumHypertension */}
        <Route path="/articles/anal-incontinence" element={<AnalIncontinence />} />
        <Route path="/articles/urinary-incontinence" element={<UrinaryIncontinence />} />
        <Route path="/articles/gestational-diabetes" element={<GestationalDiabetes />} />
        <Route path="/articles/dyspareunia" element={<DyspareuniaArticle />} />
        <Route path="/articles/pelvic-organ-prolapse" element={<PelvicProlapseArticle />} />
        <Route path="/articles/obesity" element={<Obesity />} />
        <Route path="/articles/back-pain" element={<BackPain />} />
        <Route path="/articles/depression" element={<Depression />} />
        <Route path="/articles/anxiety" element={<Anxiety />} />
        <Route path="/articles/secondary-infertility" element={<SecondaryInfertility />} />
        {/* Protected Routes */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              
            </ProtectedRoute>
          } 
        />

        {/* Handle 404 - Not Found */}
        <Route 
          path="*" 
          element={<h2>404 - Page Not Found</h2>} 
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

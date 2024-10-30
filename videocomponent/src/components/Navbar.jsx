import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you have a CSS file for styling
import DVLogo from '../assets/DVLogo.png'; // Import the logo from the assets folder

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={DVLogo} alt="DeepVital Logo" className="navbar-logo-img" />
          DeepVital
        </Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/videos" className="navbar-item">Videos</Link>
          <Link to="/articles" className="navbar-item">Articles</Link>
          <Link to="/language" className="navbar-item">Language</Link>
          <Link to="/signin" className="navbar-item">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

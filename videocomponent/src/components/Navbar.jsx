// Navbar.js

import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Postpartum Care
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

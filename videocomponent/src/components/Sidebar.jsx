// src/components/Sidebar.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './Sidebar.css';

const Sidebar = ({ articleId }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const fetchHeadings = async () => {
      // Fetch headings from Strapi CMS based on the articleId
      try {
        const response = await fetch(`http://localhost:1337/articles/${articleId}`);
        const data = await response.json();
        setHeadings(data.headings || []);
      } catch (error) {
        console.error('Error fetching headings:', error);
      }
    };

    if (articleId) {
      fetchHeadings();
    }
  }, [articleId]);

  const scrollToHeading = (id) => {
    const headingElement = document.getElementById(id);
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="sidebar">
      <h2>Table of Contents</h2>
      {headings.length > 0 ? (
        <ul>
          {headings.map((heading) => (
            <li key={heading.id}>
              <button onClick={() => scrollToHeading(heading.id)}>{heading.title}</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No headings available</p>
      )}
    </aside>
  );
};

// PropTypes validation
Sidebar.propTypes = {
  articleId: PropTypes.string.isRequired, // Validate articleId prop as a required string
};

export default Sidebar;

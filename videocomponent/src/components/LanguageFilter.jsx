import { useState, useEffect } from 'react';
import styled from 'styled-components'; // For smooth transition effects and styling
import axios from 'axios';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

// Styled-components for dropdown and container
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 10px;
`;

const Dropdown = styled.select`
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  transition: all 0.3s ease-in-out;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  &:focus {
    border-color: #FF0000; /* Similar to YouTube's focus color */
    box-shadow: 0 0 8px rgba(255, 0, 0, 0.5); /* Transition effect for focus */
    outline: none;
  }
`;

// LanguageFilter Component
const LanguageFilter = ({ onLanguageChange }) => {
  const [availableLanguages, setAvailableLanguages] = useState([]);
  const defaultLanguage = 'en'; // Default language is English
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('preferredLanguage') || defaultLanguage);

  // Fetch available languages from the backend
  const fetchAvailableLanguages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/languages'); // Adjust the API endpoint as necessary
      setAvailableLanguages(response.data); // Assuming response.data returns an array of language objects with code and name
    } catch (error) {
      console.error('Error fetching available languages:', error);
    }
  };

  // Handle language change
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage); // Store preference in localStorage
    onLanguageChange(newLanguage); // Pass the selected language to the parent component
  };

  // Persist language preference (useEffect hook)
  useEffect(() => {
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      onLanguageChange(storedLanguage); // Apply the language stored in localStorage
    }
    fetchAvailableLanguages(); // Fetch available languages on mount
  }, [onLanguageChange]);

  return (
    <FilterContainer>
      <Dropdown value={selectedLanguage} onChange={handleLanguageChange}>
        {availableLanguages.length > 0 ? (
          availableLanguages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))
        ) : (
          <option value="" disabled>
            Loading languages...
          </option>
        )}
      </Dropdown>
    </FilterContainer>
  );
};

// Prop validation
LanguageFilter.propTypes = {
  onLanguageChange: PropTypes.func.isRequired, // Require the onLanguageChange prop to be a function
};

export default LanguageFilter;

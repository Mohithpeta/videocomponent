import { useState, useEffect } from 'react';
import styled from 'styled-components'; // For smooth transition effects and styling

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
  // Available languages (with English as default)
  const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'bn', name: 'Bengali' },
    { code: 'te', name: 'Telugu' },
    { code: 'mr', name: 'Marathi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'ur', name: 'Urdu' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'kn', name: 'Kannada' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'pa', name: 'Punjabi' },
  ];

  const defaultLanguage = 'en'; // Default language is English
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('preferredLanguage') || defaultLanguage);

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
  }, [onLanguageChange]);

  return (
    <FilterContainer>
      <Dropdown value={selectedLanguage} onChange={handleLanguageChange}>
        {availableLanguages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </Dropdown>
    </FilterContainer>
  );
};

export default LanguageFilter;

import { useState } from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import LanguageFilter from './LanguageFilter';
import VideoList from './VideoList';

const ParentComponent = () => {
  const [language, setLanguage] = useState('en');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    setSearchTerm(query);
  };

  return (
    <div className="parent-container">
      <GoogleLoginButton />
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Search for videos..." />
        <button type="submit">Search</button>
      </form>
      <LanguageFilter onLanguageChange={handleLanguageChange} />
      <VideoList language={language} searchTerm={searchTerm} />
    </div>
  );
};

export default ParentComponent;

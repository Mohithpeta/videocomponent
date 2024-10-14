import { useState, useEffect } from 'react';
import LanguageFilter from './LanguageFilter'; // Import the LanguageFilter component

// Mock data (In a real app, you'd fetch this from the backend)
const mockVideos = [
  { id: 'X1', title: 'Learning React', description: 'A complete guide to React.', language: 'en' },
  { id: 'X2', title: 'React in Hindi', description: 'React tutorial in Hindi.', language: 'hi' },
  { id: 'X3', title: 'Data Structures in Telugu', description: 'DSA explained in Telugu.', language: 'te' },
  { id: 'X4', title: 'CSS Grids in Bengali', description: 'Learn CSS Grid in Bengali.', language: 'bn' },
  { id: 'X5', title: 'Machine Learning Basics', description: 'Intro to Machine Learning.', language: 'en' },
  { id: 'X6', title: 'Blockchain in Marathi', description: 'Basics of Blockchain in Marathi.', language: 'mr' },
  { id: 'X7', title: 'Web Development in Tamil', description: 'Complete Web Dev guide in Tamil.', language: 'ta' },
  { id: 'X8', title: 'Urdu Programming Concepts', description: 'Programming in Urdu.', language: 'ur' },
  { id: 'X9', title: 'Python Programming in Malayalam', description: 'Learn Python in Malayalam.', language: 'ml' },
  { id: 'X10', title: 'SQL in Kannada', description: 'SQL basics explained in Kannada.', language: 'kn' },
  { id: 'X11', title: 'Gujrati Blockchain Basics', description: 'Introduction to blockchain.', language: 'gu' },
  { id: 'X12', title: 'Punjabi Machine Learning', description: 'Learn Machine Learning.', language: 'pa' }
];

const VideoList = () => {
  const [filteredVideos, setFilteredVideos] = useState(mockVideos); // State to hold filtered videos
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Default language is English

  // Handle language change (passed down to the LanguageFilter component)
  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);

    // Filter videos based on language selection
    if (language === 'en') {
      setFilteredVideos(mockVideos); // Reset to all videos if English is selected
    } else {
      const filtered = mockVideos.filter((video) => video.language === language);
      setFilteredVideos(filtered);
    }
  };

  useEffect(() => {
    // Simulating data fetch on language change (this can be updated with a real backend call)
    handleLanguageChange(currentLanguage);
  }, [currentLanguage]);

  return (
    <div>
      {/* Language Filter */}
      <h1>Select Language to Filter Videos</h1>
      <LanguageFilter onLanguageChange={handleLanguageChange} />

      {/* Display Filtered Videos */}
      <div className="video-grid">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => (
            <div key={index} className="video-item">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <p><strong>Language:</strong> {video.language}</p>
              {/* Example YouTube embed */}
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))
        ) : (
          <p>No videos available for the selected language.</p>
        )}
      </div>
    </div>
  );
};

export default VideoList;

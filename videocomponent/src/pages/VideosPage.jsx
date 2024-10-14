import { useState, useTransition } from 'react';
import Fuse from 'fuse.js';
import './VideosPage.css'; // Import the CSS file

const VideosPage = () => {
  const sampleVideos = [
    {
      id: 1,
      url: 'https://www.youtube.com/watch?v=example1',
      thumbnail: 'https://via.placeholder.com/280x180?text=Postpartum+Care+English',
      title: 'Postpartum Care: The First Six Weeks',
      description: 'Learn about the essential care for new mothers in the first six weeks after giving birth.',
      language: 'English',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/watch?v=example2',
      thumbnail: 'https://via.placeholder.com/280x180?text=Postpartum+Care+Spanish',
      title: 'Cuidado Postparto: Las Primeras Seis Semanas',
      description: 'Aprenda sobre el cuidado esencial para nuevas madres en las primeras seis semanas después del parto.',
      language: 'Spanish',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/watch?v=example3',
      thumbnail: 'https://via.placeholder.com/280x180?text=Postpartum+Care+Hindi',
      title: 'प्रसवोत्तर देखभाल: पहले छह सप्ताह',
      description: 'बच्चे के जन्म के बाद पहले छह हफ्तों में नई माताओं के लिए आवश्यक देखभाल के बारे में जानें।',
      language: 'Hindi',
    },
  ];

  const [videos, setVideos] = useState(sampleVideos);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('English');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  // Function for the text-to-speech feature
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  // Function to fetch videos from the backend
  const fetchVideos = async (query = '', selectedLanguage = 'English') => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/videos?search=${query}&language=${selectedLanguage}`);
      const data = await response.json();

      if (data.length > 0) {
        startTransition(() => {
          setVideos(data);
        });
      } else {
        handleFrontendSearch(query, selectedLanguage);
      }
    } catch (err) {
      setError('Failed to load videos from backend. Showing local videos.');
      console.error('Error fetching videos:', err);
      handleFrontendSearch(query, selectedLanguage);
    } finally {
      setLoading(false); // Ensure loading is set to false in all cases
    }
  };

  // Fallback search logic using Fuse.js
  const handleFrontendSearch = (query, selectedLanguage) => {
    const fuse = new Fuse(
      sampleVideos.filter(video => video.language === selectedLanguage),
      {
        keys: ['title', 'description'],
        includeScore: true,
        threshold: 0.3,
      }
    );

    const results = fuse.search(query);
    const filteredVideos = results.map(result => result.item);

    setVideos(filteredVideos.length > 0 ? filteredVideos : sampleVideos);
  };

  // Handle form submission for search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!loading) {
      startTransition(() => {
        fetchVideos(searchTerm, language);
      });
    }
  };

  // Handle language selection changes
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    startTransition(() => {
      fetchVideos(searchTerm, newLanguage);
    });
  };

  // Start speech recognition to populate search
  const startSpeechRecognition = () => {
    const recognition = new window.SpeechRecognition();
    recognition.lang = language;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
      fetchVideos(transcript, language);
    };

    recognition.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`);
      console.error('Speech recognition error: ', event.error);
    };

    recognition.onend = () => {
      console.log('Speech recognition ended.');
    };

    recognition.start();
  };

  return (
    <div className="videos-page">
      <h1 className="page-title">Video Resources</h1>
      
      {/* Language selector dropdown */}
      <div className="language-selector">
        <label htmlFor="language">Choose Language:</label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>

      {/* Search bar with speech input */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button" disabled={loading}>
          Search
        </button>
        <button type="button" onClick={startSpeechRecognition} className="speech-button">
          🎤 Speak
        </button>
      </form>

      {/* Loading and error messages */}
      {loading && <p className="loading-message">Loading videos...</p>}
      {error && <p className="error-message">{error}</p>}

      {/* Video grid displaying fetched videos */}
      <div className="video-grid">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className="video-card">
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link">
                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                <div className="video-info">
                  <h2 className="video-title">{video.title}</h2>
                  <p className="video-description">{video.description}</p>
                </div>
              </a>
              {/* Read aloud button for each video */}
              <button onClick={() => speak(video.title + '. ' + video.description)} className="tts-button">
                Read Aloud
              </button>
            </div>
          ))
        ) : (
          !loading && <p>No videos found. Try searching for something else.</p>
        )}
      </div>

      {isPending && <p>Updating videos...</p>}
    </div>
  );
};

export default VideosPage;

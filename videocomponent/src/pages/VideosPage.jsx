import { useState, useTransition } from 'react';
import Fuse from 'fuse.js';
import './VideosPage.css'; // Import the CSS file

const VideosPage = () => {
  const sampleVideos = [
    {
      id: "671b788d19a2d80d0e6677ee", // Sample _id used as id
      url: 'https://www.youtube.com/embed/JVu_mNqd-MM', // Constructed from videoId
      thumbnail: 'https://i.ytimg.com/vi/JVu_mNqd-MM/default.jpg',
      title: "Samita's Successful Knee Replacement Surgery | Dr. Lokesh A V | Manipal Hospital Old Airport Road",
      description: "Mrs. Samita Das, from Birbhum district in West Bengal, had endured severe knee pain for 7 to 8 years. After consulting local doctors, she was advised to undergo surgery. Dr. Lokesh diagnosed her with Grade 4 Osteoarthritis, and a Total Knee Replacement (TKR) surgery was performed. Today, she enjoys an active, pain-free life.",
      language: 'English',
    },
    // ... (Add more sample videos as needed)
  ];

  const [videos, setVideos] = useState(sampleVideos);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 12;

  const fetchVideos = async (query = '') => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `http://43.204.220.190/api/videos?search=${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch videos from backend.');
      }

      const data = await response.json();
      if (data && data.videos.length > 0) {
        const mappedVideos = data.videos.map(video => ({
          id: video._id, // Map _id to id
          url: `https://www.youtube.com/embed/${video.videoId}`, // Construct URL from videoId
          thumbnail: video.thumbnail,
          title: video.title,
          description: video.description,
        }));

        startTransition(() => {
          setVideos(mappedVideos); // Set fetched videos
          setCurrentPage(1); // Reset to the first page
        });
      } else {
        handleFrontendSearch(query);
      }
    } catch (err) {
      setError(`Failed to load videos from backend: ${err.message}`);
      console.error('Error fetching videos:', err);
      handleFrontendSearch(query);
    } finally {
      setLoading(false);
    }
  };

  const handleFrontendSearch = (query) => {
    const fuse = new Fuse(sampleVideos, {
      keys: ['title', 'description'],
      includeScore: true,
      threshold: 0.3,
    });

    const results = fuse.search(query);
    const filteredVideos = results
      .sort((a, b) => a.score - b.score)
      .map((result) => result.item);

    setVideos(filteredVideos.length > 0 ? filteredVideos : sampleVideos);
    setCurrentPage(1); // Reset to the first page after search
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!loading) {
      startTransition(() => {
        // Clear videos when starting a search to prevent clutter
        fetchVideos(searchTerm);
      });
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const paginatedVideos = videos.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const renderVideoCard = (video) => (
    <div key={video.id} className="video-card">
      <iframe
        src={video.url}
        title={video.title}
        className="video-iframe"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="video-info">
        <h2 className="video-title">{video.title}</h2>
        <p className="video-description">{video.description}</p>
      </div>
    </div>
  );

  return (
    <div className="videos-page">
      <h1 className="page-title">Video Resources</h1>

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
      </form>

      {loading && <p className="loading-message">Loading videos...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="video-grid">
        {paginatedVideos.length > 0 ? (
          paginatedVideos.map(renderVideoCard)
        ) : (
          !loading && <p>No videos found. Try searching for something else.</p>
        )}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      {isPending && <p>Updating videos...</p>}
    </div>
  );
};

export default VideosPage;

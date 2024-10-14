export const fetchVideos = async (searchTerm) => {
    // Simulating an API call to fetch videos based on search term and language.
    // Replace with actual API.
    
    const mockVideos = [
      { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
      { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
      { id: 3, title: 'Video 3', thumbnail: 'https://via.placeholder.com/150' },
    ];
  
    // Filtering based on search term
    return mockVideos.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the separate CSS file

const Home = () => {
  const navigate = useNavigate();

  const videos = [
    { id: 1, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Sample Video 1' },
    { id: 2, src: 'https://www.youtube.com/embed/oHg5SJYRHA0', title: 'Sample Video 2' },
    { id: 3, src: 'https://www.youtube.com/embed/C0DPdy98e4c', title: 'Sample Video 3' },
    { id: 4, src: 'https://www.youtube.com/embed/tgbNymZ7vqY', title: 'Sample Video 4' },
  ];

  const articles = [
    { title: 'Understanding Postpartum Care', description: 'A deep dive into postpartum health.', link: '/article1' },
    { title: 'Nutrition Tips for New Mothers', description: 'Essential nutrition tips during postpartum recovery.', link: '/article2' },
    { title: 'Mental Health After Pregnancy', description: 'Addressing mental health challenges post-delivery.', link: '/article3' },
    { title: 'Breastfeeding Basics', description: 'Guidelines for successful breastfeeding.', link: '/article4' },
    { title: 'Exercise After Delivery', description: 'Safe exercises to help regain strength.', link: '/article5' },
  ];

  return (
    <div className="home">
      <h1>Welcome to DeepVital Video Support</h1>

      {/* Video Grid */}
      <h2>Featured Videos</h2>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="grid-item">
            <iframe 
              width="100%" 
              height="200" 
              src={video.src} 
              title={video.title} 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>

      {/* Article Grid */}
      <h2>Articles</h2>
      <div className="article-grid">
        {articles.map((article, index) => (
          <div 
            key={index} 
            className="grid-item article-card" 
            onClick={() => navigate(article.link)}
          >
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

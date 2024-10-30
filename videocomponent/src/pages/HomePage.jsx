import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the separate CSS file

const Home = () => {
  const navigate = useNavigate();

  const videos = [
    { 
      id: 1, 
      src: 'https://www.youtube.com/embed/8Uc398hnc24', 
      title: 'Rethinking Postpartum Care | Sara Reardon | TEDxLSU' 
    },
    { 
      id: 2, 
      src: 'https://www.youtube.com/embed/sLohahqd9s8', 
      title: 'How postpartum care impacts long-term health | Marcy Crouch | TEDxUTulsa' 
    },
    { 
      id: 3, 
      src: 'https://www.youtube.com/embed/xwoi_Jsx2zc', 
      title: 'This is Your Postpartum In 2 Minutes | Glamour' 
    },
    { 
      id: 4, 
      src: 'https://www.youtube.com/embed/bUrY863QQwU', 
      title: 'Postpartum Care: Things No One Told You! My TMI Experience' 
    },
    { 
      id: 5, 
      src: 'https://www.youtube.com/embed/5m9uW8GZpPo', 
      title: 'Navigating Postpartum Life: Tips and Insights' 
    },
    { 
      id: 6, 
      src: 'https://www.youtube.com/embed/Yj1AvGBr7qg', 
      title: 'Understanding Postpartum Depression: What You Need to Know' 
    },
    { 
      id: 7, 
      src: 'https://www.youtube.com/embed/3zw2d5DgKTE', 
      title: 'The Importance of Support During Postpartum Recovery' 
    },
    { 
      id: 8, 
      src: 'https://www.youtube.com/embed/sE3r15h4tnY', 
      title: 'Postpartum Mental Health: Seeking Help and Support' 
    },
    { 
      id: 9, 
      src: 'https://www.youtube.com/embed/BhUYZFehQv0', 
      title: 'Coping with Postpartum Challenges: Personal Stories' 
    },
    { 
      id: 10, 
      src: 'https://www.youtube.com/embed/JKG6W6Ut8w0', 
      title: 'Postpartum Recovery: What to Expect' 
    },
  ];

  const articles = [
    { title: 'Understanding Postpartum Care', description: 'A deep dive into postpartum health.', link: '/article1' },
    { title: 'Nutrition Tips for New Mothers', description: 'Essential nutrition tips during postpartum recovery.', link: '/article2' },
    { title: 'Mental Health After Pregnancy', description: 'Addressing mental health challenges post-delivery.', link: '/article3' },
    { title: 'Breastfeeding Basics', description: 'Guidelines for successful breastfeeding.', link: '/article4' },
    { title: 'Exercise After Delivery', description: 'Safe exercises to help regain strength.', link: '/article5' },
    { title: 'Self-Care Strategies for New Moms', description: 'Prioritizing self-care during postpartum.', link: '/article6' },
    { title: 'Building a Support Network', description: 'The importance of community support for new mothers.', link: '/article7' },
    { title: 'Managing Postpartum Anxiety', description: 'Tips for coping with anxiety after childbirth.', link: '/article8' },
    { title: 'Tips for New Dads', description: 'How partners can support new mothers.', link: '/article9' },
    { title: 'Finding the Right Pediatrician', description: 'What to look for in a pediatrician for your newborn.', link: '/article10' },
  ];

  return (
    <div className="home">
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

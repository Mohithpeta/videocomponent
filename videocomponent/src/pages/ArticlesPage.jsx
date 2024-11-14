import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams to get article details from the URL
import Sidebar from './Sidebar'; // Import the Sidebar component
import SubtopicSidebar from './SubtopicSidebar'; // Import the SubtopicSidebar component
import './ArticlesPage.css';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const { articleId } = useParams(); // Get article ID from URL params

  useEffect(() => {
    // Fetch articles (mock data for now)
    const fetchArticles = async () => {
      const mockArticles = [
        { id: 1, title: 'POSTPARTUM HYPERTENSION', description: 'Postpartum Hypertension is characterized by a systolic blood pressure (SBP) of ≥ 140 mmHg and diastolic blood pressure (DBP) of ≥ 90 mmHg', link: '/articles/postpartum-hypertension' },
        { id: 2, title: 'ANAL INCONTINENCE', description: 'Anal Incontinence is the reporting of incontinence of stool monthly or more...', link: '/articles/anal-incontinence' },
        { id: 3, title: 'URINARY INCONTINENCE', description: 'Urinary incontinence is the involuntary loss of urine...', link: '/articles/urinary-incontinence' },
        { id: 4, title: 'GESTATIONAL DIABETES', description: 'Gestational diabetes refers to any level of glucose intolerance...', link: '/articles/gestational-diabetes' },
        { id: 5, title: 'DYSPAREUNIA', description: 'Dyspareunia, characterized by recurrent or persistent painful sexual intercourse...', link: '/articles/dyspareunia' },
        { id: 6, title: 'PELVIC ORGAN PROLAPSE', description: 'Pelvic organ prolapse refers to the downward displacement of pelvic organs...', link: '/articles/pelvic-organ-prolapse' },
        { id: 7, title: 'OBESITY', description: 'Overweight and obese are defined as abnormal or excessive fat accumulation...', link: '/articles/obesity' },
        { id: 8, title: 'BACK PAIN', description: 'Postpartum back pain is discomfort experienced after childbirth...', link: '/articles/back-pain' },
        { id: 9, title: 'DEPRESSION', description: 'Postpartum depression is a common but treatable mental health disorder...', link: '/articles/depression' },
        { id: 10, title: 'ANXIETY', description: 'Postpartum anxiety is a mental health condition that affects women...', link: '/articles/anxiety' },
        { id: 11, title: 'SECONDARY INFERTILITY', description: 'Secondary infertility refers to couples who are unable to conceive after a previous pregnancy...', link: '/articles/secondary-infertility' },
      ];
      setArticles(mockArticles);
    };

    fetchArticles();
  }, []);

  // Find the selected article using the articleId from the URL params
  const selectedArticle = articles.find((article) => article.link === `/articles/${articleId}`);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main Content on the right */}
      <div className="p-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Articles on Postpartum Care</h1>

        {/* If no article is selected, show the article list */}
        {!selectedArticle && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <Link
                  to={article.link}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  aria-label={`Read more about ${article.title}`}
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Conditionally render SubTopicSidebar and article content when an article is selected */}
        {selectedArticle && (
          <div className="flex space-x-8">
            {/* SubTopicSidebar displayed alongside the article */}
            <SubtopicSidebar />

            {/* Article content */}
            <div className="article-content mt-8 flex-1">
              <h2 className="text-2xl font-semibold">{selectedArticle.title}</h2>
              <p className="text-gray-700 mt-4">{selectedArticle.description}</p>
              {/* You can add more detailed content for the article here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;

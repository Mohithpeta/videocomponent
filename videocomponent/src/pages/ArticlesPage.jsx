import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ArticlesPage.css'

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const subtopics = [
    'Symptoms',
    'Risk Factors',
    'Screening',
    'Diagnosis',
    'Treatment',
    'Case Studies',
    'Specialists'
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      const mockArticles = [
        {
          id: 1,
          title: 'POSTPARTUM HYPERTENSION',
          description: 'Postpartum Hypertension is characterized by a systolic blood pressure (SBP) of ≥ 140 mmHg and diastolic blood pressure (DBP) of ≥ 90 mmHg',
          link: '/articles/postpartum-hypertension',
        },
        {
          id: 2,
          title: 'ANAL INCONTINENCE',
          description: 'Anal Incontinence is the reporting of incontinence of stool monthly or more, incontinence of flatus weekly or more, or combinations of two or more incontinence symptoms including fecal urgency.',
          link: '/articles/anal-incontinence',
        },
        {
          id: 3,
          title: 'URINARY INCONTINENCE',
          description: 'Urinary incontinence is the involuntary loss of urine, which can significantly affect a woman\'s health and quality of life.',
          link: '/articles/urinary-incontinence',
        },
        {
          id: 4,
          title: 'GESTATIONAL DIABETES',
          description: 'Gestational diabetes refers to any level of glucose intolerance that begins or is first identified during pregnancy.',
          link: '/articles/gestational-diabetes',
        },
        {
          id: 5,
          title: 'DYSPAREUNIA',
          description: 'Dyspareunia, characterized by recurrent or persistent painful sexual intercourse, is a prevalent condition.',
          link: '/articles/dyspareunia',
        },
        {
          id: 6,
          title: 'PELVIC ORGAN PROLAPSE',
          description: 'Pelvic organ prolapse refers to the downward displacement of pelvic organs.',
          link: '/articles/pelvic-organ-prolapse',
        },
        {
          id: 7,
          title: 'OBESITY',
          description: 'Overweight and obese are defined as abnormal or excessive fat accumulation that may impair health.',
          link: '/articles/obesity',
        },
        {
          id: 8,
          title: 'BACK PAIN',
          description: 'Postpartum back pain is discomfort experienced after childbirth.',
          link: '/articles/back-pain',
        },
        {
          id: 9,
          title: 'DEPRESSION',
          description: 'Postpartum depression is a common but treatable mental health disorder.',
          link: '/articles/depression',
        },
        {
          id: 10,
          title: 'ANXIETY',
          description: 'Postpartum anxiety is a mental health condition that affects women after childbirth.',
          link: '/articles/anxiety',
        },
        {
          id: 11,
          title: 'SECONDARY INFERTILITY',
          description: 'Secondary infertility refers to couples who are unable to conceive after a previous pregnancy.',
          link: '/articles/secondary-infertility',
        },
      ];
      setArticles(mockArticles);
    };

    fetchArticles();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md md:hidden"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-4 h-full overflow-y-auto">
          <h2 className="text-xl font-bold mb-6 pt-12 md:pt-4">Topics</h2>
          <nav>
            {articles.map((article) => (
              <div key={article.id} className="mb-2">
                <button
                  onClick={() => toggleExpanded(article.id)}
                  className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-100 rounded"
                >
                  <span className="text-sm font-medium">{article.title}</span>
                  <ChevronDown 
                    className={`transform transition-transform ${expandedItems[article.id] ? 'rotate-180' : ''}`}
                    size={16}
                  />
                </button>
                {expandedItems[article.id] && (
                  <div className="ml-4 mt-1 space-y-1">
                    {subtopics.map((subtopic) => (
                      <Link
                        key={subtopic}
                        to={`${article.link}/${subtopic.toLowerCase().replace(' ', '-')}`}
                        className="block p-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                      >
                        {subtopic}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`
        transition-all duration-300 ease-in-out
        md:ml-64 
      `}>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Articles on Postpartum Care</h1>
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
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
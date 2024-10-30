// src/pages/ArticlesPage.jsx
import { useState, useEffect } from 'react';
import './ArticlesPage.css';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      // Postpartum-related mock data
      const mockArticles = [
        {
          id: 1,
          title: 'POSTPARTUM HYPERTENSION',
          description: 'Postpartum Hypertension is characterized by a systolic blood pressure (SBP) of ≥ 140 mmHg and diastolic blood pressure (DBP) of ≥ 90 mmHg',
          link: '/articles/postpartum-care-tips',
        },
        {
          id: 2,
          title: 'ANAL INCONSISTENCE',
          description: 'Anal Incontinence is the reporting of incontinence of stool monthly or more, incontinence of flatus weekly or more, or combinations of two or more incontinence symptoms including fecal urgency.',
          link: '/articles/postpartum-depression',
        },
        {
          id: 3,
          title: 'URINARY INCONSISTENCE',
          description: 'Urinary incontinence is the involuntary loss of urine, which can significantly affect a woman\'s health and quality of life. It can increase the risk of urinary tract infections, skin ulceration, falls, fractures, and interfere with work, social activities, sexual function, and independence.',
          link: '/articles/postpartum-nutrition-exercise',
        },
        {
          id: 4,
          title: 'GESTATIONAL DIABETES',
          description: 'Gestational diabetes refers to any level of glucose intolerance that begins or is first identified during pregnancy.',
          link: '/articles/breastfeeding-guide',
        },
        {
          id: 5,
          title: 'DYSPAREUNIA',
          description: 'Dyspareunia, characterized by recurrent or persistent painful sexual intercourse, is a prevalent condition that can significantly impact women\'s mental and physical health, as well as their relationships. ',
          link: '/articles/postpartum-anxiety-management',
        },
        {
          id: 6,
          title: 'PELVIC ORGAN PROLAPSE',
          description: 'Pelvic organ prolapse, also known as urogenital prolapse, refers to the downward displacement of pelvic organs, leading to the protrusion of the vagina, uterus, or both. ',
          link: '/articles/postpartum-sleep-recovery',
        },
        {
          id: 7,
          title: 'OBESITY',
          description: 'Overweight and obese are defined as “abnormal or excessive fat accumulation that may impair health”. It is measured by BMI of greater than 30 kg/m².',
          link: '/articles/postpartum-return-to-work',
        },
        {
          id: 8,
          title: 'BACK PAIN',
          description: 'Postpartum back pain is discomfort experienced after childbirth, often due to physical strain during pregnancy and changes in posture and musculoskeletal support.',
          link: '/articles/postpartum-skin-hair-care',
        },
        {
          id: 9,
          title: 'DEPRESSION',
          description: 'Postpartum depression is a common but treatable mental health disorder that often arises after childbirth, making it one of the most frequent complications of childbearing',
          link: '/articles/postpartum-support-community',
        },
        {
          id: 10,
          title: 'ANXIETY',
          description: ' Postpartum anxiety is a mental health condition that affects women after childbirth, typically within the first four weeks. It is characterized by excessive worry, tension, fatigue, irritability, difficulty concentrating, and insomnia. ',
          link: '/articles/postpartum-physical-therapy',
        },
        {
            id: 11,
            title: 'SECONDARY INFERTILITY',
            description: ' Secondary infertility refers to couples who are unable to conceive after a year of unprotected intercourse following a previous pregnancy. ',
            link: '/articles/postpartum-physical-therapy',
          },
      ];
      setArticles(mockArticles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="articles-page">
      <h1>Articles on Postpartum Care</h1>
      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link} className="read-more-link" aria-label={`Read more about ${article.title}`}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;

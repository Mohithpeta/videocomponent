import './Sidebar.css';
import { Link } from 'react-router-dom';

const topics = [
  'Postpartum Hypertension',
  'Anal Incontinence',
  'Urinary Incontinence',
  'Gestational Diabetes',
  'Dyspareunia',
  'Pelvic Organ Prolapse',
  'Obesity',
  'Back Pain',
  'Depression',
  'Anxiety',
  'Secondary Infertility'
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Main Topics</h3>
      <ul>
        {topics.map((topic) => (
          <li key={topic}>
            <Link to={`/articles/${topic.toLowerCase().replace(/ /g, '-')}`}>
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

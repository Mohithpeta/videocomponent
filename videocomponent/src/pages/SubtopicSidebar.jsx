import './SubtopicSidebar.css';

// Sample list of subtopics
const subtopics = [
  'Symptoms',
  'Risk factors',
  'Screening',
  'Diagnosis',
  'Treatment',
  'Case Studies',
  'Specialists',
];

const SubtopicSidebar = () => {
  return (
    <div className="mainy">
      <aside className="subtopic-sidebar">
        {/* Image Container (if needed for icons or images related to each subtopic) */}
        <div className="image-container">
          {/* Optional: You can add an image or icon for each subtopic */}
        </div>

        {/* Subtopics List */}
        <nav className="subtopics-list">
          <ol>
            {subtopics.map((subtopic, index) => (
              <li key={index} className="subtopic-item">
                <a href={`#${subtopic.toLowerCase().replace(/ /g, '-')}`} className="subtopic-link">
                  {subtopic}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>
    </div>
  );
};

export default SubtopicSidebar;

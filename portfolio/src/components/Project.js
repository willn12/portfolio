export default function Project({ title, description, imageUrl, technologies, demoLink, codeLink }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="technology-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 
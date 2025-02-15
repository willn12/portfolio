import '../styles/Skills.css';

export default function Skills() {
  const skills = {
    "Frontend": ["HTML5", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    "Backend": ["Python", "Java", "Django", "Ruby on Rails", "Supabase"],
    "Database": ["MariaDB", "PostgreSQL", "MySQL"],
    "Tools": ["Git", "Jira", "Miro", "Bitbucket"]
  };

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-items">
              {categorySkills.map(skill => (
                <span key={skill} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
import Project from './Project';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      imageUrl: "/path-to-project1-image.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      demoLink: "https://demo1.example.com",
      codeLink: "https://github.com/username/project1"
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
} 
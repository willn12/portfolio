import Project from './Project';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Startup Buddy",
      description: "Built a web application enabling users to create and showcase startup ideas, while allowing others to join and contribute to their development. Utilized modern AI technologies to enhance user experience and matchmaking.",
      technologies: ["React", "TypeScript", "Vite", "shadcn-ui", "Tailwind CSS", "Modern AI Tools"],
      codeLink: "https://startup-display.lovable.app/"
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
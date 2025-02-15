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
    {
      title: "Daily 20 Game",
      description: "A game following the 20 questions game, using openai to generate answers and allowing users to ask questions and gues the answer.",
      technologies: ["Python", "Django", "OPENAI API"],
      codeLink: "https://github.com/willn12/daily20Game"
    },
    {
      title: "Costco Compas",
      description: "This was an app I created to get more familiar with MySQL, as well as Python and Flask. This app allows users to create an account to find products at different costco locations. An admin of this app is able to view all tables of the store, including products, employees, categories, locations, and a few more!",
      technologies: ["Python", "Flask", "MySQL"],
      codeLink: "https://github.com/willn12/costco-compas"
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
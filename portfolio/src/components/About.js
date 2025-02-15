import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="/path-to-your-image.jpg" alt="Your Name" />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm a passionate full-stack developer with a strong foundation in
            modern web technologies. I love creating efficient, scalable, and
            user-friendly solutions to complex problems.
          </p>
          <p>
            With experience in both front-end and back-end development, I enjoy
            working on all aspects of web applications, from user interfaces to
            database architecture.
          </p>
          <div className="about-buttons">
            <a 
              href="/path-to-your-resume.pdf" 
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
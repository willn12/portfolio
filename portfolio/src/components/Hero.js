import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
        <h2>Full Stack Developer</h2>
        <p>I create beautiful and functional web applications</p>
        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">View My Work</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
} 
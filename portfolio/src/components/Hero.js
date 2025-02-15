import '../styles/Hero.css';

const Hero = ({ darkMode }) => {

  return (
    <section id="home" className="hero">
      <div className="animation-container">
        {darkMode ? (
          <div className="stars">
            {[...Array(40)].map((_, index) => (
              <div key={index} className="shooting-star"></div>
            ))}
          </div>
        ) : (
          <div className="rain">
            {[...Array(15)].map((_, index) => (
              <div key={index} className="raindrop"></div>
            ))}
          </div>
        )}
      </div>
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Will Nylund</span></h1>
        <h2>Full Stack Developer</h2>
        <p className="hero-description">Crafting innovative web solutions with modern technologies</p>
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
};

export default Hero; 
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-bio">
            I'm a passionate software engineer dedicated to building elegant solutions 
            to complex problems. With expertise in modern web technologies and a focus 
            on user experience, I create applications that make a difference.
          </p>
        </div>
      </div>
      
      <div className="value-proposition">
        <h3 className="section-title">What I Bring to the Table</h3>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h4>Innovation</h4>
            <p>
              Bringing fresh perspectives and creative solutions to every project, 
              always staying ahead of the curve with emerging technologies.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h4>Precision</h4>
            <p>
              Writing clean, maintainable code with attention to detail and a commitment 
              to quality that ensures long-term project success.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h4>Performance</h4>
            <p>
              Optimizing every aspect of development to deliver fast, efficient, 
              and scalable solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

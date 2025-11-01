import './Home.css';
import profilePicture from '../assets/profile-picture.jpg';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-picture">
            <img src={profilePicture} alt="Sugyeong Hong" className="profile-img" />
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Sugyeong Hong</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-bio">
            I am passionate about leveraging AI and machine learning to create solutions that serve people, not just technology.
            My goal is to apply data-driven innovation in ways that are ethical, transparent, and genuinely beneficial to society—bridging the gap between technical advancement and human well-being.
          </p>
        </div>
      </div>
      
      {/* <div className="value-proposition">
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
      </div> */}
    </div>
  );
}

export default Home;

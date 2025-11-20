import "./Home.css";
import profilePicture from "../assets/profile-picture.jpg";

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-picture">
            <img
              src={profilePicture}
              alt="Sugyeong Hong"
              className="profile-img"
            />
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Sugyeong Hong</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-bio">
            I am passionate about leveraging AI and machine learning to create
            solutions that serve people, not just technology. My goal is to
            apply data-driven innovation in ways that are ethical, transparent,
            and genuinely beneficial to society—bridging the gap between
            technical advancement and human well-being.
          </p>
        </div>
      </div>

      <div className="bio-sections">
        <section className="bio-section">
          <h3 className="bio-section-title">Education</h3>
          <p className="bio-section-content">
            Currently pursuing studies in Artificial Intelligence and Machine
            Learning, focusing on developing practical applications that combine
            technical expertise with ethical considerations. My coursework
            emphasizes hands-on experience with cutting-edge AI tools, prompt
            engineering, and collaborative problem-solving.
          </p>
        </section>

        <section className="bio-section">
          <h3 className="bio-section-title">Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Programming Languages & Frameworks</h4>
              <ul className="skills-list">
                <li>Python (Django)</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Frontend Frameworks</h4>
              <ul className="skills-list">
                <li>ReactJS</li>
                <li>VueJS</li>
                <li>React Native</li>
                <li>HTML5/CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools & Cloud</h4>
              <ul className="skills-list">
                <li>Git</li>
                <li>AWS</li>
                <li>Firestore</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;

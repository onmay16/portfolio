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
          <h3 className="bio-section-title">Personal Value Proposition</h3>
          <p className="bio-section-content">
            As an AI/ML student and future leader, I bring a unique combination
            of technical expertise, ethical awareness, and practical
            problem-solving skills. My value lies in my ability to bridge the
            gap between complex AI technologies and real-world applications that
            genuinely benefit people. I combine strong prompt engineering skills
            with creative storytelling to make AI concepts accessible, while
            maintaining a deep commitment to ethical AI development that ensures
            equitable outcomes across diverse populations. My approach emphasizes
            both the practical implementation of AI solutions and the ethical
            considerations necessary for responsible deployment, particularly in
            critical domains like healthcare.
          </p>
        </section>

        <section className="bio-section">
          <h3 className="bio-section-title">Target Audience</h3>
          <p className="bio-section-content">
            This portfolio is designed for <strong>AI/ML educators, industry
            professionals, and potential collaborators</strong> who are
            interested in understanding how AI/ML students are developing both
            technical skills and ethical awareness. Specifically, this portfolio
            is relevant to:
          </p>
          <ul className="target-audience-list">
            <li>
              <strong>AI/ML Educators and Program Directors</strong> seeking to
              understand student learning outcomes and the integration of
              practical skills with ethical considerations
            </li>
            <li>
              <strong>Industry Professionals and Hiring Managers</strong> looking
              for candidates who combine technical AI/ML capabilities with
              strong communication skills and ethical awareness
            </li>
            <li>
              <strong>Peers and Fellow Students</strong> interested in learning
              from examples of effective prompt engineering, creative
              storytelling, and ethical AI development
            </li>
            <li>
              <strong>Potential Collaborators</strong> in healthcare, education,
              or other domains where ethical AI deployment is critical
            </li>
          </ul>
          <p className="bio-section-content" style={{ marginTop: "1rem" }}>
            This portfolio demonstrates not just technical skills, but the
            ability to communicate complex concepts clearly, apply ethical
            frameworks to real-world challenges, and develop practical AI
            solutions that create genuine value.
          </p>
        </section>
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
      </div>
    </div>
  );
}

export default Home;

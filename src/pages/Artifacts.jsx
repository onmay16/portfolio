import { Link } from 'react-router-dom';
import './Artifacts.css';

function Artifacts() {
  // Sample artifacts - these can be updated with real projects
  const artifacts = [
    {
      id: 1,
      title: "AI Job Hunting Assistant Lab",
      description: "A team-based exploration of Google's Gemini tool to design an interactive AI Job Hunting Assistant that helps users find relevant job openings based on their profile including job type, years of experience, industry, and location.",
      technologies: ["Google Gemini", "Prompt Engineering"],
      link: "https://gemini.google.com/gem/1hjS4aDbcpMUpYgtgStWX_4EXF1SCL-nw?usp=sharing",
      icon: "🔍"
    },
    // {
    //   id: 2,
    //   title: "Mobile App Beta",
    //   description: "Cross-platform mobile application for iOS and Android with offline-first architecture and seamless cloud sync.",
    //   technologies: ["React Native", "Firebase", "Redux"],
    //   link: "#"
    // },
    // {
    //   id: 3,
    //   title: "Data Analytics Dashboard",
    //   description: "Interactive dashboard for visualizing complex datasets with real-time updates and customizable widgets.",
    //   technologies: ["React", "D3.js", "Python", "Flask"],
    //   link: "#"
    // },
    // {
    //   id: 4,
    //   title: "E-commerce Platform",
    //   description: "Scalable e-commerce solution with payment integration, inventory management, and analytics.",
    //   technologies: ["React", "TypeScript", "Stripe", "PostgreSQL"],
    //   link: "#"
    // },
    // {
    //   id: 5,
    //   title: "DevOps Automation Tool",
    //   description: "CLI tool for automating deployment workflows and infrastructure management across cloud providers.",
    //   technologies: ["Python", "Docker", "Kubernetes", "AWS"],
    //   link: "#"
    // },
    // {
    //   id: 6,
    //   title: "AI-Powered Chatbot",
    //   description: "Intelligent chatbot with natural language processing capabilities for customer support automation.",
    //   technologies: ["Python", "TensorFlow", "React", "WebSockets"],
    //   link: "#"
    // }
  ];

  return (
    <div className="artifacts-page">
      <div className="artifacts-header">
        <h1 className="artifacts-title">Artifacts</h1>
        <p className="artifacts-description">
          A collection of activities and projects done in AIML-500 course.
        </p>
      </div>
      
      <div className="artifacts-grid">
        {artifacts.map((artifact) => (
          <div key={artifact.id} className="artifact-card">
            <div className="artifact-content">
              <div className="artifact-header">
                <div className="artifact-icon">{artifact.icon}</div>
                <h3 className="artifact-title">{artifact.title}</h3>
              </div>
              <p className="artifact-description">{artifact.description}</p>
              <div className="artifact-technologies">
                {artifact.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="artifact-footer">
              <Link to={`/artifacts/${artifact.id}`} className="artifact-link">
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artifacts;

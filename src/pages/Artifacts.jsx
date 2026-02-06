import { Link } from "react-router-dom";
import "./Artifacts.css";

function Artifacts() {
  const artifacts = [
    {
      id: 1,
      title: "AI & ML Timeline",
      description:
        "A comprehensive timeline documenting the evolution of Artificial Intelligence and Machine Learning from foundational concepts to modern breakthroughs. Created during residency to understand the historical context and progression of AI/ML technologies.",
      technologies: ["Research", "Historical Analysis", "Timeline Visualization"],
      icon: "📅",
      type: "timeline",
    },
    {
      id: 2,
      title: "AI Job Hunting Assistant Lab",
      description:
        "A team-based exploration of Google's Gemini tool to design an interactive AI Job Hunting Assistant that helps users find relevant job openings based on their profile including job type, years of experience, industry, and location.",
      technologies: ["Google Gemini", "Prompt Engineering"],
      link: "https://gemini.google.com/gem/1hjS4aDbcpMUpYgtgStWX_4EXF1SCL-nw?usp=sharing",
      icon: "🔍",
    },
    {
      id: 3,
      title: "Machine Learning vs Deep Learning Report",
      description:
        "A comparative analysis report exploring the differences, applications, and relationships between Machine Learning and Deep Learning methodologies.",
      technologies: ["Machine Learning", "Deep Learning", "Research"],
      link: "https://myemailindwes-my.sharepoint.com/personal/sugyeong_hong_myemail_indwes_edu/_layouts/15/guestaccess.aspx?share=EXYnAwu39x9JnYDQ-XESidcBTWz_FulH-WmeGC0-Stc7DQ",
      icon: "🧠",
      type: "report",
    },
    {
      id: 4,
      title: "Neural Networks Detective Story",
      description:
        "An interactive demo created for a 'Communicating for Learning' assignment that explains neural networks through a detective-themed narrative and animated flip-card interactions. Breaks down the neural network process into intuitive steps: input, feature extraction, forward pass, output, and backpropagation.",
      technologies: [
        "ChatGPT 5.1",
        "Interactive Storytelling",
        "Neural Networks",
      ],
      link: "https://chatgpt.com/canvas/shared/691693dcdf588191876eac36efa7b83b",
      icon: "🕵️",
    },
    {
      id: 5,
      title: "Problems of Confusion: AI Bias in Clinical Diagnostic Imaging",
      description:
        "A critical reflection on algorithmic bias in medical imaging AI systems, addressing the importance of clear communication and ethical leadership in ensuring equitable diagnostic accuracy across diverse patient populations.",
      technologies: [
        "Gemini 3",
        "Ethical AI",
      ],
      icon: "🏥",
      type: "reflection",
    },
    {
      id: 6,
      title: "Commercial Applications of AI — Interactive Newsletter",
      description:
        "An interactive newsletter exploring real-world commercial AI applications across three industries: software development, marketing & retail, and healthcare. Features filterable industry cards, search functionality, and expandable sections analyzing business impact and future potential.",
      technologies: [
        "ChatGPT 5.2",
        "Interactive UI Design",
        "Commercial AI Analysis",
      ],
      link: "https://chatgpt.com/canvas/shared/693f67a40c3881919f6e99ae89e18a12",
      icon: "📰",
    },
    {
      id: 7,
      title: "Generative AI Storytelling for Brand Development",
      description:
        "AI-powered interactive training for front-of-house staff (HR/Operations), using tool chaining with Google Gemini for scenario generation and Streamlit with Cursor for an interactive training demo.",
      technologies: ["Google Gemini", "Streamlit", "Cursor", "HeyGen", "Tool Chaining"],
      link: "https://nqnpfa4v7rs27iwbtsdmng.streamlit.app/",
      icon: "⛓️",
      newlyAdded: true,
    },
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
        {[...artifacts].sort((a, b) => b.id - a.id).map((artifact) => (
          <div key={artifact.id} className="artifact-card">
            {artifact.newlyAdded && (
              <span className="artifact-new-badge" title="Newly added">
                ✨ New
              </span>
            )}
            <div className="artifact-content">
              <div className="artifact-header">
                <div className="artifact-icon">{artifact.icon}</div>
                <h3 className="artifact-title">{artifact.title}</h3>
              </div>
              <p className="artifact-description">{artifact.description}</p>
              <div className="artifact-technologies">
                {artifact.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
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

import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './ArtifactDetail.css';

function ArtifactDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State to manage collapsed/expanded sections
  const [collapsedSections, setCollapsedSections] = useState({
    overview: true,
    labLog: true,
    learnings: true
  });

  const toggleSection = (section) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // This should match the artifacts data from Artifacts.jsx
  // In a real app, you might fetch this from an API or context
  const artifactsData = {
    1: {
      id: 1,
      title: "AI Job Hunting Assistant Lab",
      description: "A team-based exploration of Google's Gemini tool to design an interactive AI Job Hunting Assistant that helps users find relevant job openings based on their profile including job type, years of experience, industry, and location.",
      technologies: ["Google Gemini", "Prompt Engineering"],
      link: "https://gemini.google.com/gem/1hjS4aDbcpMUpYgtgStWX_4EXF1SCL-nw?usp=sharing",
      icon: "🔍",
      detailedDescription: `This AI Lab project involved our team exploring Google's Gemini tool to design a simple yet effective AI Job Hunting Assistant. The system serves as an interactive platform that helps users find relevant job openings based on their specific profile criteria, including job type, years of experience (YoE), industry preferences, and desired location.

While this doesn't represent a complete functional product, our primary focus was on experimenting with prompt iteration and testing how different instruction approaches affected the assistant's ability to generate relevant and professional responses for job seekers. This hands-on exploration provided valuable insights into the iterative nature of AI development and the critical importance of precise prompt engineering.`,
      features: [
        "Interactive job search based on user profile criteria",
        "Customizable filters for job type, experience level, industry, and location",
        "AI-generated relevant job recommendations",
        "Professional response formatting for job seekers",
        "Iterative prompt refinement for improved accuracy"
      ],
      challenges: [
        "Providing accurate links to specific job postings rather than generic platform pages",
        "Initial iterations generated links to third-party job platform pages with irrelevant job lists",
        "Assistant was providing Google search engine links instead of direct job posting URLs",
        "Ensuring links connected directly to company job postings rather than aggregator sites",
        "Coordinating different prompt engineering approaches within the team"
      ],
      learnings: [
        "Understanding the iterative nature of AI interaction and prompt engineering",
        "Importance of clear, goal-oriented communication with generative models",
        "How different team members approach problem-solving with varied instruction strategies",
        "The value of experimentation and curiosity in AI development",
        "Practical experience with prompt iteration to achieve specific, measurable outcomes"
      ],
      labLog: [
        {
          iteration: 1,
          instruction: "Ask the user to input the job type and location if they have already. Browse online and gather all job openings with links to apply, listing them in a table with columns for company name, role, application link, and sponsorship information (if applicable).",
          results: "Asked job/location as intended. However, the result set was overly broad, especially regarding experience level (EOY).",
          Change: "-"
        },
        {
          iteration: 2,
          instruction: "Ask the user to input the job type, year of experience, industry, and location. Browse online and gather all job openings with links to apply, listing them in a table with columns for company name, industry, role, YoE required, application link, and sponsorship information (if applicable).",
          results: "When the industry was not provided, the system prompted the user to specify one. Improved interaction by requesting missing details.",
          Change: "Added industry and years of experience (YoE) fields."
        },
        {
          iteration: 3,
          instruction: "Ask the user to input the job type, year of experience, industry, and location. If no specific answer is provided by users, include all information related. Browse online and gather all job openings with links to apply, listing them in a table with columns for company name, industry, role, YoE required, application link, and sponsorship information (if applicable).",
          results: "Job posting links led to general job board lists instead of direct postings. Improved logic to handle missing industry input by including all industries by default.",
          Change: "Set default behavior to include all industries when unspecified."
        },
        {
          iteration: 4,
          instruction: "Ask the user to input the job type, year of experience, industry, and location. If no specific answer is provided by users, include all information related. Browse online and gather all job openings with direct company links to apply, listing them in a table with columns for company name, industry, role, YoE required, application link, and sponsorship information (if applicable).",
          results: "Results still included non-company links and failed to reach direct application pages. Partial improvement but lacked proper source filtering.",
          Change: "Enhanced instruction to prioritize direct company career links."
        },
        {
          iteration: 5,
          instruction: "Ask the user to input the job type, year of experience, industry, and location. If no specific answer is provided by users, include all information related. Browse online and gather all job openings with direct company links to apply(don't link to 3rd party job hunting website results, provide job application URL), listing them in a table with columns for company name, industry, role, YoE required, application link, and sponsorship information (if applicable).",
          results: "Most links worked correctly, though some remained third-party sources. Certain listings appeared but failed to open upon clicking.",
          Change: "Instructed system to exclude third-party job boards and provide only valid application URLs."
        },
        {
          iteration: 6,
          instruction: "No change",
          results: "Links mostly worked but some URLs were still derived from Google search instead of using the direct application source.",
          Change: "Same instruction retained, but switched from Flash to Pro environment for testing."
        },
        {
          iteration: 7,
          instruction: "Ask the user to input the job type, year of experience, industry, and location. If no specific answer is provided by users, include all information related. Browse online and gather all job openings with direct company links to apply(don't link to 3rd party job hunting website results, provide job application URL, don't Google search the URL, URL need point to the job application on company website directly), listing them in a table with columns for company name, industry, role, YoE required, application link, and sponsorship information (if applicable).",
          results: "All links worked successfully, indicating full resolution of redirection and third-party link issues. Minor potential edge cases may remain.",
          Change: "Specified not to use Google search for URLs and to return only verified application pages."
        }
      ],
      images: [
        // Add image URLs if you have screenshots
      ]
    }
    // Add more artifacts as needed
  };

  const artifact = artifactsData[id];

  if (!artifact) {
    return (
      <div className="artifact-detail-page">
        <div className="artifact-not-found">
          <h1>Artifact Not Found</h1>
          <p>The artifact you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/artifacts')} className="back-button">
            ← Back to Artifacts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="artifact-detail-page">
      <div className="artifact-detail-header">
        <button onClick={() => navigate('/artifacts')} className="back-button">
          ← Back to Artifacts
        </button>
        <div className="artifact-detail-title-section">
          <div className="artifact-detail-icon">{artifact.icon}</div>
          <div>
            <h1 className="artifact-detail-title">{artifact.title}</h1>
            <div className="artifact-detail-technologies">
              {artifact.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="artifact-detail-content">
        <div className="project-link-section">
          <a 
            href={artifact.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link-button"
          >
            Open Project →
          </a>
        </div>

        <section className="artifact-section">
          <h2 onClick={() => toggleSection('overview')} className="collapsible-header">
            Project Overview
            <span className={`collapse-icon ${collapsedSections.overview ? 'collapsed' : ''}`}>
              ▼
            </span>
          </h2>
          {!collapsedSections.overview && (
            <p className="artifact-overview">{artifact.detailedDescription}</p>
          )}
        </section>

        <section className="artifact-section">
          <h2 onClick={() => toggleSection('labLog')} className="collapsible-header">
            Lab Log
            <span className={`collapse-icon ${collapsedSections.labLog ? 'collapsed' : ''}`}>
              ▼
            </span>
          </h2>
          {!collapsedSections.labLog && (
            <div className="lab-log-table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Instruction</th>
                    <th>Results</th>
                    <th>Change from Previous</th>
                  </tr>
                </thead>
                <tbody>
                  {artifact.labLog && artifact.labLog.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.iteration}</td>
                      <td>{entry.instruction}</td>
                      <td>{entry.results}</td>
                      <td>{entry.Change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* {artifact.features && (
          <section className="artifact-section">
            <h2>Key Features</h2>
            <ul className="artifact-list">
              {artifact.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )} */}

        {/* {artifact.challenges && (
          <section className="artifact-section">
            <h2>Challenges & Solutions</h2>
            <ul className="artifact-list">
              {artifact.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>
        )} */}

        {artifact.learnings && (
          <section className="artifact-section">
            <h2 onClick={() => toggleSection('learnings')} className="collapsible-header">
              Key Learnings
              <span className={`collapse-icon ${collapsedSections.learnings ? 'collapsed' : ''}`}>
                ▼
              </span>
            </h2>
            {!collapsedSections.learnings && (
              <ul className="artifact-list">
                {artifact.learnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default ArtifactDetail;
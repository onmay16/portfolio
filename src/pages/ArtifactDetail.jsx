import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ArtifactDetail.css";

// Helper function to convert markdown bold (**text**) to HTML bold and preserve line breaks
function renderMarkdownText(text) {
  if (!text) return text;

  // Split by line breaks first, then process each line
  const lines = text.split("\n");
  return lines.map((line, lineIndex) => {
    // Split by markdown bold patterns
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const processedParts = parts.map((part, partIndex) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldText = part.slice(2, -2);
        return <strong key={`${lineIndex}-${partIndex}`}>{boldText}</strong>;
      }
      return part;
    });

    return (
      <span key={lineIndex}>
        {processedParts}
        {lineIndex < lines.length - 1 && <br />}
      </span>
    );
  });
}

function ArtifactDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // State to manage collapsed/expanded sections
  const [collapsedSections, setCollapsedSections] = useState({
    overview: true,
    introduction: true,
    objective: true,
    process: true,
    tools: true,
    valueProp: true,
    labLog: true,
    learnings: true,
    references: true,
    comparison: true,
  });

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const artifactsData = {
    1: {
      id: 1,
      title: "AI Job Hunting Assistant Lab",
      description:
        "A team-based exploration of Google's Gemini tool to design an interactive AI Job Hunting Assistant that helps users find relevant job openings based on their profile including job type, years of experience, industry, and location.",
      technologies: ["Google Gemini", "Prompt Engineering"],
      link: "https://gemini.google.com/gem/1hjS4aDbcpMUpYgtgStWX_4EXF1SCL-nw?usp=sharing",
      icon: "🔍",
      introduction: `Job searching is a time-consuming and often overwhelming process for many professionals. With thousands of job postings across multiple platforms, finding relevant opportunities that match specific criteria—such as job type, experience level, industry, and location—can be challenging. This problem is particularly acute for job seekers who need to filter through numerous listings to find positions that align with their qualifications and career goals.

This work connects directly to my professional goal of developing AI solutions that genuinely benefit people by reducing time spent on repetitive tasks and improving access to relevant opportunities.`,
      objective: {
        intro:
          "The primary objective of this lab was to design a prototype AI Job Hunting Assistant using Google's Gemini that returns relevant job postings based on user-specified parameters including job type, years of experience, industry, and location. Specifically, we aimed to:",
        items: [
          "Experiment with Google's Gemini model to understand its capabilities for real-time job search assistance",
          "Iterate on prompt engineering techniques to refine the assistant's ability to generate accurate, relevant job recommendations",
          "Test how different instruction approaches affect the quality and accuracy of job search results",
          "Develop a system that provides direct links to company job postings rather than third-party aggregator sites",
          "Create a professional, user-friendly interface for job seekers to interact with the AI assistant",
        ],
      },
      detailedDescription: `This AI Lab project involved our team exploring Google's Gemini tool to design a simple yet effective AI Job Hunting Assistant. The system serves as an interactive platform that helps users find relevant job openings based on their specific profile criteria, including job type, years of experience (YoE), industry preferences, and desired location.

While this doesn't represent a complete functional product, our primary focus was on experimenting with prompt iteration and testing how different instruction approaches affected the assistant's ability to generate relevant and professional responses for job seekers. This hands-on exploration provided valuable insights into the iterative nature of AI development and the critical importance of precise prompt engineering.`,
      process: {
        intro:
          "Our team approached this project through an iterative, collaborative methodology focused on prompt engineering and systematic testing. The process unfolded in several key phases:",
        sections: [
          {
            title: "Team Structure and Roles",
            content:
              "Our team worked collaboratively, with members contributing different perspectives on prompt design and testing strategies. We divided responsibilities for testing different iterations, documenting results, and refining instructions based on observed outcomes.",
          },
          {
            title: "Methodology",
            items: [
              {
                title: "Initial Design Phase",
                description:
                  "We began by defining the core functionality—an assistant that could search for jobs based on user criteria and present results in a structured format.",
              },
              {
                title: "Iterative Prompt Refinement",
                description:
                  "We conducted seven distinct iterations, each building on lessons learned from the previous version. For each iteration, we:",
                subItems: [
                  "Designed specific prompt instructions",
                  "Tested the assistant's responses with various input scenarios",
                  "Documented results, including successes and failures",
                  "Identified specific issues (e.g., third-party links, missing fields)",
                  "Refined instructions to address identified problems",
                ],
              },
              {
                title: "Testing and Evaluation",
                description:
                  "We tested each iteration with different combinations of inputs (complete inputs, missing fields, edge cases) to understand how the assistant handled various scenarios.",
              },
              {
                title: "Environment Optimization",
                description:
                  "During iteration 6, we switched from Gemini Flash to Gemini Pro environment, which improved link accuracy and overall performance.",
              },
            ],
          },
          {
            title: "Challenges Encountered",
            content:
              "Throughout the development process, we faced several significant challenges that required multiple iterations to resolve.",
          },
        ],
      },
      features: [
        "Interactive job search based on user profile criteria",
        "Customizable filters for job type, experience level, industry, and location",
        "AI-generated relevant job recommendations",
        "Professional response formatting for job seekers",
        "Iterative prompt refinement for improved accuracy",
      ],
      challenges: [
        "Providing accurate links to specific job postings rather than generic platform pages",
        "Initial iterations generated links to third-party job platform pages with irrelevant job lists",
        "Assistant was providing Google search engine links instead of direct job posting URLs",
        "Ensuring links connected directly to company job postings rather than aggregator sites",
        "Coordinating different prompt engineering approaches within the team",
      ],
      learnings: [
        "Understanding the iterative nature of AI interaction and prompt engineering",
        "Importance of clear, goal-oriented communication with generative models",
        "How different team members approach problem-solving with varied instruction strategies",
        "The value of experimentation and curiosity in AI development",
        "Practical experience with prompt iteration to achieve specific, measurable outcomes",
      ],
      labLog: [
        {
          iteration: 1,
          instruction:
            "Ask the user to input the job type and location if they have already. Browse online and gather all job openings with links to apply, listing them in a table with columns for company name, role, application link, and sponsorship information (if applicable).",
          results:
            "Asked job/location as intended. However, the result set was overly broad, especially regarding experience level (EOY).",
          Change: "-",
        },
        {
          iteration: 2,
          instruction:
            "Ask the user to input the job type, year of experience, industry, and location. Browse online and gather all job openings with links to apply, listing them in a table with columns for company name, industry, role, YoE required, application link, and sponsorship information (if applicable).",
          results:
            "When the industry was not provided, the system prompted the user to specify one. Improved interaction by requesting missing details.",
          Change: "Added industry and years of experience (YoE) fields.",
        },
        {
          iteration: 3,
          instruction:
            "Ask the user to input the job type, year of experience, industry, and location. If no specific answer is provided by users, include all information related. Browse online and gather all job openings with links to apply, listing them in a table with columns for company name, industry, role, YoE required, application link, and sponsorship information (if applicable).",
          results:
            "Job posting links led to general job board lists instead of direct postings. Improved logic to handle missing industry input by including all industries by default.",
          Change:
            "Set default behavior to include all industries when unspecified.",
        },
        {
          iteration: 4,
          instruction:
            "Ask the user to input the job type, year of experience, industry, and location. If no specific answer is provided by users, include all information related. Browse online and gather all job openings with direct company links to apply, listing them in a table with columns for company name, industry, role, YoE required, application link, and sponsorship information (if applicable).",
          results:
            "Results still included non-company links and failed to reach direct application pages. Partial improvement but lacked proper source filtering.",
          Change:
            "Enhanced instruction to prioritize direct company career links.",
        },
        {
          iteration: 5,
          instruction:
            "Ask the user to input the job type, year of experience, industry, and location. If no specific answer is provided by users, include all information related. Browse online and gather all job openings with direct company links to apply(don't link to 3rd party job hunting website results, provide job application URL), listing them in a table with columns for company name, industry, role, YoE required, application link, and sponsorship information (if applicable).",
          results:
            "Most links worked correctly, though some remained third-party sources. Certain listings appeared but failed to open upon clicking.",
          Change:
            "Instructed system to exclude third-party job boards and provide only valid application URLs.",
        },
        {
          iteration: 6,
          instruction: "No change",
          results:
            "Links mostly worked but some URLs were still derived from Google search instead of using the direct application source.",
          Change:
            "Same instruction retained, but switched from Flash to Pro environment for testing.",
        },
        {
          iteration: 7,
          instruction:
            "Ask the user to input the job type, year of experience, industry, and location. If no specific answer is provided by users, include all information related. Browse online and gather all job openings with direct company links to apply(don't link to 3rd party job hunting website results, provide job application URL, don't Google search the URL, URL need point to the job application on company website directly), listing them in a table with columns for company name, industry, role, YoE required, application link, and sponsorship information (if applicable).",
          results:
            "All links worked successfully, indicating full resolution of redirection and third-party link issues. Minor potential edge cases may remain.",
          Change:
            "Specified not to use Google search for URLs and to return only verified application pages.",
        },
      ],
    },
    2: {
      id: 2,
      title: "Machine Learning vs Deep Learning Report",
      description:
        "A comparative analysis report exploring the differences, applications, and relationships between Machine Learning and Deep Learning methodologies.",
      technologies: ["Machine Learning", "Deep Learning", "Research"],
      link: "https://myemailindwes-my.sharepoint.com/personal/sugyeong_hong_myemail_indwes_edu/_layouts/15/guestaccess.aspx?share=EXYnAwu39x9JnYDQ-XESidcBTWz_FulH-WmeGC0-Stc7DQ",
      icon: "🧠",
      type: "report",
      introduction: `Understanding the relationship between Machine Learning and Deep Learning is fundamental for anyone working in artificial intelligence. These two approaches, while related, serve different purposes and have distinct characteristics that make them suitable for different types of problems. As AI continues to evolve and become more integrated into various industries, having a clear understanding of when to use traditional machine learning versus deep learning is crucial for making informed technical decisions.

This comparative analysis connects to my professional goals by providing a foundation for understanding AI methodologies, which is essential for developing effective AI solutions. By clearly distinguishing between these approaches, I can better select the right tool for each problem, ensuring that solutions are both technically sound and appropriately scoped.`,
      objective: {
        intro:
          "The primary objective of this report was to provide a comprehensive comparative analysis of Machine Learning and Deep Learning, specifically:",
        items: [
          "Clearly define both Machine Learning and Deep Learning and explain their relationship",
          "Identify and analyze key differences between the two approaches across multiple dimensions",
          "Explore the contexts and applications where each methodology is most effective",
          "Provide practical guidance on when to choose one approach over the other",
          "Examine the technical foundations and requirements of each approach",
        ],
      },
      detailedDescription: `This report provides a comprehensive comparative analysis of Machine Learning (ML) and Deep Learning (DL), two fundamental approaches in the field of artificial intelligence. The document explores their definitions, relationships, key differences, applications, and the contexts in which each methodology is most effective.

The analysis delves into the technical foundations of both approaches, examining how traditional machine learning algorithms differ from deep neural networks, and when each approach is most suitable for solving different types of problems. The report also discusses the evolution of these technologies and their impact on various industries.`,
      references: [
        {
          title: "Machine Learning and FICO Scores",
          url: "https://www.fico.com/en/latest-thinking/white-paper/machine-learning-and-fico-scores?utm_source=chatgpt.com",
          description:
            "White paper on machine learning applications in credit scoring and financial services.",
        },
      ],
      comparison: [
        {
          aspect: "Definition",
          machineLearning:
            "Algorithms that enable systems to learn and improve from experience without explicit programming",
          deepLearning:
            "A subset of ML using multi-layered neural networks to model high-level abstractions",
        },
        {
          aspect: "Data Requirements",
          machineLearning:
            "Can work with smaller datasets; requires structured data or manual feature engineering",
          deepLearning:
            "Requires large amounts of data; excels with unstructured data (images, text, audio)",
        },
        {
          aspect: "Feature Engineering",
          machineLearning: "Requires manual feature engineering and selection",
          deepLearning:
            "Automatically learns features from raw data; minimal feature engineering needed",
        },
        {
          aspect: "Computational Resources",
          machineLearning:
            "Lower computational requirements; can run on standard hardware",
          deepLearning:
            "High computational requirements; typically needs GPUs and specialized hardware",
        },
        {
          aspect: "Interpretability",
          machineLearning:
            "Generally more interpretable; easier to understand decision-making process",
          deepLearning:
            "Less interpretable; often referred to as 'black box' models",
        },
        {
          aspect: "Best For",
          machineLearning:
            "Structured data, smaller datasets, when interpretability is crucial, traditional business problems",
          deepLearning:
            "Unstructured data, large datasets, complex patterns (image recognition, NLP, speech recognition)",
        },
        {
          aspect: "Training Time",
          machineLearning:
            "Faster training times; quicker to prototype and iterate",
          deepLearning:
            "Longer training times; requires more time for model convergence",
        },
        {
          aspect: "Common Algorithms",
          machineLearning:
            "Linear/Logistic Regression, Decision Trees, Random Forest, SVM, K-Means",
          deepLearning: "CNNs, RNNs, LSTMs, Transformers, GANs, Autoencoders",
        },
      ],
      learnings: [
        "Deep Learning is a specialized subset of Machine Learning, not a separate field",
        "Deep Learning excels at processing unstructured data with minimal feature engineering",
        "Traditional ML often performs better with structured data and when interpretability is crucial",
        "Deep Learning requires significantly more computational resources and data than traditional ML",
        "The choice between ML and DL depends on data type, problem complexity, and available resources",
        "Both approaches have complementary strengths and are often used together in real-world applications",
      ],
    },
    3: {
      id: 3,
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
      introduction: `Neural networks are one of the most powerful and widely used technologies in artificial intelligence, yet they remain abstract and difficult to understand for many people. The complexity of how neural networks process information—from receiving inputs through multiple layers to producing outputs and learning from feedback—can be intimidating. This challenge is particularly significant in educational contexts where clear communication of technical concepts is essential.

This work connects to my professional goal of creating AI solutions that are not only technically sound but also accessible and understandable to diverse audiences.`,
      objective: {
        intro:
          "The primary objective of this project was to create an interactive educational demo that explains neural networks in an accessible and engaging way, specifically:",
        items: [
          "Break down the neural network process into intuitive, digestible steps",
          "Use storytelling and narrative frameworks to make abstract concepts more memorable",
          "Create an interactive experience that engages learners through visual design and animations",
          "Demonstrate the ability to communicate complex technical concepts clearly",
          "Combine accurate AI/ML knowledge with effective educational design principles",
        ],
      },
      detailedDescription: `I created this interactive demo as part of my "Communicating for Learning" assignment, where the goal was to explain neural networks as simply and effectively as possible. I used ChatGPT 5.1 to help iterate on the concept, refine the storytelling, and shape the educational framing.

The demo uses a detective-themed narrative and animated flip-card interactions to break the neural network process into small, intuitive steps (input, feature extraction, forward pass, output, and backpropagation). This artifact demonstrates my ability to combine accurate AI/ML concepts with engaging UI design and learning-centered communication.`,
      learnings: [
        "Effective educational communication requires breaking complex concepts into small, digestible steps",
        "Storytelling and narrative frameworks make abstract technical concepts more accessible and memorable",
        "Animated interactions and visual design enhance understanding and engagement",
        "ChatGPT 5.1 can be effectively used as a tool for iterating on concepts and refining educational content",
        "Combining accurate technical knowledge with learning-centered communication creates effective educational experiences",
        "UI design plays a crucial role in making complex information intuitive and engaging",
        "The detective metaphor effectively bridges the gap between neural network processes and intuitive understanding",
      ],
    },
    4: {
      id: 4,
      title: "Problems of Confusion: AI Bias in Clinical Diagnostic Imaging",
      description:
        "A critical reflection on algorithmic bias in medical imaging AI systems, addressing the importance of clear communication and ethical leadership in ensuring equitable diagnostic accuracy across diverse patient populations.",
      technologies: [
        "Gemini 3",
        "Ethical AI",
      ],
      icon: "🏥",
      type: "reflection",
      introduction: `In the realm of leadership, effective communication is paramount. Poor communication can lead to misunderstandings, confusion, and ultimately hinder progress and learning. This reflection addresses the critical importance of clear communication and ethical leadership in the context of AI systems used in clinical diagnostic imaging.

Algorithmic bias represents a systemic risk to patient safety and diagnostic accuracy. Leadership in this field requires a commitment to ensuring every diagnosis is based on impartial and globally representative data. Eliminating bias is crucial to ensuring safety and high-quality care, regardless of a patient's demographic background or geographic location.

This work connects to my professional goals by demonstrating my commitment to ethical AI development and clear communication about the responsibilities and challenges inherent in deploying AI systems in critical healthcare contexts.`,
      objective: {
        intro:
          "This reflection assignment focused on applying biblical thinking to personal situations and identifying examples of problem-solving communication. Specifically, I aimed to:",
        items: [
          "Reflect on communication style and how to make messages clearer and more effective",
          "Think about times when poor communication caused confusion and how to prevent such issues",
          "Apply these principles to the field of AI in clinical diagnostic imaging",
          "Develop concrete strategies to address algorithmic bias and ensure equitable healthcare outcomes",
          "Demonstrate full ownership of the reflection process with deeply personal insights",
        ],
      },
      detailedDescription: `This artifact represents my response to the "Problems of Confusion" assignment, which explored the importance of clear communication in leadership through the lens of Scripture. I chose to apply these principles to my field of interest: AI in Clinical Diagnostic Imaging.

The reflection addresses how poor communication and lack of clarity can lead to systemic problems—specifically, how algorithmic bias in medical imaging AI systems can result from unclear communication about data requirements, training processes, and deployment limitations. I developed a personal value statement and concrete strategies to address these challenges, demonstrating my commitment to ethical AI leadership.`,
      valueStatement: {
        field: "AI in Clinical Diagnostic Imaging",
        statement:
          "In medical imaging, algorithmic bias represents a systemic risk to patient safety and diagnostic accuracy. Leadership in this field requires a commitment to ensuring every diagnosis is based on impartial and globally representative data. Eliminating bias is crucial to ensuring safety and high-quality care, regardless of a patient's demographic background or geographic location.",
      },
      strategies: [
        {
          title: "Eliminate Data Representation Gaps",
          items: [
            {
              title: "Establish Global Data Partnerships",
              description:
                "Instead of relying on data from a single region, collect imaging datasets (such as X-rays and CT scans) from international partners to represent diverse ethnic and socioeconomic groups. This prevents the model from failing when treating underrepresented populations.",
            },
            {
              title: "Mandate Demographic Labeling",
              description:
                "Systematically label training data with patient demographics (e.g., age, sex) to ensure accurate representation. This allows for explicit testing to prove the model performs equally well across all groups, rather than assuming fairness.",
            },
          ],
        },
        {
          title: "Mitigate Human Error in Training",
          items: [
            {
              title: "Implement Consensus Labeling",
              description:
                "Since human interpretation can be subjective, require multiple radiologists from diverse professional backgrounds to agree on a diagnosis before it is used to train the AI. This minimizes the risk of a single person's bias becoming part of the model.",
            },
            {
              title: "Institute Blind Reviews",
              description:
                "During the testing phase, shield human reviewers from patient demographic information. This prevents confirmation bias from influencing how the AI's success is evaluated.",
            },
          ],
        },
        {
          title: "Audit and Monitor for Equity",
          items: [
            {
              title: "Deploy Continuous Monitoring",
              description:
                "Utilize real-time dashboards to track diagnostic accuracy across specific patient subgroups. If the system performance drops for any specific group (due to model drift), immediate alerts must trigger a safety review.",
            },
            {
              title: "Commission External Audits",
              description:
                "Engage independent, third-party experts to audit the AI for fairness before deployment. External reviewers are necessary to identify biases that internal development teams often overlook.",
            },
          ],
        },
        {
          title: "Ensure Accessibility and Appropriate Use",
          items: [
            {
              title: "Prioritize Low-Resource Compatibility",
              description:
                "Develop models that can maintain high accuracy even on older hardware or lower-quality images. This ensures that safety improvements benefit under-resourced clinics, not just wealthy hospitals.",
            },
            {
              title: "Mandate Limitation Training",
              description:
                "Provide compulsory training for clinicians that explicitly details where the AI may fail, ensuring transparency and accountability. This prevents over-reliance on the tool and ensures doctors prioritize their own clinical judgment when necessary.",
            },
          ],
        },
      ],
      aiDisclosure:
        "I used Gemini 3 to brainstorm field-specific strategies and refine the content. Specifically, I directed the AI to simplify complex terminology. I reviewed the final output to ensure it accurately reflects my intent and meets the requirements of the assignment.",
      learnings: [
        "Clear communication about AI limitations and biases is essential for ethical deployment in healthcare",
        "Algorithmic bias in medical imaging can have life-threatening consequences if not addressed proactively",
        "Leadership in AI requires systematic approaches to ensure equity across diverse patient populations",
        "Multiple layers of oversight—from data collection to deployment—are necessary to prevent bias",
        "Transparency about AI capabilities and limitations is crucial for building trust with clinicians and patients",
        "Global representation in training data is not optional but essential for equitable healthcare outcomes",
        "External audits and continuous monitoring are critical safeguards against bias that internal teams might miss",
      ],
    },
    5: {
      id: 5,
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
      introduction: `Artificial intelligence has moved beyond experimental research and proof-of-concept demonstrations. Today, AI is being deployed commercially across industries, transforming how businesses operate, make decisions, and deliver value to customers. Understanding these real-world applications is crucial for recognizing how AI is reshaping business processes and creating measurable impact.

This assignment required researching and analyzing commercial AI applications released over the past month across three different industries, then presenting findings in an engaging newsletter format accessible to audiences without extensive AI knowledge. The goal was to demonstrate how AI is already operational—not just "interesting" but actively driving business outcomes.

This work connects to my professional goal of understanding how AI creates real business value and communicating complex technical concepts in accessible, engaging formats.`,
      objective: {
        intro:
          "The primary objective of this assignment was to identify and analyze key commercial applications of AI across different industries, specifically:",
        items: [
          "Research new or updated commercial AI applications released over the past month across three different industries",
          "Analyze how these AI companies and models/products are transforming business processes and decision-making within each industry",
          "Evaluate the impact of commercial AI applications on business operations",
          "Provide specific examples to illustrate points with real-world use cases",
          "Format findings as an engaging newsletter that balances technical accuracy with accessibility",
          "Create an interactive UI that allows users to explore content through filtering, search, and expandable sections",
        ],
      },
      detailedDescription: `I created this interactive newsletter as part of the "Commercial Applications of AI" assignment, which focused on analyzing how AI is already being used commercially rather than speculating about future possibilities. The assignment required examining real-world business impact across three industries, with specific examples of companies and products released in recent months.

I chose to present this as an interactive web-based newsletter with filterable industry cards, search functionality, and expandable accordion sections. This format allows readers to explore content at their own pace, filter by industry interest, and dive deeper into specific aspects of each application. The design uses a modern, dark theme with clear visual hierarchy and intuitive interactions.

The newsletter covers three industries: **Software Development** (NVIDIA's push for AI coding agents like Cursor), **Marketing & Retail** (Jo Malone London's AI Scent Advisor powered by Vertex AI), and **Healthcare** (Microsoft Nuance DAX Copilot outcomes at Northwestern Medicine). Each section includes analysis of what changed commercially, business impact, and future potential.`,
      features: [
        "Interactive industry filtering (All, Software, Marketing & Retail, Healthcare)",
        "Real-time keyword search across all content and metadata",
        "Expandable accordion sections for detailed analysis",
        "Visual data representation (ROI bar charts, outcome snapshots)",
        "Copy-to-clipboard functionality for reference URLs",
        "Responsive design with modern dark theme",
        "Accessibility features (ARIA labels, keyboard navigation)",
        "Three comprehensive industry case studies with business impact analysis",
      ],
      challenges: [
        "Balancing technical accuracy with accessibility for non-technical audiences",
        "Finding recent commercial AI applications with measurable business outcomes",
        "Designing an intuitive filtering and search system that works seamlessly together",
        "Creating visual representations of data (like ROI percentages) that are informative but not misleading",
        "Ensuring the newsletter format is engaging while maintaining professional tone",
        "Organizing complex information hierarchically without overwhelming users",
      ],
      learnings: [
        "Commercial AI succeeds when it redesigns workflows, not just adds features",
        "AI applications are moving from experimental to operational across industries",
        "Measurable business impact (ROI, time savings, capacity) is crucial for commercial AI adoption",
        "Interactive UI design can significantly enhance information accessibility and engagement",
        "Filtering and search functionality are essential for navigating complex, multi-industry content",
        "Visual design and information architecture play critical roles in making technical content accessible",
        "Real-world AI applications demonstrate consistent patterns: workflow redesign, measurable impact, and future scalability",
        "The newsletter format is effective for presenting research findings in an engaging, structured way",
      ],
      references: [
        {
          title: "Nvidia CEO Says You're 'Insane' If You Don't Use AI to Do Literally Everything",
          url: "https://futurism.com/artificial-intelligence/nvidia-ceo-insane-ai",
          description:
            "Futurism article covering NVIDIA CEO Jensen Huang's comments about AI coding tools becoming standard in software development workflows.",
        },
        {
          title: "The Estée Lauder Companies and Jo Malone London Introduce AI-Powered Scent Advisor Experience",
          url: "https://www.elcompanies.com/en/news-and-media/newsroom/press-releases/2025/12-02-2025-121509645",
          description:
            "Press release announcing Jo Malone London's AI Scent Advisor built with Google Cloud Vertex AI, enabling natural-language fragrance recommendations.",
        },
        {
          title: "A study of the effectiveness of DAX™ Copilot for Epic at Northwestern Medicine",
          url: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-product-and-services/azure/documents/microsoft-northwestern-medicine-outcomes-study-final-1037321.pdf",
          description:
            "Microsoft/Nuance outcomes study reporting 112% ROI, 24% reduction in documentation time, and capacity for 11.3 more patients per month using DAX Copilot.",
        },
      ],
    },
  };

  const artifact = artifactsData[id];

  if (!artifact) {
    return (
      <div className="artifact-detail-page">
        <div className="artifact-not-found">
          <h1>Artifact Not Found</h1>
          <p>The artifact you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/artifacts")}
            className="back-button"
          >
            ← Back to Artifacts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="artifact-detail-page">
      <div className="artifact-detail-header">
        <button onClick={() => navigate("/artifacts")} className="back-button">
          ← Back to Artifacts
        </button>
        <div className="artifact-detail-title-section">
          <div className="artifact-detail-icon">{artifact.icon}</div>
          <div>
            <h1 className="artifact-detail-title">{artifact.title}</h1>
            <div className="artifact-detail-technologies">
              {artifact.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="artifact-detail-content">
        {artifact.type === "reflection" ? (
          <>
            {artifact.introduction && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("introduction")}
                  className="collapsible-header"
                >
                  Introduction
                  <span
                    className={`collapse-icon ${collapsedSections.introduction ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.introduction && (
                  <p className="artifact-overview">
                    {renderMarkdownText(artifact.introduction)}
                  </p>
                )}
              </section>
            )}

            {artifact.valueStatement && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("valueProp")}
                  className="collapsible-header"
                >
                  Personal Value Statement
                  <span
                    className={`collapse-icon ${collapsedSections.valueProp ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.valueProp && (
                  <div className="artifact-overview">
                    <p>
                      <strong>Field:</strong> {artifact.valueStatement.field}
                    </p>
                    <p>{renderMarkdownText(artifact.valueStatement.statement)}</p>
                  </div>
                )}
              </section>
            )}

            {artifact.strategies && artifact.strategies.length > 0 && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("process")}
                  className="collapsible-header"
                >
                  Strategies to Fulfill This Value
                  <span
                    className={`collapse-icon ${collapsedSections.process ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.process && (
                  <div className="process-content">
                    {artifact.strategies.map((strategy, strategyIndex) => (
                      <div key={strategyIndex} className="process-section">
                        <h3 className="process-section-title">
                          {strategy.title}
                        </h3>
                        {strategy.items && (
                          <ul className="artifact-list">
                            {strategy.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="process-list-item">
                                <strong>{item.title}:</strong> {item.description}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {artifact.aiDisclosure && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("tools")}
                  className="collapsible-header"
                >
                  AI Disclosure
                  <span
                    className={`collapse-icon ${collapsedSections.tools ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.tools && (
                  <p className="artifact-overview">
                    {renderMarkdownText(artifact.aiDisclosure)}
                  </p>
                )}
              </section>
            )}

            {artifact.learnings && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("learnings")}
                  className="collapsible-header"
                >
                  Key Learnings
                  <span
                    className={`collapse-icon ${collapsedSections.learnings ? "collapsed" : ""}`}
                  >
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
          </>
        ) : artifact.type === "report" ? (
          <>
            <div className="project-link-section">
              <a
                href={artifact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-button"
              >
                View Full Report →
              </a>
            </div>

            {artifact.introduction && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("introduction")}
                  className="collapsible-header"
                >
                  Introduction
                  <span
                    className={`collapse-icon ${collapsedSections.introduction ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.introduction && (
                  <p className="artifact-overview">
                    {renderMarkdownText(artifact.introduction)}
                  </p>
                )}
              </section>
            )}

            {artifact.objective && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("objective")}
                  className="collapsible-header"
                >
                  Objective
                  <span
                    className={`collapse-icon ${collapsedSections.objective ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.objective && (
                  <div className="artifact-overview">
                    {typeof artifact.objective === "string" ? (
                      <p>{artifact.objective}</p>
                    ) : (
                      <>
                        <p>{renderMarkdownText(artifact.objective.intro)}</p>
                        <ol className="objective-list">
                          {artifact.objective.items.map((item, index) => (
                            <li key={index}>{renderMarkdownText(item)}</li>
                          ))}
                        </ol>
                      </>
                    )}
                  </div>
                )}
              </section>
            )}

            <section className="artifact-section">
              <h2
                onClick={() => toggleSection("overview")}
                className="collapsible-header"
              >
                Report Overview
                <span
                  className={`collapse-icon ${collapsedSections.overview ? "collapsed" : ""}`}
                >
                  ▼
                </span>
              </h2>
              {!collapsedSections.overview && (
                <p className="artifact-overview">
                  {renderMarkdownText(artifact.detailedDescription)}
                </p>
              )}
            </section>

            {artifact.process && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("process")}
                  className="collapsible-header"
                >
                  Process
                  <span
                    className={`collapse-icon ${collapsedSections.process ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.process && (
                  <p className="artifact-overview">{artifact.process}</p>
                )}
              </section>
            )}

            {artifact.toolsAndTechnologies && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("tools")}
                  className="collapsible-header"
                >
                  Tools & Technologies
                  <span
                    className={`collapse-icon ${collapsedSections.tools ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.tools && (
                  <p className="artifact-overview">
                    {renderMarkdownText(artifact.toolsAndTechnologies)}
                  </p>
                )}
              </section>
            )}

            {artifact.valueProposition && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("valueProp")}
                  className="collapsible-header"
                >
                  Value Proposition
                  <span
                    className={`collapse-icon ${collapsedSections.valueProp ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.valueProp && (
                  <p className="artifact-overview">
                    {renderMarkdownText(artifact.valueProposition)}
                  </p>
                )}
              </section>
            )}

            {artifact.comparison && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("comparison")}
                  className="collapsible-header"
                >
                  Machine Learning vs Deep Learning
                  <span
                    className={`collapse-icon ${collapsedSections.comparison ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.comparison && (
                  <div className="report-table-container">
                    <table className="comparison-table">
                      <thead>
                        <tr>
                          <th>Aspect</th>
                          <th>Machine Learning</th>
                          <th>Deep Learning</th>
                        </tr>
                      </thead>
                      <tbody>
                        {artifact.comparison.map((row, index) => (
                          <tr key={index}>
                            <td className="aspect-name">{row.aspect}</td>
                            <td>{row.machineLearning}</td>
                            <td>{row.deepLearning}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            )}

            {artifact.learnings && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("learnings")}
                  className="collapsible-header"
                >
                  Key Learnings
                  <span
                    className={`collapse-icon ${collapsedSections.learnings ? "collapsed" : ""}`}
                  >
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

            {artifact.references && artifact.references.length > 0 && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("references")}
                  className="collapsible-header"
                >
                  References
                  <span
                    className={`collapse-icon ${collapsedSections.references ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.references && (
                  <ul className="references-list">
                    {artifact.references.map((ref, index) => (
                      <li key={index} className="reference-item">
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="reference-link"
                        >
                          {ref.title}
                        </a>
                        <p className="reference-description">
                          {ref.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}
          </>
        ) : (
          <>
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

            {artifact.introduction && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("introduction")}
                  className="collapsible-header"
                >
                  Introduction
                  <span
                    className={`collapse-icon ${collapsedSections.introduction ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.introduction && (
                  <p className="artifact-overview">
                    {renderMarkdownText(artifact.introduction)}
                  </p>
                )}
              </section>
            )}

            {artifact.objective && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("objective")}
                  className="collapsible-header"
                >
                  Objective
                  <span
                    className={`collapse-icon ${collapsedSections.objective ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.objective && (
                  <div className="artifact-overview">
                    {typeof artifact.objective === "string" ? (
                      <p>{artifact.objective}</p>
                    ) : (
                      <>
                        <p>{renderMarkdownText(artifact.objective.intro)}</p>
                        <ol className="objective-list">
                          {artifact.objective.items.map((item, index) => (
                            <li key={index}>{renderMarkdownText(item)}</li>
                          ))}
                        </ol>
                      </>
                    )}
                  </div>
                )}
              </section>
            )}

            <section className="artifact-section">
              <h2
                onClick={() => toggleSection("overview")}
                className="collapsible-header"
              >
                Project Overview
                <span
                  className={`collapse-icon ${collapsedSections.overview ? "collapsed" : ""}`}
                >
                  ▼
                </span>
              </h2>
              {!collapsedSections.overview && (
                <div>
                  <p className="artifact-overview">
                    {artifact.detailedDescription}
                  </p>
                  {artifact.features && (
                    <div className="features-section">
                      <h3 className="subsection-title">Key Features</h3>
                      <ul className="artifact-list">
                        {artifact.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </section>

            {artifact.process && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("process")}
                  className="collapsible-header"
                >
                  Process
                  <span
                    className={`collapse-icon ${collapsedSections.process ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.process && (
                  <div>
                    {typeof artifact.process === "string" ? (
                      <p className="artifact-overview">
                        {renderMarkdownText(artifact.process)}
                      </p>
                    ) : (
                      <div className="process-content">
                        <p className="artifact-overview">
                          {artifact.process.intro}
                        </p>
                        {artifact.process.sections.map(
                          (section, sectionIndex) => (
                            <div key={sectionIndex} className="process-section">
                              <h3 className="process-section-title">
                                {section.title}
                              </h3>
                              {section.content && (
                                <p className="process-section-content">
                                  {renderMarkdownText(section.content)}
                                </p>
                              )}
                              {section.items && (
                                <ol className="process-list">
                                  {section.items.map((item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="process-list-item"
                                    >
                                      <strong>{item.title}:</strong>{" "}
                                      {item.description}
                                      {item.subItems && (
                                        <ul className="process-sublist">
                                          {item.subItems.map(
                                            (subItem, subIndex) => (
                                              <li key={subIndex}>{subItem}</li>
                                            ),
                                          )}
                                        </ul>
                                      )}
                                    </li>
                                  ))}
                                </ol>
                              )}
                            </div>
                          ),
                        )}
                      </div>
                    )}
                    {artifact.challenges && (
                      <div className="challenges-section">
                        <h3 className="subsection-title">
                          Challenges Encountered
                        </h3>
                        <ul className="artifact-list">
                          {artifact.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </section>
            )}

            {artifact.toolsAndTechnologies && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("tools")}
                  className="collapsible-header"
                >
                  Tools & Technologies
                  <span
                    className={`collapse-icon ${collapsedSections.tools ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.tools && (
                  <p className="artifact-overview">
                    {renderMarkdownText(artifact.toolsAndTechnologies)}
                  </p>
                )}
              </section>
            )}

            {artifact.valueProposition && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("valueProp")}
                  className="collapsible-header"
                >
                  Value Proposition
                  <span
                    className={`collapse-icon ${collapsedSections.valueProp ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.valueProp && (
                  <p className="artifact-overview">
                    {renderMarkdownText(artifact.valueProposition)}
                  </p>
                )}
              </section>
            )}

            {artifact.labLog && artifact.labLog.length > 0 && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("labLog")}
                  className="collapsible-header"
                >
                  Lab Log
                  <span
                    className={`collapse-icon ${collapsedSections.labLog ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.labLog && (
                  <div className="lab-log-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Iteration</th>
                          <th>Instruction</th>
                          <th>Results</th>
                          <th>Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        {artifact.labLog.map((entry, index) => (
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
            )}

            {artifact.learnings && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("learnings")}
                  className="collapsible-header"
                >
                  Key Learnings
                  <span
                    className={`collapse-icon ${collapsedSections.learnings ? "collapsed" : ""}`}
                  >
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

            {artifact.references && artifact.references.length > 0 && (
              <section className="artifact-section">
                <h2
                  onClick={() => toggleSection("references")}
                  className="collapsible-header"
                >
                  References
                  <span
                    className={`collapse-icon ${collapsedSections.references ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.references && (
                  <ul className="references-list">
                    {artifact.references.map((ref, index) => (
                      <li key={index} className="reference-item">
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="reference-link"
                        >
                          {ref.title}
                        </a>
                        <p className="reference-description">
                          {ref.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ArtifactDetail;

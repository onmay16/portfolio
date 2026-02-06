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

function getSectionsForArtifact(artifact) {
  if (!artifact) return [];
  const sections = [];
  const push = (id, label) => sections.push({ id: `section-${id}`, key: id, label });

  if (artifact.type === "timeline") {
    if (artifact.introduction) push("introduction", "Introduction");
    if (artifact.objective) push("objective", "Objective");
    push("overview", "Timeline Overview");
    if (artifact.process) push("process", "Process");
    if (artifact.toolsAndTechnologies) push("tools", "Tools & Technologies");
    if (artifact.valueProposition) push("valueProp", "Value Proposition");
    if (artifact.uniqueValue) push("uniqueValue", "Unique Value");
    if (artifact.relevance) push("relevance", "Relevance");
    if (artifact.learnings) push("learnings", "Key Learnings");
    if (artifact.references?.length) push("references", "References");
    return sections;
  }

  if (artifact.type === "reflection") {
    if (artifact.introduction) push("introduction", "Introduction");
    if (artifact.valueStatement) push("valueProp", "Personal Value Statement");
    if (artifact.strategies?.length) push("process", "Strategies to Fulfill This Value");
    if (artifact.aiDisclosure) push("tools", "AI Disclosure");
    if (artifact.learnings) push("learnings", "Key Learnings");
    return sections;
  }

  if (artifact.type === "report") {
    if (artifact.introduction) push("introduction", "Introduction");
    if (artifact.objective) push("objective", "Objective");
    push("overview", "Report Overview");
    if (artifact.process) push("process", "Process");
    if (artifact.toolsAndTechnologies) push("tools", "Tools & Technologies");
    if (artifact.valueProposition) push("valueProp", "Value Proposition");
    if (artifact.comparison) push("comparison", "Machine Learning vs Deep Learning");
    if (artifact.learnings) push("learnings", "Key Learnings");
    if (artifact.references?.length) push("references", "References");
    return sections;
  }

  // default type
  if (artifact.introduction) push("introduction", "Introduction");
  if (artifact.objective) push("objective", "Objective");
  push("overview", "Project Overview");
  if (artifact.process) push("process", "Process");
  if (artifact.toolsAndTechnologies) push("tools", "Tools & Technologies");
  if (artifact.valueProposition) push("valueProp", "Value Proposition");
  if (artifact.labLog?.length) push("labLog", "Lab Log");
  if (artifact.learnings) push("learnings", "Key Learnings");
  if (artifact.references?.length) push("references", "References");
  return sections;
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
    uniqueValue: true,
    relevance: true,
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
      title: "AI & ML Timeline",
      description:
        "A comprehensive timeline documenting the evolution of Artificial Intelligence and Machine Learning from foundational concepts to modern breakthroughs. Created during residency to understand the historical context and progression of AI/ML technologies.",
      technologies: ["Research", "Historical Analysis", "Timeline Visualization"],
      icon: "📅",
      type: "timeline",
      introduction: `Understanding the historical evolution of Artificial Intelligence and Machine Learning is fundamental for anyone entering the field. The journey from early theoretical concepts to today's transformative applications spans decades of research, breakthroughs, and paradigm shifts. This timeline provides a comprehensive overview of key milestones, innovations, and turning points that have shaped modern AI/ML.

This work connects to my professional goals by establishing a foundational understanding of how AI/ML has evolved, which is essential for contextualizing current technologies, understanding their limitations, and anticipating future directions. By studying the progression of ideas and innovations, I can better appreciate the iterative nature of technological advancement and the importance of building on previous research.`,
      objective: {
        intro:
          "The primary objective of this timeline was to create a comprehensive historical overview of AI and ML development, specifically:",
        items: [
          "Document key milestones and breakthroughs in AI/ML history from foundational concepts to modern applications",
          "Identify major paradigm shifts and technological innovations that shaped the field",
          "Understand the relationship between theoretical advances and practical applications",
          "Contextualize current AI/ML technologies within their historical development",
          "Provide a reference framework for understanding how the field has evolved over time",
        ],
      },
      detailedDescription: `This timeline was created during residency as a foundational learning artifact to understand the historical context of Artificial Intelligence and Machine Learning. Titled "Combined AI Timeline (1943-2025): Major eras and tools in AI and AI-for-UI," it documents the evolution of the field from early theoretical foundations through major breakthroughs, AI winters, and the current era of deep learning and generative AI, with a particular focus on AI-driven UI creation.

The timeline spans from 1943 to 2025, covering 13 major eras that trace the progression from mathematical and philosophical roots to modern multimodal AI systems. It includes both general AI/ML developments and the specific evolution of AI tools for user interface creation, showing how AI has transformed from theoretical concepts to practical tools that reshape how we build digital experiences.

This artifact demonstrates my commitment to understanding not just current technologies, but the historical context that informs their development and the patterns of innovation that continue to shape the field.`,
      timelineData: [
        {
          era: "Early Foundations",
          dateRange: "1943-1955",
          description: "McCulloch-Pitts neuron, Turing Test, Logic Theorist - the mathematical and philosophical roots of AI."
        },
        {
          era: "The Birth of AI as a Field",
          dateRange: "1956-1969",
          description: "Dartmouth Workshop, Perceptron, ELIZA - optimism around symbolic reasoning and language understanding."
        },
        {
          era: "First AI Winter",
          dateRange: "1970-1980",
          description: "Funding cuts and computational limits after early neural nets failed to deliver practical results."
        },
        {
          era: "Expert Systems Boom",
          dateRange: "1980-1987",
          description: "Rule-based systems like XCON achieved commercial success but were costly to maintain."
        },
        {
          era: "Second AI Winter",
          dateRange: "1987-1993",
          description: "Collapse of Lisp machines and overhyped expectations led to another funding drought."
        },
        {
          era: "Machine Learning Renaissance",
          dateRange: "1993-2010",
          description: "Statistical AI, Bayesian networks, SVMs, and IBM's Deep Blue defined this data-driven era."
        },
        {
          era: "Deep Learning Revolution",
          dateRange: "2010-2016",
          description: "ImageNet, GANs, and AlphaGo - neural networks outperformed humans in key tasks."
        },
        {
          era: "Foundation Models",
          dateRange: "2017-2020",
          description: "Transformers, GPT, BERT, and multimodal models emerged, enabling general-purpose AI."
        },
        {
          era: "Foundations and Early Assistants",
          dateRange: "2020-2021",
          description: "GitHub Copilot (OpenAI Codex): first major AI pair programmer for React/Vue/HTML/CSS. Figma Plugins with AI: content fillers, color palette generators, layout auto-suggesters. Framer & Webflow: early ML-based layout alignment and auto-animation. TensorFlow.js & RunwayML: brought pose/style transfer to browser creative coding."
        },
        {
          era: "Design-to-Code Automation",
          dateRange: "2022",
          description: "Figma → Code converters (Locofy, Anima, Builder.io) output clean React/Vue. OpenAI Codex API: 'generate HTML/React component from prompt.' Canva & Adobe Express: background removal, smart resize via AI segmentation. Tailwind UI & shadcn/ui: AI-based component generation ('create a responsive navbar')."
        },
        {
          era: "Generative UIs & NL-driven Frontends",
          dateRange: "2023",
          description: "ChatGPT + Code Interpreter: natural-language full-stack prototyping. Vercel + Next.js AI SDK: chat-based UI components & RAG integration. Galileo AI, Uizard, Builder.io AI: text-to-UI → editable React/Vue components. Midjourney & Stable Diffusion integrated into creative frontends. Figma FigJam AI: design summarizing and auto-diagramming."
        },
        {
          era: "Full Workflow Integration",
          dateRange: "2024",
          description: "Vercel v2 + GPT-4o: real-time multimodal UIs in React. Figma Dev Mode + AI Inspector: auto-doc props/CSS/responsiveness. Framer AI 2.0: one-sentence → full site generation. Locofy Lightning & Anima 4.0: design → React/Vue/Next.js (TypeScript). Notion, Webflow, Wix AI: conversational app builders."
        },
        {
          era: "Intelligent, Multimodal Creation",
          dateRange: "2025",
          description: "Vercel AI SDK (2025): multimodal UI agents (text/voice/vision). Figma AI Copilot (beta): design suggestions, auto-layout, accessibility, brand tone. React Server Components + AI: inference and prefetching for personalization. OpenAI Canvas + codegen UI: NL → React/Vue/Svelte. Creative AI spans image, video, motion, and code (Runway Gen-3, Pika, Luma)."
        }
      ],
      process: {
        intro:
          "The timeline was developed through systematic research and organization of historical information:",
        sections: [
          {
            title: "Research Phase",
            content:
              "Conducted comprehensive research on AI/ML history, identifying key milestones, breakthroughs, and paradigm shifts from multiple authoritative sources.",
          },
          {
            title: "Organization",
            content:
              "Organized information chronologically, grouping related developments and identifying major periods in AI/ML evolution.",
          },
          {
            title: "Verification",
            content:
              "Cross-referenced information from multiple sources to ensure accuracy and completeness of historical events and dates.",
          },
        ],
      },
      toolsAndTechnologies: `This timeline was created using research methodologies and historical analysis techniques. The primary tools and approaches included:

- **Research Tools**: Academic databases, historical archives, and authoritative AI/ML literature
- **Organization Methods**: Chronological mapping and thematic categorization
- **Visualization**: Timeline structure to represent temporal progression of innovations
- **Analysis Framework**: Identification of patterns, paradigm shifts, and relationships between developments

The artifact demonstrates research skills, critical analysis of historical information, and the ability to synthesize complex information into a coherent narrative.`,
      valueProposition: `This timeline provides unique value by:

- **Foundational Knowledge**: Establishes essential historical context for understanding current AI/ML technologies
- **Pattern Recognition**: Reveals patterns of innovation, challenges, and breakthroughs that inform future development
- **Contextual Understanding**: Helps understand why certain approaches succeeded or failed, and how lessons from the past inform current practices
- **Educational Resource**: Serves as a comprehensive reference for understanding the evolution of AI/ML concepts and technologies
- **Strategic Insight**: Provides perspective on how the field has evolved, which can inform decisions about future directions and opportunities

This artifact demonstrates my commitment to deep, foundational learning and understanding the broader context of the technologies I work with.`,
      uniqueValue: `This timeline offers unique value by providing a comprehensive, organized view of AI/ML history that connects theoretical foundations to practical applications. It reveals how the field has evolved through cycles of innovation, challenges, and breakthroughs, offering insights that are essential for anyone serious about understanding AI/ML beyond surface-level knowledge.

The timeline demonstrates my approach to learning: starting with foundational understanding before diving into specific technologies, recognizing the importance of historical context, and appreciating how past innovations inform current and future developments.`,
      relevance: `This timeline is highly relevant for:

- **AI/ML Students**: Provides essential historical context and foundational knowledge
- **Practitioners**: Helps understand why certain approaches exist and how they evolved
- **Researchers**: Offers context for understanding current research directions and identifying gaps
- **Decision Makers**: Provides perspective on patterns of innovation and adoption in the field
- **Educators**: Serves as a comprehensive reference for teaching AI/ML history

Understanding the history of AI/ML is crucial for making informed decisions about current technologies and anticipating future developments.`,
      learnings: [
        "AI/ML development has occurred in cycles of innovation, enthusiasm, challenges, and renewed progress",
        "Major breakthroughs often built on decades of foundational research and incremental improvements",
        "The field has evolved from symbolic AI to statistical approaches to deep learning, each addressing limitations of previous paradigms",
        "AI winters taught important lessons about managing expectations and the importance of practical applications",
        "Current AI capabilities represent the culmination of decades of research, not sudden breakthroughs",
        "Understanding historical context is essential for appreciating current technologies and anticipating future directions",
        "The field continues to evolve, with each era building on previous innovations while addressing new challenges",
      ],
      references: [
        {
          title: "A Brief History of Artificial Intelligence",
          url: "https://www.ibm.com/topics/artificial-intelligence",
          description:
            "IBM's overview of AI history from early concepts to modern applications.",
        },
        {
          title: "The History of Machine Learning",
          url: "https://www.datacamp.com/blog/history-of-machine-learning",
          description:
            "Comprehensive timeline of machine learning development and key milestones.",
        },
      ],
    },
    2: {
      id: 2,
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
      toolsAndTechnologies: `This lab utilized the following tools and technologies:

- **Google Gemini**: The primary AI model used for building the job hunting assistant. We experimented with both Gemini Flash and Gemini Pro environments to compare performance and accuracy.

- **Prompt Engineering**: Core methodology for iteratively refining the assistant's behavior. We developed and tested seven distinct prompt iterations, each building on lessons learned from previous versions.

- **Collaborative Development**: Team-based approach using shared documentation and systematic testing protocols to refine the assistant's capabilities.

The project demonstrated hands-on experience with modern AI tools, iterative prompt design, and systematic testing methodologies.`,
      valueProposition: `This project demonstrates the practical application of prompt engineering and iterative AI development. It showcases how systematic refinement of instructions can significantly improve AI assistant performance, from initial broad results to precise, actionable job recommendations.

The lab provides value by illustrating the real-world process of developing AI solutions: starting with a clear objective, iterating through multiple versions, addressing specific challenges, and achieving measurable improvements. This hands-on experience is directly applicable to developing production AI applications.`,
    },
    3: {
      id: 3,
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
      toolsAndTechnologies: `This report was created using the following tools and approaches:

- **Research Methodology**: Systematic analysis of academic literature, industry white papers, and authoritative sources on Machine Learning and Deep Learning.

- **Comparative Analysis Framework**: Structured approach to comparing ML and DL across multiple dimensions including data requirements, computational resources, interpretability, and applications.

- **Documentation Tools**: Professional report formatting and presentation to clearly communicate complex technical concepts.

The report demonstrates research skills, analytical thinking, and the ability to synthesize complex information into clear, actionable insights.`,
      valueProposition: `This report provides clear, actionable guidance on when to use Machine Learning versus Deep Learning approaches. It helps practitioners make informed decisions about which methodology is most appropriate for their specific problem, data, and resource constraints.

The comparative analysis offers practical value by translating theoretical differences into decision-making frameworks that can be applied to real-world projects. This understanding is essential for developing effective, appropriately scoped AI solutions.`,
    },
    4: {
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
      toolsAndTechnologies: `This interactive demo was created using the following tools and technologies:

- **ChatGPT 5.1**: Used for iterative concept development, storytelling refinement, and educational content structuring. The AI helped shape the narrative framework and refine the educational approach.

- **Interactive UI Design**: Custom interface with animated flip-card interactions to create an engaging, hands-on learning experience.

- **Educational Design Principles**: Applied learning-centered communication strategies to break down complex concepts into digestible, memorable components.

- **Storytelling Framework**: Detective-themed narrative structure to make abstract neural network concepts more accessible and memorable.

The project demonstrates the ability to combine technical accuracy with effective educational design and engaging user experience.`,
      valueProposition: `This artifact demonstrates the ability to communicate complex technical concepts in accessible, engaging ways. It shows how creative storytelling and interactive design can make abstract AI/ML concepts understandable to diverse audiences.

The project provides value by illustrating effective educational communication strategies that can be applied to explaining any complex technical concept. This skill is essential for AI/ML professionals who need to communicate with non-technical stakeholders, educators, and learners.`,
    },
    5: {
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
      toolsAndTechnologies: `This reflection was developed using the following tools and approaches:

- **Gemini 3**: Used to brainstorm field-specific strategies for addressing algorithmic bias in clinical diagnostic imaging. The AI helped simplify complex terminology and refine content structure.

- **Critical Reflection Framework**: Applied biblical thinking principles to analyze communication challenges and develop personal value statements.

- **Research and Analysis**: Examined real-world examples of algorithmic bias in medical imaging and developed concrete strategies to address these challenges.

- **Ethical AI Analysis**: Systematic approach to identifying and addressing bias in AI systems deployed in critical healthcare contexts.

The reflection demonstrates the ability to apply ethical frameworks to real-world AI challenges and develop actionable strategies for ensuring equitable outcomes.`,
      valueProposition: `This reflection demonstrates a deep commitment to ethical AI development and clear communication about the responsibilities inherent in deploying AI systems in critical contexts. It provides concrete, actionable strategies for addressing algorithmic bias in healthcare applications.

The artifact offers unique value by combining personal reflection with practical solutions, showing how ethical considerations must be integrated into every stage of AI development and deployment. This perspective is essential for building trustworthy, equitable AI systems.`,
    },
    6: {
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
      toolsAndTechnologies: `This interactive newsletter was created using the following tools and technologies:

- **ChatGPT 5.2**: Used for research assistance, content structuring, and initial design concepts. The AI helped identify recent commercial AI applications and analyze their business impact.

- **Interactive UI Design**: Custom-built web interface with filtering, search, and accordion functionality to create an engaging, navigable experience.

- **HTML/CSS/JavaScript**: Frontend technologies used to build the interactive newsletter with modern dark theme, responsive design, and accessibility features.

- **Research Tools**: Systematic research across industry sources, press releases, and case studies to identify recent commercial AI applications with measurable business outcomes.

- **Data Visualization**: Visual representations of business metrics (ROI, time savings, capacity improvements) to make impact data more accessible.

The project demonstrates full-stack web development skills, research capabilities, and the ability to create engaging, accessible interfaces for complex information.`,
      valueProposition: `This newsletter provides unique value by analyzing real-world commercial AI applications with measurable business outcomes, not just theoretical possibilities. It demonstrates how AI is already transforming industries and creating tangible value.

The interactive format makes complex business information accessible and engaging, allowing readers to explore content at their own pace and focus on industries most relevant to them. This approach to presenting research findings is directly applicable to communicating AI insights to business stakeholders.`,
    },
    7: {
      id: 7,
      title: "Generative AI Storytelling for Brand Development",
      description:
        "AI-powered interactive training for front-of-house staff (HR/Operations), using tool chaining with Google Gemini for scenario generation and Streamlit with Cursor for an interactive training demo.",
      technologies: ["Google Gemini", "Streamlit", "Cursor", "HeyGen", "Tool Chaining"],
      link: "https://nqnpfa4v7rs27iwbtsdmng.streamlit.app/",
      icon: "⛓️",
      videoPitchLink: "https://app.heygen.com/videos/6022935fc35540cab20b1de0cddb27fd",
      introduction: `High employee turnover in food and beverage operations leads to inconsistent service quality. Training is often repetitive, costly, and dependent on managers; brand values are documented but not consistently practiced on the floor. This assignment asked us to use generative AI for internal training and brand storytelling—designing a multi-modal solution that chains two or more AI tools to address a specific business problem.

This work connects to using AI for both external engagement and internal improvement: building an AI-powered interactive training system where front-of-house staff practice realistic customer scenarios and receive immediate, brand-aligned feedback.`,
      objective: {
        intro:
          "The primary objective of this assignment was to demonstrate tool chaining with generative AI for brand development and internal operations. Specifically:",
        items: [
          "Choose a problem or business vertical within a fictional company where AI tools can provide measurable improvements",
          "Develop content using two different AI tools and chain their outputs (e.g., from one medium or format to another)",
          "Create an end-to-end solution that addresses the chosen problem with quality and accuracy",
          "Deliver a video pitch and documentation of all generated content, including tool inputs and outputs",
        ],
      },
      detailedDescription: `This project addresses the use case **AI-Generated Training Content for Front-of-House Staff** in the **HR/Operations** vertical. The solution is an AI-powered interactive training system: employees practice realistic customer scenarios and receive immediate feedback aligned with brand values (Warmth, Ownership, Clarity, Efficiency).

**Tool chain:**
(1) **Google Gemini 3 Pro** generates structured training scenarios and scenario images from brand values and front-of-house context.
(2) A **Streamlit** app, built with **Cursor** as an AI-assisted coding partner, turns those scenarios into a decision-based training game—users review a scenario, choose a response, and get immediate feedback and scoring.

Together, the tools form an end-to-end workflow from content creation to interactive delivery.`,
      process: {
        intro:
          "The project was developed by chaining two AI tools, with each step feeding the next:",
        sections: [
          {
            title: "Tool 1 — Google Gemini 3 Pro (Scenario Generation)",
            content:
              "**Inputs:** brand values (Warmth, Ownership, Clarity, Efficiency) and front-of-house context (time pressure, role, store condition).\n**Outputs:** JSON-formatted customer service scenarios (context, response options, ideal response, skill tags) and one image per scenario. Chat link to the Gemini conversation is provided in References.",
          },
          {
            title: "Tool 2 — Cursor & Streamlit (Interactive Training App)",
            content:
              "The Streamlit application was built using Cursor as an AI-assisted coding environment.\n**Inputs:** scenario JSON files and scenario images from Gemini.\n**Output:** an interactive training game where users review a scenario, choose a response, and receive immediate feedback and scoring. The live demo is linked at the top of this page.",
          },
        ],
      },
      toolsAndTechnologies: `This project used the following tools and technologies:

- **Google Gemini 3 Pro**: Generated realistic training scenarios and contextual images in structured JSON format, with one image per scenario saved by scenario ID.
- **Streamlit**: Used to build the interactive training web app that presents scenarios, captures user choices, and provides feedback and scoring.
- **Cursor**: AI-assisted coding partner for implementing the Streamlit app, demonstrating AI usage throughout development as well as in the final product.
- **Tool chaining**: Gemini’s scalable, structured content feeds directly into the Streamlit app, showing an end-to-end AI workflow from content creation to delivery.`,
      valueProposition: `This project demonstrates effective AI tool chaining for internal operations and brand storytelling:

- **Gemini** produces scalable, structured content (scenarios + images) that would be costly to create manually.
- **Streamlit** turns that content into interactive, decision-based learning instead of static materials.
- **Cursor** accelerates reliable implementation of the app.

The approach is scalable, maintainable, and aligned with real-world challenges in the Food & Beverage industry—transforming static training into interactive, brand-aligned experiences.`,
      learnings: [
        "Chaining two or more AI tools (e.g., generative content + interactive app) creates an end-to-end workflow from creation to delivery.",
        "Structured AI outputs (e.g., JSON scenarios) integrate cleanly with custom apps for controllable, scalable content.",
        "Brand values can be embedded into training design (scenario design and feedback criteria) so practice is aligned with company culture.",
        "AI-assisted development (Cursor) speeds up building the delivery layer (Streamlit) while keeping the human in the loop for design and quality.",
        "Using generative AI for internal training and operations is a practical application of the same storytelling and tool-integration concepts used in marketing.",
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

      {artifact && getSectionsForArtifact(artifact).length > 0 && (
        <nav className="artifact-section-nav" aria-label="Page sections">
          {getSectionsForArtifact(artifact).map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="artifact-section-nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      )}

      <div className="artifact-detail-content">
        {artifact.type === "timeline" ? (
          <>
            {artifact.introduction && (
              <section id="section-introduction" className="artifact-section">
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
              <section id="section-objective" className="artifact-section">
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

            <section id="section-overview" className="artifact-section">
              <h2
                onClick={() => toggleSection("overview")}
                className="collapsible-header"
              >
                Timeline Overview
                <span
                  className={`collapse-icon ${collapsedSections.overview ? "collapsed" : ""}`}
                >
                  ▼
                </span>
              </h2>
              {!collapsedSections.overview && (
                <div>
                  <p className="artifact-overview">
                    {renderMarkdownText(artifact.detailedDescription)}
                  </p>
                  {artifact.timelineData && (
                    <div className="timeline-container" style={{ marginTop: "2rem" }}>
                      <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "#646cff" }}>Timeline: Major Eras in AI & AI-for-UI (1943-2025)</h3>
                      <div className="timeline">
                        {artifact.timelineData.map((period, index) => (
                          <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                              <div className="timeline-header">
                                <h4 className="timeline-era">{period.era}</h4>
                                <span className="timeline-date">{period.dateRange}</span>
                              </div>
                              <p className="timeline-description">{period.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </section>

            {artifact.process && (
              <section id="section-process" className="artifact-section">
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
                            </div>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                )}
              </section>
            )}

            {artifact.toolsAndTechnologies && (
              <section id="section-tools" className="artifact-section">
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
              <section id="section-valueProp" className="artifact-section">
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

            {artifact.uniqueValue && (
              <section id="section-uniqueValue" className="artifact-section">
                <h2
                  onClick={() => toggleSection("uniqueValue")}
                  className="collapsible-header"
                >
                  Unique Value
                  <span
                    className={`collapse-icon ${collapsedSections.uniqueValue ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.uniqueValue && (
                  <p className="artifact-overview">
                    {renderMarkdownText(artifact.uniqueValue)}
                  </p>
                )}
              </section>
            )}

            {artifact.relevance && (
              <section id="section-relevance" className="artifact-section">
                <h2
                  onClick={() => toggleSection("relevance")}
                  className="collapsible-header"
                >
                  Relevance
                  <span
                    className={`collapse-icon ${collapsedSections.relevance ? "collapsed" : ""}`}
                  >
                    ▼
                  </span>
                </h2>
                {!collapsedSections.relevance && (
                  <p className="artifact-overview">
                    {renderMarkdownText(artifact.relevance)}
                  </p>
                )}
              </section>
            )}

            {artifact.learnings && (
              <section id="section-learnings" className="artifact-section">
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
              <section id="section-references" className="artifact-section">
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
        ) : artifact.type === "reflection" ? (
          <>
            {artifact.introduction && (
              <section id="section-introduction" className="artifact-section">
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
              <section id="section-valueProp" className="artifact-section">
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
              <section id="section-process" className="artifact-section">
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
              <section id="section-tools" className="artifact-section">
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
              <section id="section-learnings" className="artifact-section">
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
              <section id="section-introduction" className="artifact-section">
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
              <section id="section-objective" className="artifact-section">
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

            <section id="section-overview" className="artifact-section">
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
              <section id="section-process" className="artifact-section">
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
              <section id="section-tools" className="artifact-section">
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
              <section id="section-valueProp" className="artifact-section">
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
              <section id="section-comparison" className="artifact-section">
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
              <section id="section-learnings" className="artifact-section">
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
              <section id="section-references" className="artifact-section">
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
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {artifact.link && (
                  <a
                    href={artifact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button"
                  >
                    {Number(id) === 7 ? "View Demo" : "View Project"} →
                  </a>
                )}
                {artifact.videoPitchLink && (
                  <a
                    href={artifact.videoPitchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button"
                  >
                    Watch Video Pitch →
                  </a>
                )}
              </div>
            </div>

            {artifact.introduction && (
              <section id="section-introduction" className="artifact-section">
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
              <section id="section-objective" className="artifact-section">
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

            <section id="section-overview" className="artifact-section">
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
                    {renderMarkdownText(artifact.detailedDescription)}
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
              <section id="section-process" className="artifact-section">
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
              <section id="section-tools" className="artifact-section">
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
              <section id="section-valueProp" className="artifact-section">
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
              <section id="section-labLog" className="artifact-section">
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
              <section id="section-learnings" className="artifact-section">
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
              <section id="section-references" className="artifact-section">
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

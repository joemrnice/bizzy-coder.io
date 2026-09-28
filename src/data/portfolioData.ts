export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Generative AI' | 'NLP' | 'Computer Vision' | 'MLOps' | 'Data Engineering' | 'AI Agents';
  shortDescription: string;
  problem: string;
  solution: string;
  keyResults: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudyLink?: string;
  image: string;
  featured: boolean;
  detailedCaseStudy?: {
    architecture: string[];
    challenges: string[];
    outcomes: string[];
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  honors?: string;
  details?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuingOrganization: string;
  year: string;
  credentialUrl?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  doi?: string;
  pdfUrl?: string;
  githubUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitles: string[];
  valueProposition: string;
  aboutSummary: string[];
  specializations: string[];
  engineeringPhilosophy: string[];
  email: string;
  location: string;
  github: string;
  linkedin: string;
  website?: string;
  formspreeId: string; // [FORMSPREE_FORM_ID]
  resumePath: string; // /assets/docs/resume.pdf
  profileImagePath: string;
  metrics: Metric[];
  skills: SkillCategory[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  researchInterests: string[];
  publications: PublicationItem[];
}

export const portfolioData: PersonalInfo = {
  name: "Bizzy Coder",
  title: "AI/ML Engineer",
  subtitles: [
    "Machine Learning Engineer",
    "AI Systems Architect",
    "Generative AI & MLOps Specialist"
  ],
  valueProposition: "AI/ML Engineer with 5+ years of professional experience designing, building, deploying, and optimizing production-grade machine learning solutions and scalable AI systems.",
  
  aboutSummary: [
    "I am a Senior AI/ML Engineer with over 5 years of hands-on experience translating complex algorithms into robust, low-latency production applications.",
    "My expertise spans end-to-end ML lifecycle development—from data pipeline orchestration and model training to LLM alignment, RAG architectures, and automated MLOps pipelines.",
    "I focus on building measurable, ethical, and performant AI solutions that drive core business impact while adhering to rigorous software engineering standards."
  ],

  specializations: [
    "Large Language Model Systems & RAG Architectures",
    "Low-Latency Deep Learning Inference & Acceleration",
    "Production MLOps, Automated Pipelines & CI/CD",
    "Scalable Feature Stores & Distributed Data Processing",
    "Computer Vision & Multimodal Learning"
  ],

  engineeringPhilosophy: [
    "Production First: A model is only as valuable as its reliability, speed, and maintainability in production.",
    "Data Quality is Paramount: Clean, high-integrity data pipelines drive 80% of real-world AI performance.",
    "Continuous Monitoring: Rigorous evaluation, drift detection, and automated regression testing ensure long-term model health.",
    "Responsible & Transparent AI: Design for explainability, fairness, and strict privacy boundaries."
  ],

  email: "bizzycoder@gmail.com",
  location: "Fretown/Sierra Leone",
  github: "https://github.com/joemrnice/bizzy-coder.io",
  linkedin: "https://linkedin.in/in/[YOUR_LINKEDIN_USERNAME]",
  website: "https://[YOUR_DOMAIN.COM]",
  formspreeId: "[FORMSPREE_FORM_ID]", // Replace with your actual Formspree ID e.g. "xqyvzkp1"
  resumePath: "./assets/docs/resume.pdf",
  profileImagePath: "./assets/images/vibes.png",

  metrics: [
    {
      label: "Experience",
      value: "5+",
      description: "Years designing & deploying production AI systems"
    },
    {
      label: "ML Projects",
      value: "[XX+]",
      description: "End-to-end models delivered to production"
    },
    {
      label: "Performance",
      value: "[XX%]",
      description: "Average latency reduction / throughput boost"
    },
    {
      label: "Deployments",
      value: "[XX+]",
      description: "Microservices & edge deployments scaled"
    }
  ],

  skills: [
    {
      title: "Machine Learning & AI",
      iconName: "Brain",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Hugging Face", "DeepSpeed", "ONNX", "TensorRT"]
    },
    {
      title: "Generative AI & LLMs",
      iconName: "Sparkles",
      skills: ["LLMs & Fine-Tuning", "RAG Systems", "LangChain / LlamaIndex", "Vector DBs (Pinecone, Qdrant)", "Prompt Engineering", "Embeddings", "AI Agents"]
    },
    {
      title: "Programming & Languages",
      iconName: "Code",
      skills: ["Python", "SQL", "TypeScript / JavaScript", "C++", "Bash / Shell", "GraphQL", "REST APIs"]
    },
    {
      title: "Data Engineering & Storage",
      iconName: "Database",
      skills: ["Pandas & NumPy", "Apache Spark", "PostgreSQL", "MongoDB", "Redis", "DuckDB", "Feature Stores"]
    },
    {
      title: "MLOps, Cloud & DevOps",
      iconName: "Server",
      skills: ["Docker & Kubernetes", "MLflow / Weights & Biases", "GitHub Actions CI/CD", "AWS / GCP / Azure", "Ray", "Triton Inference Server", "Prometheus & Grafana"]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      jobTitle: "[SENIOR AI/ML ENGINEER]",
      company: "[COMPANY NAME]",
      location: "[LOCATION / REMOTE]",
      startDate: "[START DATE - e.g., 2022]",
      endDate: "PRESENT",
      responsibilities: [
        "Architect and maintain end-to-end machine learning infrastructure and Generative AI microservices serving thousands of active user requests.",
        "Design scalable RAG pipelines integrating vector databases and fine-tuned LLMs with automated evaluation benchmarks.",
        "Lead cross-functional collaboration with backend engineering, product teams, and research researchers to deploy model updates with zero downtime."
      ],
      keyAchievements: [
        "[MEASURABLE ACHIEVEMENT: Reduced inference latency by XX% using ONNX runtime and dynamic batching]",
        "[MEASURABLE ACHIEVEMENT: Reduced cloud infrastructure compute cost by XX% while scaling throughput]",
        "[MEASURABLE ACHIEVEMENT: Architected real-time drift detection system flagging data distribution shifts within XX minutes]"
      ],
      technologies: ["PyTorch", "Hugging Face", "LangChain", "Vector DB", "Docker", "Kubernetes", "AWS", "MLflow"]
    },
    {
      id: "exp-2",
      jobTitle: "[MACHINE LEARNING ENGINEER]",
      company: "[COMPANY NAME]",
      location: "[LOCATION]",
      startDate: "[START DATE - e.g., 2020]",
      endDate: "[END DATE - e.g., 2022]",
      responsibilities: [
        "Developed and deployed computer vision and predictive ML models for real-time inference.",
        "Built automated CI/CD data and training pipelines, ensuring reproducibility and versioning with DVC and MLflow.",
        "Optimized deep learning training workflows on GPU clusters."
      ],
      keyAchievements: [
        "[MEASURABLE ACHIEVEMENT: Improved model accuracy metric from XX% to XX% on core product benchmarks]",
        "[MEASURABLE ACHIEVEMENT: Automated feature engineering pipeline cutting data prep time by XX hours per training run]"
      ],
      technologies: ["Python", "PyTorch", "Scikit-Learn", "FastAPI", "Docker", "PostgreSQL", "GitHub Actions"]
    },
    {
      id: "exp-3",
      jobTitle: "[ASSOCIATE AI DEVELOPER / DATA SCIENTIST]",
      company: "[COMPANY NAME]",
      location: "[LOCATION]",
      startDate: "[START DATE - e.g., 2019]",
      endDate: "[END DATE - e.g., 2020]",
      responsibilities: [
        "Performed exploratory data analysis, statistical modeling, and data cleaning across large structured datasets.",
        "Collaborated on productionizing statistical models and reporting dashboards for executive stakeholders."
      ],
      keyAchievements: [
        "[MEASURABLE ACHIEVEMENT: Developed automated ETL validation script preventing corrupted data ingestion]"
      ],
      technologies: ["Python", "Pandas", "NumPy", "SQL", "Scikit-learn", "Git"]
    }
  ],

  projects: [
    {
      id: "proj-alpha",
      title: "[PROJECT ALPHA — High-Throughput RAG & AI Agent Platform]",
      category: "Generative AI",
      shortDescription: "An enterprise retrieval-augmented generation engine powering multi-agent reasoning and secure document indexing.",
      problem: "Enterprise teams required context-aware responses over millions of proprietary documents with strict sub-second response limits.",
      solution: "Engineered a hybrid retrieval system combining dense vector search and sparse keyword indexing with dynamic reranking and streaming response output.",
      keyResults: [
        "[Sub-second latency achieved across 1M+ indexed documents]",
        "[94% precision on expert human evaluation benchmark]",
        "[Zero data leakage across multi-tenant permission layers]"
      ],
      technologies: ["Python", "PyTorch", "Qdrant", "LlamaIndex", "FastAPI", "Docker", "AWS"],
      githubUrl: "https://github.com/[YOUR_USERNAME]/[PROJECT_ALPHA_REPO]",
      liveDemoUrl: "https://[DEMO_LINK_OR_PLACEHOLDER].com",
      image: "./assets/images/project-placeholder.jpg",
      featured: true,
      detailedCaseStudy: {
        architecture: [
          "Ingestion service processes document streams into structured chunks.",
          "Embedding models encode chunks into Qdrant vector database.",
          "Hybrid retriever executes dense semantic search & BM25 keyword matching.",
          "Cross-encoder re-ranker selects top-k passages for LLM context context assembly."
        ],
        challenges: [
          "Balancing context window limits against retrieval recall.",
          "Managing rate limits and concurrent user connections under heavy query spikes."
        ],
        outcomes: [
          "Achieved average response turnaround of under 800ms.",
          "Standardized multi-agent tool execution framework."
        ]
      }
    },
    {
      id: "proj-beta",
      title: "[PROJECT BETA — Edge Computer Vision Detection Pipeline]",
      category: "Computer Vision",
      shortDescription: "Real-time object detection and tracking optimized for low-resource edge devices.",
      problem: "Legacy inspection systems were bound by cloud latency and network instability in industrial field deployments.",
      solution: "Trained compact YOLO/YOLOX variants, quantizing weights to INT8 and compiling with TensorRT for zero-latency local inference.",
      keyResults: [
        "[60+ FPS achieved on NVIDIA Jetson / edge edge devices]",
        "[4x reduction in memory footprint compared to baseline model]",
        "[99.1% mAP@0.5 accuracy on custom validation test set]"
      ],
      technologies: ["PyTorch", "TensorRT", "OpenCV", "C++", "ONNX", "Docker"],
      githubUrl: "https://github.com/[YOUR_USERNAME]/[PROJECT_BETA_REPO]",
      image: "./assets/images/project-placeholder.jpg",
      featured: true,
      detailedCaseStudy: {
        architecture: [
          "Custom dataset collection and augmentation pipeline.",
          "Model training in PyTorch with post-training INT8 quantization.",
          "C++ runtime wrapper using TensorRT for zero-overhead video frame processing."
        ],
        challenges: [
          "Minimizing precision drop during INT8 quantization on low-contrast objects."
        ],
        outcomes: [
          "Deployed to edge nodes with 99.9% uptime over 6+ months of operation."
        ]
      }
    },
    {
      id: "proj-gamma",
      title: "[PROJECT GAMMA — Automated MLOps & Model Drift Observatory]",
      category: "MLOps",
      shortDescription: "End-to-end pipeline monitoring platform for continuous training, evaluation, and drift detection.",
      problem: "Production models suffered silent accuracy degradation due to unseen feature distribution shifts in upstream APIs.",
      solution: "Created an automated drift monitor calculating Kolmogorov-Smirnov statistics on feature distributions and automatically triggering retraining pipelines via GitHub Actions.",
      keyResults: [
        "[Automated detection of data drift before prediction degradation occurred]",
        "[Reduced manual model maintenance overhead by 70%]",
        "[100% reproducible model tracking via MLflow register]"
      ],
      technologies: ["Python", "MLflow", "Evidently AI", "Prometheus", "Grafana", "GitHub Actions", "Kubernetes"],
      githubUrl: "https://github.com/[YOUR_USERNAME]/[PROJECT_GAMMA_REPO]",
      image: "./assets/images/project-placeholder.jpg",
      featured: true,
      detailedCaseStudy: {
        architecture: [
          "Real-time prediction logs ingested into time-series data warehouse.",
          "Scheduled statistical drift job measures data distribution deviation.",
          "Alerting webhooks notify engineering teams and trigger retrain workflows."
        ],
        challenges: [
          "Distinguishing false-positive seasonal spikes from genuine structural concept drift."
        ],
        outcomes: [
          "Reduced mean time to detect model degradation (MTTD) from weeks to under 30 minutes."
        ]
      }
    },
    {
      id: "proj-delta",
      title: "[PROJECT DELTA — Low-Latency NLP Text Classification API]",
      category: "NLP",
      shortDescription: "Production NLP pipeline classifying multilingual feedback at high throughput.",
      problem: "Processing high-volume international customer support tickets in multi-language formats with baseline Transformer models was cost-prohibitive.",
      solution: "Fine-tuned distilled Transformer models and utilized ONNX runtime CPU acceleration with dynamic quantization.",
      keyResults: [
        "[3.5x throughput boost per CPU core]",
        "[92% F1 score across 12 target language categories]",
        "[60% compute cost reduction]"
      ],
      technologies: ["Python", "Hugging Face", "Transformers", "ONNX Runtime", "FastAPI", "Docker"],
      githubUrl: "https://github.com/[YOUR_USERNAME]/[PROJECT_DELTA_REPO]",
      image: "./assets/images/project-placeholder.jpg",
      featured: false
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "[MASTER OF SCIENCE IN COMPUTER SCIENCE / AI]",
      institution: "[UNIVERSITY NAME]",
      location: "[CITY, COUNTRY]",
      year: "[GRADUATION YEAR - e.g., 2019]",
      honors: "[HONORS / DISTINCTION IF APPLICABLE]",
      details: [
        "Focus Areas: Machine Learning, Computer Vision, Distributed Systems",
        "Thesis/Capstone: [CAPSTONE TITLE OR RESEARCH AREA]"
      ]
    },
    {
      id: "edu-2",
      degree: "[BACHELOR OF SCIENCE IN COMPUTER SCIENCE / ENGINEERING]",
      institution: "[UNIVERSITY NAME]",
      location: "[CITY, COUNTRY]",
      year: "[GRADUATION YEAR - e.g., 2017]",
      details: [
        "Core Coursework: Data Structures, Algorithms, Linear Algebra, Probability & Statistics, Software Engineering"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      name: "[AWS CERTIFIED MACHINE LEARNING - SPECIALTY]",
      issuingOrganization: "Amazon Web Services",
      year: "[YEAR]",
      credentialUrl: "https://aws.amazon.com/certification/"
    },
    {
      id: "cert-2",
      name: "[DEEP LEARNING SPECIALIZATION]",
      issuingOrganization: "DeepLearning.AI / Coursera",
      year: "[YEAR]",
      credentialUrl: "https://coursera.org"
    },
    {
      id: "cert-3",
      name: "[TENSORFLOW DEVELOPER CERTIFICATE]",
      issuingOrganization: "Google",
      year: "[YEAR]"
    }
  ],

  researchInterests: [
    "Generative AI & Alignment Techniques (RLHF, DPO)",
    "Retrieval-Augmented Generation (RAG) & Vector Indexing",
    "Quantization, Distillation & Efficient Fine-Tuning (PEFT, LoRA)",
    "Autonomous AI Agents & Tool-Augmented Reasoning",
    "Computer Vision & Multimodal Representation Learning",
    "Responsible AI, Machine Learning Ethics & Explainability"
  ],

  publications: [
    {
      id: "pub-1",
      title: "[SAMPLE PAPER: Efficient Fine-Tuning Strategies for Domain-Specific Language Models]",
      authors: ["[YOUR NAME]", "[CO-AUTHOR NAME]", "[CO-AUTHOR NAME]"],
      venue: "[CONFERENCE OR JOURNAL NAME - e.g., NeurIPS Workshop / IEEE]",
      year: "[2023]",
      doi: "10.1000/182",
      pdfUrl: "https://arxiv.org",
      githubUrl: "https://github.com/[YOUR_USERNAME]/[PAPER_REPO]"
    }
  ]
};

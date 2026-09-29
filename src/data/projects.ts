export type ProjectMetric = {
  label: string;
  value: string;
  detail: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  metrics?: ProjectMetric[];
};

export const projects: Project[] = [
  {
    title: "MediSure: PCOS Risk Screening System",
    description:
      "An ML-based PCOS risk screening system built for a healthcare competition client project. Its two-level architecture supports quick symptom-based screening and advanced clinical assessment.",
    technologies: [
      "Python",
      "Scikit-learn",
      "SVM",
      "XGBoost",
      "Pandas",
      "Machine Learning",
      "Data Preprocessing",
      "Model Evaluation",
      "Streamlit",
    ],
    highlights: [
      "Deployed as an interactive Streamlit application",
      "Client project received ₹10,000 in a healthcare competition",
    ],
    // Paste a confirmed repository URL here when available.
    githubUrl: "",
    liveUrl: "https://medisure-pcos-prediction.streamlit.app/",
    featured: true,
    metrics: [
      {
        label: "Quick Screening",
        value: "85.0% accuracy",
        detail: "89.5% ROC-AUC · RBF-SVM",
      },
      {
        label: "Advanced Assessment",
        value: "91.1% accuracy",
        detail: "96.1% ROC-AUC · XGBoost",
      },
    ],
  },
  {
    title: "Heart Disease Prediction System",
    description:
      "A K-Nearest Neighbors (KNN) machine learning model that predicts heart disease risk from patient medical data.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    highlights: [
      "88% prediction accuracy on test data",
      "Data preprocessing, feature scaling, and missing-value handling",
      "Exploratory Data Analysis",
    ],
    // Paste the confirmed repository URL here when available.
    githubUrl: "",
    // Paste a confirmed live demo URL here when available.
    liveUrl: "",
    featured: false,
  },
  {
    title: "Iris Flower Classification using ANN",
    description:
      "A TensorFlow and Keras Artificial Neural Network (ANN) that classifies Iris flowers into three species.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "NumPy",
      "Streamlit",
    ],
    highlights: [
      "96.67% test accuracy",
      "Feed-forward ANN with ReLU and Softmax activations",
      "Adam optimizer and Categorical Crossentropy loss",
      "Tuned epochs and batch size; saved model and preprocessing pipeline",
    ],
    // Paste the confirmed repository URL here when available.
    githubUrl: "",
    // Paste a confirmed live demo URL here when available.
    liveUrl: "",
    featured: false,
  },
  {
    title: "FastAPI Product Management System",
    description:
      "A FastAPI product management API with CRUD, search, validation, pagination, and RESTful endpoints backed by JSON storage.",
    technologies: [
      "Python",
      "FastAPI",
      "Pydantic",
      "REST API",
      "Streamlit",
      "CRUD",
      "API Validation",
      "JSON",
    ],
    highlights: [
      "RESTful API with CRUD operations, search, and pagination",
      "Request validation with Pydantic",
      "Separate FastAPI backend and Streamlit frontend",
      "JSON-based data storage",
    ],
    // Paste the confirmed repository URL here when available.
    githubUrl: "",
    // Paste a confirmed live demo URL here when available.
    liveUrl: "",
    featured: false,
  },
];

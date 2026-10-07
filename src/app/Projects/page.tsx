'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import type { Container } from 'tsparticles-engine'

// Define TypeScript types
interface ComplexityLevel {
  label: string;
  color: string;
}

interface ComplexityLevels {
  low: ComplexityLevel;
  medium: ComplexityLevel;
  high: ComplexityLevel;
  expert: ComplexityLevel;
  [key: string]: ComplexityLevel;
}

interface ProcessStep {
  step: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  category: string[];
  image: string;
  shortDescription: string;
  details: string;
  stack: string[];
  demoUrl: string;
  status: string;
  complexity: string;
  metrics: { [key: string]: string };
  process: ProcessStep[];
  challenges: string;
  future: string;
  visualization: string;
  startDate: string;
  endDate: string;
}

export default function ProjectsPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
  const [showSkillRadar, setShowSkillRadar] = useState(false)
  const [showTimeline, setShowTimeline] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const networkCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {
    // Optional: do something with the container
  }, [])

  const navItems = [
    { name: 'Neural Entrance', id: 'home', path: '/' },
    { name: 'Data Mind', id: 'about', path: '/DataMind' },
    { name: 'Project Gallery', id: 'projects', path: '/Projects' },
    { name: 'Professional Experience', id: 'stages', path: '/stages' },
    { name: 'Neural Skills', id: 'skills', path: '/competences' },
    { name: 'Future Predictions', id: 'predictions', path: '/predictions' },
    { name: 'Contact', id: 'contact', path: '/contact' }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'nlp', label: 'NLP' },
    { id: 'computer-vision', label: 'Computer Vision' },
    { id: 'dataviz', label: 'DataViz' },
    { id: 'prediction', label: 'Prediction' },
    { id: 'audio', label: 'Audio Analysis' },
    { id: 'mlops', label: 'MLOps' },
    { id: 'medical-ai', label: 'Medical AI' },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'legal-tech', label: 'Legal Tech' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'business-intelligence', label: 'Business Intelligence' }
  ]

  const complexityLevels: ComplexityLevels = {
    low: { label: 'Beginner', color: 'bg-green-500' },
    medium: { label: 'Intermediate', color: 'bg-yellow-500' },
    high: { label: 'Advanced', color: 'bg-red-500' },
    expert: { label: 'Expert', color: 'bg-purple-500' }
  }

  const getComplexity = (level: string): ComplexityLevel => {
    return complexityLevels[level] || complexityLevels.medium;
  }

  // Projects avec chemins d'images locaux
  const projects: Project[] = [
    {
      id: 'projet1',
      title: 'NewsBot – AI News Personalization Assistant',
      category: ['nlp', 'deep-learning', 'prediction', 'audio'],
      image: '/images/projects/newsbot-ai-news.jpg',
      shortDescription: 'Development of an intelligent assistant integrating NLP and Deep Learning for real-time news collection, personalization and summarization, with fake news detection, automatic podcast generation and future trend prediction.',
      details: 'NewsBot is an innovative solution designed to transform news consumption through AI. The system integrates a pipeline based on Transformers for automatic collection and summarization of articles, with a personalized recommendation layer to adapt content to user preferences. It includes a Fake News Detection module, based on multi-source comparison, as well as trend analysis through word clouds, dynamic timelines and future trend prediction using forecasting models and thematic clustering. A Text-to-Speech feature also allows automatic podcast generation. The backend is built with Flask/FastAPI, while the interactive user interface is based on React/Next.js, offering a modern and fluid experience.',
      stack: ['NLP', 'Deep Learning', 'Transformers', 'Fake News Detection', 'Text-to-Speech', 'Forecasting', 'Trend Prediction', 'Flask', 'FastAPI', 'React', 'Next.js', 'Data Visualization', 'Personalized Recommendation', 'AI Podcast'],
      demoUrl: '#',
      status: 'In Progress',
      complexity: 'expert',
      metrics: { accuracy: '92%', precision: '89%', recall: '94%', f1: '91%' },
      process: [
        { step: 'Data Collection', description: 'Extraction and aggregation of articles from various sources' },
        { step: 'Cleaning and Preprocessing', description: 'Tokenization, stop word removal, stemming' },
        { step: 'Analysis and Classification', description: 'Transformer models for categorization and summarization' },
        { step: 'Fake News Detection', description: 'Multi-source comparative analysis and fact checking' },
        { step: 'Personalized Recommendation', description: 'User profiling system and adaptive suggestions' },
        { step: 'Future Trend Prediction', description: 'Use of forecasting models and thematic clustering to anticipate emerging topics' },
        { step: 'Podcast Generation', description: 'Speech synthesis and automatic audio content creation' }
      ],
      challenges: 'The main difficulty was managing structural differences between data sources and optimizing models for fast response time.',
      future: 'Integration of multimodal analysis (text + images), improvement of recommendation system with reinforcement learning, and extension to other languages.',
      visualization: 'line',
      startDate: '2024-01',
      endDate: '2024-06'
    },
    {
      id: 'projet2',
      title: 'NovaMedica',
      category: ['nlp', 'medical-ai', 'prediction'],
      image: '/images/projects/novamedica-medical.jpg',
      shortDescription: 'Web and mobile solution based on AI, enabling automated extraction of medical information from handwritten and printed documents, with personalized treatment recommendation modules and similar medication suggestions.',
      details: 'NovaMedica is an intelligent application designed to improve the efficiency and reliability of medical data processing. It integrates an advanced OCR pipeline combining Transformers and CNNs to accurately extract medication names, dosages and forms from handwritten or printed prescriptions. Based on patient data, the system uses predictive models (RNN, LSTM) to generate personalized treatment recommendations. Additionally, a therapeutic substitute suggestion module analyzes pharmacological properties and interactions to ensure consistent alternatives. Developed with Flask and MongoDB, the solution is compliant with GDPR/HIPAA security and privacy standards, ensuring protection of sensitive medical data.',
      stack: ['OCR', 'Transformers', 'CNN', 'RNN', 'LSTM', 'LLM', 'Medical NLP', 'Flask', 'MongoDB', 'Security', 'GDPR', 'HIPAA'],
      demoUrl: '#',
      status: 'Completed',
      complexity: 'expert',
      metrics: { accuracy: '96%', precision: '95%', recall: '97%', f1: '96%' },
      process: [
        { step: 'Document Scanning', description: 'Acquisition and preprocessing of prescription images' },
        { step: 'Advanced OCR Extraction', description: 'Text recognition with Transformer and CNN models' },
        { step: 'Contextual Understanding', description: 'Semantic analysis of relationships between medications and dosages' },
        { step: 'Personalized Recommendation', description: 'Treatment suggestions based on patient history' },
        { step: 'Interaction Verification', description: 'Detection of contraindications and drug interactions' },
        { step: 'Alert Generation', description: 'Notification system for healthcare professionals' }
      ],
      challenges: 'Recognition of medical handwritten writing presents significant challenges due to individual variations and domain-specific abbreviations.',
      future: 'Integration with electronic medical records, extension to veterinary prescriptions, and development of a multilingual translation module.',
      visualization: 'bar',
      startDate: '2023-09',
      endDate: '2024-02'
    },
    {
      id: 'projet3',
      title: 'LexiAI – Legal Contract Analysis Assistant',
      category: ['nlp', 'legal-tech', 'prediction'],
      image: '/images/projects/lexia-legal-contracts.jpg',
      shortDescription: 'AI-powered assistant for legal document analysis, clause extraction, risk identification, and negotiation support in contracts.',
      details: 'LexiAI is an intelligent legal-tech solution built to automate the review of contracts and legal documents. It combines NLP and document understanding to detect clauses, extract key obligations, identify inconsistencies, and assess legal risk before the contract is signed. The system uses transformer-based models to compare clauses against internal policies and highlight problematic sections with context-aware explanations. A user dashboard allows legal teams to inspect contracts, visualize risk scores, and generate summaries for faster decision-making. It was designed to reduce manual review time while improving consistency and transparency in legal analysis workflows.',
      stack: ['NLP', 'Legal Tech', 'Transformers', 'BERT', 'Document AI', 'Contract Analysis', 'Risk Detection', 'FastAPI', 'React', 'MongoDB', 'Explainable AI'],
      demoUrl: '#',
      status: 'Completed',
      complexity: 'expert',
      metrics: { accuracy: '94%', precision: '93%', recall: '95%', f1: '94%' },
      process: [
        { step: 'Document Intake', description: 'Collecting contracts and legal documents from various sources' },
        { step: 'Text Extraction', description: 'Cleaning and preprocessing legal paragraphs and clauses' },
        { step: 'Clause Classification', description: 'Identifying the type and purpose of each contractual clause' },
        { step: 'Risk Analysis', description: 'Detecting anomalies, ambiguous wording and legal exposure' },
        { step: 'Decision Support', description: 'Generating summaries and recommendations for legal reviewers' },
        { step: 'Monitoring and Review', description: 'Tracking contract changes and updates over time' }
      ],
      challenges: 'The biggest challenge was handling legal ambiguity and ensuring that the system remained explainable for legal experts who need clear justifications.',
      future: 'Integration with enterprise document repositories, multilingual legal support, and AI-assisted negotiation workflows.',
      visualization: 'bar',
      startDate: '2024-02',
      endDate: '2024-05'
    },
    {
      id: 'projet4',
      title: 'CerebriAI – Brain MRI Segmentation and Visualization',
      category: ['computer-vision', 'medical-ai', 'deep-learning'],
      image: '/images/projects/cerebriai-brain-mri.jpg',
      shortDescription: 'Medical AI platform for brain MRI segmentation with interactive 2D/3D visualization and tumor evolution tracking.',
      details: 'CerebriAI is an innovative medical diagnostic assistance platform that uses a 3D U-Net model to automatically segment brain MRIs. The AI detects and isolates tumors, calculates their volumes, and generates interactive 2D and 3D visualizations for better interpretation by doctors. It also offers comparison between multiple scans to track patient evolution over time. NeuroScope integrates immersive 3D brain and tumor simulations to facilitate clinical decision-making and improve therapeutic follow-up accuracy. Developed with React (Vite), Node.js, MongoDB and PyTorch, NeuroScope transforms how medical data is analyzed and visualized into a clear, interactive and AI-enhanced experience.',
      stack: ['PyTorch', 'U-Net 3D', 'React', 'Vite', 'Node.js', 'MongoDB', 'Three.js', 'Plotly.js', 'FastAPI', 'Medical Imaging', '3D Visualization'],
      demoUrl: '#',
      status: 'Completed',
      complexity: 'expert',
      metrics: { accuracy: '96%', precision: '95%', recall: '97%', f1: '96%' },
      process: [
        { step: 'MRI Preprocessing', description: 'Normalization and preparation of medical data' },
        { step: '3D Segmentation', description: 'Application of 3D U-Net model for tumor detection' },
        { step: 'Volume Calculation', description: 'Precise determination of tumor volume' },
        { step: 'Interactive Visualization', description: 'Generation of interactive 2D and 3D views' },
        { step: 'Multi-scan Comparison', description: 'Comparative analysis of evolutions over time' },
        { step: 'Report Generation', description: 'Automatic creation of clinical reports' }
      ],
      challenges: 'Managing sensitive medical data and optimizing 3D model performance for reasonable processing time were complex.',
      future: 'Integration of federated learning, native DICOM support, and extension to other types of brain pathologies.',
      visualization: 'medical',
      startDate: '2023-10',
      endDate: '2024-01'
    },
    {
      id: 'projet5',
      title: '🤟 TalkHands: AI-Powered Sign Language Translator',
      category: ['computer-vision', 'accessibility'],
      image: '/images/projects/talkhands-sign-language.jpg',
      shortDescription: 'A magical bridge between sign language and spoken words! This real-time AI system watches your hands dance through the air and transforms those gestures into spoken words ✨',
      details: 'TalkHands is a real-time sign language translation system that uses AI to create a communication bridge between deaf/hard of hearing and hearing people. The system captures hand movements via a simple webcam and uses computer vision to track 21 landmarks per hand. A trained Random Forest machine learning model recognizes signs with over 95% accuracy and translates them into natural speech through speech synthesis. The project offers several interactive modes: Word Builder to spell words letter by letter, Phrase Mode for pre-programmed common expressions, and Learning Mode to get feedback on sign accuracy.',
      stack: ['OpenCV', 'MediaPipe Hands', 'Scikit-learn', 'Random Forest', 'pyttsx3', 'Computer Vision', 'Machine Learning', 'Real-time Processing', 'Accessibility'],
      demoUrl: '#',
      status: 'Completed',
      complexity: 'high',
      metrics: { accuracy: '95%', precision: '94%', recall: '96%', f1: '95%' },
      process: [
        { step: 'Video Capture', description: 'Real-time acquisition of hand movements via webcam' },
        { step: 'Landmark Detection', description: 'Identification of 21 landmarks per hand with MediaPipe' },
        { step: 'Feature Extraction', description: 'Calculation of angles, distances and relative positions' },
        { step: 'Sign Recognition', description: 'Classification with trained Random Forest' },
        { step: 'Text Translation', description: 'Conversion of recognized signs into words/phrases' },
        { step: 'Speech Synthesis', description: 'Generation of natural speech with pyttsx3' }
      ],
      challenges: 'Managing gesture variability between different users and optimizing real-time performance were the main challenges.',
      future: 'Extension to complete LSF vocabulary, facial expression recognition, and mobile app development.',
      visualization: 'hands',
      startDate: '2023-08',
      endDate: '2023-12'
    },
    {
      id: 'projet6',
      title: 'Face Recognition with Real-Time Database',
      category: ['computer-vision'],
      image: '/images/projects/face-recognition-system.jpg',
      shortDescription: 'Real-time facial recognition system connected to Supabase for intelligent access management, automated attendance and secure IoT integration.',
      details: 'This project combines artificial intelligence and modern infrastructure to develop an intelligent and responsive facial recognition system. Using Python, OpenCV and the face_recognition library (Dlib), the system identifies faces via webcam in real time. Facial data and access logs are stored in Supabase, a platform offering PostgreSQL, REST API and real-time synchronization. Thanks to the Supabase API and Requests/Supabase-py libraries, updates are performed automatically, enabling seamless integration in use cases such as access control, attendance management or secure IoT applications.',
      stack: ['Python', 'OpenCV', 'Dlib', 'face_recognition', 'Supabase', 'PostgreSQL', 'REST API'],
      demoUrl: '#',
      status: 'Completed',
      complexity: 'high',
      metrics: { accuracy: '98%', precision: '97%', recall: '96%', f1: '97%' },
      process: [
        { step: 'Image Capture', description: 'Face acquisition via webcam in real time' },
        { step: 'Preprocessing', description: 'Normalization and image quality enhancement' },
        { step: 'Feature Extraction', description: 'Identification of facial key points' },
        { step: 'Recognition', description: 'Comparison with reference database' },
        { step: 'Data Storage', description: 'Recording in Supabase with timestamp' },
        { step: 'Monitoring Interface', description: 'Access visualization and statistics' }
      ],
      challenges: 'Managing lighting variations and shooting angles required advanced image preprocessing.',
      future: 'Integration of facial mask detection, emotion recognition, and deployment on edge devices.',
      visualization: 'face',
      startDate: '2023-07',
      endDate: '2023-10'
    },
    {
      id: 'projet7',
      title: 'MLOps Pipeline for Telecom Churn Prediction',
      category: ['mlops', 'prediction'],
      image: '/images/projects/mlops-pipeline.jpg',
      shortDescription: 'Implementation of a complete MLOps pipeline to automate the Telecom Churn Prediction project lifecycle, integrating CI/CD, Docker, Jenkins and Kubernetes.',
      details: 'This project aims to industrialize the churn prediction model through a robust MLOps pipeline. The implemented architecture covers the entire lifecycle: data preparation, model training, testing, deployment and monitoring. CI/CD steps were automated via Jenkins and Makefile, while the execution environment was containerized with Docker to ensure portability. Deployment was then orchestrated on Kubernetes, ensuring scalability and high availability. This MLOps pipeline reduces time to production, makes model deployment more reliable and ensures better version traceability, making the predictive system more robust and usable in a real context.',
      stack: ['MLOps', 'CI/CD', 'Jenkins', 'Docker', 'Kubernetes', 'Makefile', 'Machine Learning Lifecycle', 'Model Deployment', 'Model Monitoring', 'Churn Prediction', 'Automation', 'Scalability'],
      demoUrl: '#',
      status: 'Completed',
      complexity: 'expert',
      metrics: { accuracy: '89%', precision: '91%', recall: '87%', f1: '89%' },
      process: [
        { step: 'Data Ingestion', description: 'Collection and aggregation of customer data' },
        { step: 'Feature Engineering', description: 'Creation of relevant predictive variables' },
        { step: 'Model Training', description: 'Experimentation with different algorithms' },
        { step: 'Validation and Testing', description: 'Rigorous performance evaluation' },
        { step: 'Automated Deployment', description: 'Production deployment via CI/CD pipeline' },
        { step: 'Continuous Monitoring', description: 'Real-time performance monitoring' }
      ],
      challenges: 'The main difficulty was creating a robust pipeline capable of managing different model versions and guaranteeing experiment reproducibility.',
      future: 'Integration of model explainability (XAI), automation of drift detection, and extension to other use cases.',
      visualization: 'pipeline',
      startDate: '2023-06',
      endDate: '2023-09'
    },
    {
      id: 'projet8',
      title: 'Airline Business Intelligence Dashboard',
      category: ['dataviz', 'business-intelligence'],
      image: '/images/projects/business-intelligence-dashboard.jpeg',
      shortDescription: 'Development of a 6-page Power BI dashboard for an airline, offering in-depth analysis on customer loyalty, flight activity and temporal trends.',
      details: 'This Power BI project marks an important step in my data analytics journey, with the creation of an interactive and robust dashboard for a client in the airline sector. Built in collaboration with a dedicated team, the dashboard was structured into six key sections: Home (Executive view with strategic KPIs), Customer Analysis (Analysis of demographic and behavioral data), Customer Loyalty (Measurement of loyalty and cancellations), Loyalty Segmentation (Segmentation by engagement and value), Flight Activity Analysis (Study of flight frequency and distance) and Temporal Analysis (Exploration of seasonal and temporal trends). This dashboard helps the airline identify growth levers, optimize its operations and target its loyalty strategies through clear and actionable data visualization.',
      stack: ['Power BI', 'Business Intelligence', 'Data Visualization', 'Customer Loyalty', 'Flight Activity', 'Temporal Analysis', 'KPI', 'Data Analytics', 'Dashboard Design', 'Customer Segmentation'],
      demoUrl: '#',
      status: 'Completed',
      complexity: 'medium',
      metrics: { satisfaction: '95%', performance: '98%', adoption: '90%', impact: '87%' },
      process: [
        { step: 'Needs Analysis', description: 'Identification of KPIs and key metrics' },
        { step: 'Architecture Design', description: 'Dashboard design and interactions' },
        { step: 'ETL and Modeling', description: 'Data transformation and preparation' },
        { step: 'Visualization Development', description: 'Creation of charts and indicators' },
        { step: 'User Validation and Testing', description: 'Adjustments based on feedback' },
        { step: 'Deployment and Training', description: 'Production deployment and user training' }
      ],
      challenges: 'Integrating heterogeneous data sources and designing an interface that is both comprehensive and intuitive represented the major challenges.',
      future: 'Integration of real-time predictions, automated alerts, and mobile extension.',
      visualization: 'dashboard',
      startDate: '2023-05',
      endDate: '2023-08'
    },
    {
      id: 'projet9',
      title: 'ChoubikLoubik',
      category: ['fullstack'],
      image: '/images/projects/choubikloubik-restaurant.jpg',
      shortDescription: 'Web and desktop smart restaurant application enabling centralized management of orders, reservations and deliveries, with voice assistant integration and secure online payment.',
      details: 'ChoubikLoubik is an innovative solution developed to modernize the management experience in the restaurant sector. The application combines a JavaFX desktop interface and a Symfony web backend to offer restaurateurs smooth management of dishes, orders and reservations in real time. It integrates an interactive voice assistant to simplify order taking as well as a secure payment system via Stripe API. Additionally, a dynamic delivery tracking module, based on an interactive map, optimizes routes and improves customer satisfaction. This project was distinguished at the Bal des Projets 2024, obtaining 2nd place among the best student innovations.',
      stack: ['JavaFX', 'Symfony', 'Voice Assistant', 'Stripe API', 'UML Modeling', 'Scrum'],
      demoUrl: '#',
      status: 'Completed',
      complexity: 'high',
      metrics: { efficiency: '40%', satisfaction: '92%', errors: '-60%', speed: '35%' },
      process: [
        { step: 'Needs Analysis', description: 'Identification of business processes to optimize' },
        { step: 'UX/UI Design', description: 'Design of intuitive user interfaces' },
        { step: 'Frontend Development', description: 'Creation of desktop application with JavaFX' },
        { step: 'Backend Development', description: 'API implementation with Symfony' },
        { step: 'Service Integration', description: 'Connection with Stripe and voice services' },
        { step: 'Testing and Deployment', description: 'Validation and production deployment' }
      ],
      challenges: 'Real-time synchronization between the desktop application and web backend required carefully designed architecture.',
      future: 'Dedicated mobile application, AI integration for order prediction, and expansion to other sectors.',
      visualization: 'restaurant',
      startDate: '2023-04',
      endDate: '2023-07'
    }
  ]

  const labs: Project[] = [
    {
      id: 'lab1',
      title: 'Emotion Audio Recognition Lab',
      category: ['audio', 'prediction', 'deep-learning'],
      image: '/images/projects/emotion-audio-recognition.jpg',
      shortDescription: 'Emotion recognition project from audio, combining Deep Learning, spectrograms, audio data augmentation and synthetic data generation by diffusion.',
      details: 'Emotion Audio Recognition Lab is an advanced Speech Emotion Recognition (SER) project, using a complete pipeline based on Python, TensorFlow, Librosa and Scikit-learn. Audio data is enriched by augmentation techniques (noise injection, pitch shifting, time stretching) before being converted into visual representations such as Mel-spectrograms and MFCCs. Trained models include CNNs, ResNet50 and hybrid architectures, enabling better capture of emotional patterns. To compensate for lack of data, diffusion models generate realistic synthetic examples. Finally, performance is measured by rigorous metrics (Precision, Recall, F1-score, Confusion Matrix), ensuring robust system evaluation.',
      stack: ['TensorFlow', 'Librosa', 'Scikit-learn', 'Audio Augmentation', 'Mel-spectrogram', 'MFCC', 'CNN', 'ResNet50', 'Hybrid Models', 'Diffusion Models', 'Speech Emotion Recognition', 'Deep Learning', 'Audio Classification'],
      demoUrl: '#',
      status: 'Completed',
      complexity: 'high',
      metrics: { accuracy: '87%', precision: '85%', recall: '88%', f1: '86%' },
      process: [
        { step: 'Audio Data Collection', description: 'Acquisition of voice samples with different emotions' },
        { step: 'Audio Preprocessing', description: 'Signal cleaning, normalization, noise removal' },
        { step: 'Feature Extraction', description: 'Calculation of MFCC, spectrograms, and other acoustic features' },
        { step: 'Data Augmentation', description: 'Synthesis and transformation techniques to enrich dataset' },
        { step: 'Model Training', description: 'Experimentation with CNN, RNN and hybrid architectures' },
        { step: 'Evaluation and Optimization', description: 'Cross-validation and hyperparameter tuning' }
      ],
      challenges: 'Inter-individual variability in emotion expression and environmental noise constituted the main challenges to overcome.',
      future: 'Extension to other languages, real-time integration, and combination with facial analysis for multimodal recognition.',
      visualization: 'wave',
      startDate: '2023-03',
      endDate: '2023-06'
    },
    {
      id: 'lab2',
      title: 'Telecom Churn Prediction',
      category: ['prediction'],
      image: '/images/projects/telecom-churn-prediction.jpg',
      shortDescription: 'Customer churn prediction project in the telecommunications sector, using Machine Learning and deployed via Flask to provide real-time predictions.',
      details: 'The Telecom Churn Prediction project aims to anticipate the probability that a customer will unsubscribe from a telecom service. Based on historical data on customer behavior, the system applies Machine Learning techniques (Scikit-learn) to identify the most at-risk profiles. The application was deployed with Flask, offering an interactive web interface (HTML/CSS/JS) that allows companies to obtain real-time predictions. Additionally, exploratory analyses and visualizations (Matplotlib, Seaborn) help interpret results and guide retention actions. This project provides a strategic tool to improve customer retention and reduce churn rate.',
      stack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning', 'Classification', 'Data Visualization', 'Matplotlib', 'Seaborn', 'HTML/CSS/JS', 'Churn Prediction', 'Telecommunications', 'Customer Retention'],
      demoUrl: '#',
      status: 'Completed',
      complexity: 'medium',
      metrics: { accuracy: '83%', precision: '81%', recall: '85%', f1: '83%' },
      process: [
        { step: 'Exploratory Analysis', description: 'Identification of factors influencing churn' },
        { step: 'Feature Engineering', description: 'Creation of relevant predictive variables' },
        { step: 'Model Training', description: 'Experimentation with different algorithms' },
        { step: 'Optimization', description: 'Hyperparameter tuning and best model selection' },
        { step: 'Application Development', description: 'Web interface creation with Flask' },
        { step: 'Deployment', description: 'Production deployment and user testing' }
      ],
      challenges: 'Class imbalance (few customers leaving) required specific sampling and evaluation techniques.',
      future: 'Integration of real-time data, automated alerts, and extension to other sectors.',
      visualization: 'churn',
      startDate: '2023-02',
      endDate: '2023-05'
    }
  ]

  // Component to display project image
  const ProjectImage = ({ projectId, imageUrl, title }: { projectId: string, imageUrl: string, title: string }) => {
    const [imageError, setImageError] = useState(false);

    const getProjectImage = (id: string) => {
      const projectImages: { [key: string]: string } = {
        'projet1': '/images/projects/newsbot-ai-news.jpg',
        'projet2': '/images/projects/novamedica-medical.jpg',
        'projet3': '/images/projects/lexia-legal-contracts.jpg',
        'projet4': '/images/projects/cerebriai-brain-mri.jpg',
        'projet5': '/images/projects/talkhands-sign-language.jpg',
        'projet6': '/images/projects/face-recognition-system.jpg',
        'projet7': '/images/projects/mlops-pipeline.jpg',
        'projet8': '/images/projects/business-intelligence-dashboard.jpg',
        'projet9': '/images/projects/choubikloubik-restaurant.jpg',
        'lab1': '/images/projects/emotion-audio-recognition.jpg',
        'lab2': '/images/projects/telecom-churn-prediction.jpg'
      };
      return projectImages[id] || imageUrl;
    };

    const getPlaceholderColor = (id: string) => {
      const colors = {
        'projet1': 'from-blue-600/20 to-cyan-600/20',
        'projet2': 'from-green-600/20 to-emerald-600/20', 
        'projet3': 'from-purple-600/20 to-pink-600/20',
        'projet4': 'from-orange-600/20 to-red-600/20',
        'projet5': 'from-teal-600/20 to-blue-600/20',
        'projet6': 'from-violet-600/20 to-purple-600/20',
        'projet7': 'from-amber-600/20 to-yellow-600/20',
        'projet8': 'from-indigo-600/20 to-blue-600/20',
        'projet9': 'from-rose-600/20 to-pink-600/20',
        'lab1': 'from-amber-600/20 to-yellow-600/20',
        'lab2': 'from-rose-600/20 to-pink-600/20'
      };
      return colors[id as keyof typeof colors] || 'from-cyan-600/20 to-purple-600/20';
    };

    const getProjectIcon = (id: string) => {
      const icons = {
        'projet1': '📰',
        'projet2': '💊',
        'projet3': '⚖️',
        'projet4': '🧠',
        'projet5': '🤟',
        'projet6': '👤',
        'projet7': '⚙️',
        'projet8': '📊',
        'projet9': '🍽️',
        'lab1': '🎵',
        'lab2': '📞'
      };
      return icons[id as keyof typeof icons] || '📁';
    };

    return (
      <div className={`h-48 bg-gradient-to-r ${getPlaceholderColor(projectId)} rounded-xl mb-4 overflow-hidden relative`}>
        {!imageError ? (
          <Image
            src={getProjectImage(projectId)}
            alt={`Cover image for ${title}`}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback if image doesn't exist
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-4xl mb-2">{getProjectIcon(projectId)}</div>
              <div className="text-cyan-300 font-semibold capitalize">{projectId.replace('projet', 'Project ').replace('lab', 'Lab ')}</div>
              <div className="text-cyan-300/70 text-sm mt-1">{title}</div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Timeline Component
  const TimelineView = () => {
    const allItems = [...projects, ...labs].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    
    const getMonthYear = (dateStr: string) => {
      const [year, month] = dateStr.split('-');
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[parseInt(month) - 1]} ${year}`;
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 mb-8"
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Project Timeline</h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>
          
          {allItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center mb-8"
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 w-4 h-4 rounded-full border-4 border-white ${
                item.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
              } z-10`}></div>
              
              {/* Content */}
              <div className="ml-12 bg-cyan-900/40 rounded-xl p-4 flex-1 border border-cyan-500/30">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-cyan-300">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Completed' ? 'bg-green-900/40 text-green-300' : 'bg-blue-900/40 text-blue-300'
                    }`}>
                      {item.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexity(item.complexity).color}/40 text-${getComplexity(item.complexity).color.split('-')[1]}-300`}>
                      {getComplexity(item.complexity).label}
                    </span>
                  </div>
                </div>
                
                <div className="text-cyan-100/70 text-sm mb-2">{item.shortDescription}</div>
                
                <div className="flex justify-between items-center text-xs text-cyan-400">
                  <span>Start: {getMonthYear(item.startDate)}</span>
                  <span>End: {getMonthYear(item.endDate)}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.category.slice(0, 3).map(cat => (
                    <span key={cat} className="px-2 py-1 bg-cyan-800/40 text-cyan-300 rounded-full text-xs">
                      {cat}
                    </span>
                  ))}
                  {item.category.length > 3 && (
                    <span className="px-2 py-1 bg-cyan-800/40 text-cyan-300 rounded-full text-xs">
                      +{item.category.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  // Particles animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
      color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
    }))
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY
        }
        
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })
      
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)'
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  // Neural network animation
  useEffect(() => {
    const canvas = networkCanvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    const layers = [
      { neurons: 4, x: 0.2, values: Array(4).fill(0).map(() => Math.random()) },
      { neurons: 6, x: 0.5, values: Array(6).fill(0).map(() => Math.random()) },
      { neurons: 4, x: 0.8, values: Array(4).fill(0).map(() => Math.random()) }
    ]
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)'
      ctx.lineWidth = 1
      
      for (let l = 0; l < layers.length - 1; l++) {
        const layer1 = layers[l]
        const layer2 = layers[l + 1]
        
        for (let i = 0; i < layer1.neurons; i++) {
          for (let j = 0; j < layer2.neurons; j++) {
            const x1 = layer1.x * canvas.width
            const y1 = (i + 1) * canvas.height / (layer1.neurons + 1)
            const x2 = layer2.x * canvas.width
            const y2 = (j + 1) * canvas.height / (layer2.neurons + 1)
            
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        }
      }
      
      layers.forEach(layer => {
        for (let i = 0; i < layer.neurons; i++) {
          const x = layer.x * canvas.width
          const y = (i + 1) * canvas.height / (layer.neurons + 1)
          const radius = 5 + layer.values[i] * 10
          
          layer.values[i] += (Math.random() - 0.5) * 0.1
          layer.values[i] = Math.max(0, Math.min(1, layer.values[i]))
          
          ctx.fillStyle = `rgba(100, 200, 255, ${0.3 + layer.values[i] * 0.7})`
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))
  
  const filteredLabs = activeFilter === 'all' 
    ? labs 
    : labs.filter(lab => lab.category.includes(activeFilter))

  const toggleDetails = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a18] to-[#1a1a2e] text-white overflow-hidden relative">
      {/* Data flow animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-cyan-400/30 via-purple-500/50 to-pink-500/30"
            initial={{ 
              x: i % 2 === 0 ? '-100%' : '100%', 
              y: `${(i + 1) * 20}%`,
              opacity: 0.3
            }}
            animate={{ 
              x: i % 2 === 0 ? '100%' : '-100%',
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#00a2ff", '#0066ff', '#a855f7'] },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1.5, direction: "none", outModes: { default: "out" } },
            links: {
              enable: true, distance: 150, color: { value: "#00a2ff" }, 
              opacity: 0.4, width: 1
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.8 } },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />

      <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-40" />
      <canvas ref={networkCanvasRef} className="fixed inset-0 z-0 opacity-20" />

      {/* Navigation bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-2xl border-b border-cyan-500/30"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center h-20">
            <div className="flex space-x-10">
              {navItems.map((item, index) => (
                <motion.div key={item.id} className="relative" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }}>
                  <Link href={item.path} className={`text-cyan-300/90 hover:text-cyan-400 transition-colors font-medium text-sm relative py-2 px-1`}>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="relative z-20 container mx-auto px-4 py-16 pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Projects Gallery
          </h1>
          <p className="text-cyan-300 font-mono text-xl max-w-3xl mx-auto">
            Exploration of innovative ideas in Data Science and Artificial Intelligence
          </p>
        </motion.div>

        {/* Additional controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.button onClick={() => setShowSkillRadar(!showSkillRadar)} className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="mr-2">📊</span> 
            {showSkillRadar ? 'Hide skills' : 'View my skills'}
          </motion.button>
          
          <motion.button onClick={() => setShowTimeline(!showTimeline)} className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="mr-2">⏳</span> 
            {showTimeline ? 'Hide timeline' : 'View timeline'}
          </motion.button>
        </div>

        {/* Timeline View */}
        <AnimatePresence>
          {showTimeline && <TimelineView />}
        </AnimatePresence>

        {/* Filters */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          {filters.map(filter => (
            <motion.button 
              key={filter.id} 
              onClick={() => setActiveFilter(filter.id)} 
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30' 
                  : 'bg-cyan-900/30 text-cyan-300 hover:bg-cyan-800/40'
              }`} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Section */}
        <motion.section className="mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center justify-center">
            <span className="mr-3">🚀</span>Projects
          </h2>

          {filteredProjects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">No projects found</h3>
              <p className="text-cyan-100/70">No projects match the selected filter. Try another category!</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map(project => (
                <motion.div key={project.id} className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ y: -5 }}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-cyan-300">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Completed' ? 'bg-green-900/40 text-green-300' : 'bg-blue-900/40 text-blue-300'}`}>
                        {project.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexity(project.complexity).color}/40 text-${getComplexity(project.complexity).color.split('-')[1]}-300`}>
                        {getComplexity(project.complexity).label}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project image */}
                  <ProjectImage projectId={project.id} imageUrl={project.image} title={project.title} />
                  
                  <p className="text-cyan-100/80 mb-4">{project.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.map(cat => (
                      <span key={cat} className="px-2 py-1 bg-cyan-900/40 text-cyan-300 rounded-full text-xs">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.metrics && Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="bg-cyan-900/30 rounded-lg p-2 text-center">
                        <div className="text-xs text-cyan-300 uppercase">{key}</div>
                        <div className="text-lg font-bold text-cyan-100">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 mb-4">
                    <motion.button onClick={() => toggleDetails(project.id)} className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {expandedItems[project.id] ? 'Hide details' : 'View details'}
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {expandedItems[project.id] && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="pt-4 border-t border-cyan-500/20">
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Project Details:</h4>
                          <p className="text-cyan-100/80 mb-4">{project.details}</p>
                          
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Development Process:</h4>
                          <div className="mb-4">
                            {project.process.map((step, i) => (
                              <div key={i} className="mb-2 flex">
                                <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center mr-3 flex-shrink-0">
                                  <span className="text-cyan-300 font-bold">{i + 1}</span>
                                </div>
                                <div>
                                  <div className="font-semibold text-cyan-300">{step.step}</div>
                                  <div className="text-cyan-100/70 text-sm">{step.description}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenges Encountered:</h4>
                          <p className="text-cyan-100/80 mb-4">{project.challenges}</p>
                          
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Future Improvements:</h4>
                          <p className="text-cyan-100/80 mb-4">{project.future}</p>
                          
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map(tech => (
                              <span key={tech} className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

        {/* Labs Section */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <h2 className="text-3xl font-bold text-purple-400 mb-8 flex items-center justify-center">
            <span className="mr-3">🔬</span>Labs
          </h2>

          {filteredLabs.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-purple-300 mb-2">No labs found</h3>
              <p className="text-cyan-100/70">No labs match the selected filter. Try another category!</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredLabs.map(lab => (
                <motion.div key={lab.id} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/40 shadow-2xl shadow-purple-500/10 overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ y: -5 }}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-purple-300">{lab.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${lab.status === 'Completed' ? 'bg-green-900/40 text-green-300' : 'bg-blue-900/40 text-blue-300'}`}>
                        {lab.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexity(lab.complexity).color}/40 text-${getComplexity(lab.complexity).color.split('-')[1]}-300`}>
                        {getComplexity(lab.complexity).label}
                      </span>
                    </div>
                  </div>
                  
                  {/* Lab image */}
                  <ProjectImage projectId={lab.id} imageUrl={lab.image} title={lab.title} />
                  
                  <p className="text-cyan-100/80 mb-4">{lab.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {lab.category.map(cat => (
                      <span key={cat} className="px-2 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {lab.metrics && Object.entries(lab.metrics).map(([key, value]) => (
                      <div key={key} className="bg-purple-900/30 rounded-lg p-2 text-center">
                        <div className="text-xs text-purple-300 uppercase">{key}</div>
                        <div className="text-lg font-bold text-purple-100">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 mb-4">
                    <motion.button onClick={() => toggleDetails(lab.id)} className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {expandedItems[lab.id] ? 'Hide details' : 'View details'}
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {expandedItems[lab.id] && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="pt-4 border-t border-purple-500/20">
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Lab Details:</h4>
                          <p className="text-cyan-100/80 mb-4">{lab.details}</p>
                          
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Development Process:</h4>
                          <div className="mb-4">
                            {lab.process.map((step, i) => (
                              <div key={i} className="mb-2 flex">
                                <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center mr-3 flex-shrink-0">
                                  <span className="text-purple-300 font-bold">{i + 1}</span>
                                </div>
                                <div>
                                  <div className="font-semibold text-purple-300">{step.step}</div>
                                  <div className="text-cyan-100/70 text-sm">{step.description}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Challenges Encountered:</h4>
                          <p className="text-cyan-100/80 mb-4">{lab.challenges}</p>
                          
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Future Improvements:</h4>
                          <p className="text-cyan-100/80 mb-4">{lab.future}</p>
                          
                          <h4 className="text-lg font-semibold text-purple-400 mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {lab.stack.map(tech => (
                              <span key={tech} className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-500/30">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
      </div>

      <motion.footer className="text-center py-12 text-cyan-500/50 text-sm relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>
        <p>Designed with ❤️ and 🤖 • © 2024 Mberik Oumayma</p>
      </motion.footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, .font-mono {
          font-family: 'Space Mono', monospace;
        }
        
        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
      `}</style>
    </div>
  )
}
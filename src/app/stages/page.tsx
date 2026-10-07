'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'

interface Internship {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  missions: string[];
  achievements?: string[];
  skills: string[];
  image: string;
  color: string;
  icon: string;
  level: 'junior' | 'intermediate' | 'advanced' | 'expert';
  tools?: string[];
  tags?: string[];
  imageRatio?: 'wide' | 'square';
  details?: string[];
}

export default function ProfessionalExperiencePage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [activeNav, setActiveNav] = useState('experience')
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
  const [activeFilter, setActiveFilter] = useState('all')
  const [isHoveringClickable, setIsHoveringClickable] = useState(false)
  const [isCursorVisible, setIsCursorVisible] = useState(true)
  const cursorRef = useRef<HTMLDivElement>(null)

  // Optimized cursor management - FIXED
  useEffect(() => {
    let animationFrameId: number
    let lastX = 0
    let lastY = 0
    const sensitivity = 1

    const handleMouseMove = (e: MouseEvent) => {
      if (!isCursorVisible) return
      
      cancelAnimationFrame(animationFrameId)
      
      animationFrameId = requestAnimationFrame(() => {
        const deltaX = Math.abs(e.clientX - lastX)
        const deltaY = Math.abs(e.clientY - lastY)
        
        if (deltaX > sensitivity || deltaY > sensitivity) {
          setCursorPosition({ 
            x: Math.max(10, Math.min(window.innerWidth - 10, e.clientX)),
            y: Math.max(10, Math.min(window.innerHeight - 10, e.clientY))
          })
          lastX = e.clientX
          lastY = e.clientY
        }
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      if (!isCursorVisible) return
      
      const target = e.target as HTMLElement
      const isClickable = target.tagName === 'BUTTON' || 
                         target.tagName === 'A' || 
                         target.closest('button') !== null || 
                         target.closest('a') !== null
      
      setIsHoveringClickable(isClickable)
    }

    const handleMouseOut = () => {
      if (!isCursorVisible) return
      setIsHoveringClickable(false)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [isCursorVisible])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])

  const navItems = [
    { name: 'Neural Entrance', id: 'home', path: '/' },
    { name: 'Data Mind', id: 'about', path: '/DataMind' },
    { name: 'Project Gallery', id: 'projects', path: '/Projects' },
    { name: 'Professional Experience', id: 'experience', path: '/stages' },
    { name: 'Neural Skills', id: 'skills', path: '/competences' },
    { name: 'Future Predictions', id: 'predictions', path: '/predictions' },
    { name: 'Contact', id: 'contact', path: '/contact' }
  ]

  const filters = [
    { id: 'all', label: 'All Experiences' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Development' }
  ]

  const internships: Internship[] = [
    {
      id: 'internship4',
      company: 'NeoLedge',
      position: 'PFE Internship – AI Engineer',
      period: 'January 2025 – June 2025',
      location: 'NeoLedge, Tunisia',
      description: 'Final-year internship focused on intelligent systems and AI-powered business solutions',
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'FastAPI', 'Power BI', 'SQL'],
      missions: ['AI solution design', 'Model prototyping', 'Business intelligence integration', 'Deployment'],
      achievements: ['Production-ready AI prototype', 'Decision-support dashboard'],
      skills: ['Applied AI', 'Data-driven decision making', 'End-to-end deployment'],
      tools: ['Python', 'FastAPI', 'Scikit-learn', 'TensorFlow', 'Power BI', 'Git/GitHub'],
      tags: ['PFE', 'AI', 'Innovation'],
      image: '/neoledge.jpeg',
      color: 'from-yellow-500/20 to-orange-500/20',
      icon: '🚀',
      level: 'expert',
      imageRatio: 'wide',
      details: [
        'Final-year internship project conducted within NeoLedge, focused on the design and development of an AI-based solution for a real business use case.',
        'Exploration of intelligent data processing workflows, combining machine learning, predictive modeling, and decision-support capabilities for operational use.',
        'Implementation of a robust technical pipeline covering data preparation, model experimentation, validation, and deployment in a production-oriented environment.',
        'Contribution to the creation of practical AI-driven features aligned with the company’s strategic goals, with an emphasis on impact, usability, and scalability.',
        'Development of an end-to-end project mindset covering architecture, experimentation, testing, and presentation to stakeholders.'
      ]
    },
    {
      id: 'internship1',
      company: 'BaridVision',
      position: 'Data Scientist Intern – AI',
      period: 'June 2025 – September 2025',
      location: 'BaridVision, Tunisia',
      description: 'Computer vision system for postal sorting centers',
      technologies: ['YOLOv8', 'ByteTrack', 'ConvNeXtV2-Large', 'Deep Learning', 'Computer Vision', 'Roboflow', 'Python'],
      missions: ['AI pipeline development', 'Data annotation', 'Industrial integration'],
      achievements: ['Accuracy >95%', 'Volumetric weight calculation'],
      skills: ['Computer Vision', 'Deep Learning', 'Real-time processing'],
      tools: ['Roboflow', 'YOLOv8', 'RGB/X-Ray Cameras'],
      tags: ['Advanced AI', 'Computer Vision'],
      image: '/baridlogo.png',
      color: 'from-blue-600/20 to-cyan-600/20',
      icon: '👁️',
      level: 'expert',
      imageRatio: 'square',
      details: [
        'Dataset annotation and preparation with Roboflow, including cleaning, labeling, and class management for training detection models.',
        'Development of a complete AI pipeline for real-time package detection and tracking with YOLOv8 and ByteTrack, achieving high accuracy (>95%) on real data.',
        'Training a ConvNeXtV2-Large model for precise package dimension estimation, enabling automatic volumetric weight calculation for logistics billing.',
        'Implementation of a Deep Learning model for identifying prohibited objects (weapons, liquids, batteries, etc.) from visual data from X-ray cameras.',
        'Development of a package classification system (intact/damaged, small/large), contributing to improved security and reliability of postal sorting.',
        'Contribution to the integration of AI solutions in the industrial environment, with RGB and X-Ray cameras, respecting security and real-time performance constraints.'
      ]
    },
    {
      id: 'internship2',
      company: 'Solartech-Sud',
      position: 'Backend Developer Intern',
      period: 'June 2024 – July 2024',
      location: 'Solartech-Sud, Tunisia',
      description: 'Software solutions for intelligent solar systems',
      technologies: ['Python', 'Flask', 'REST API', 'SQLAlchemy', 'PostgreSQL', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'IoT'],
      missions: ['Backend development', 'Interactive dashboard', 'REST API'],
      achievements: ['Real-time dashboard', 'IoT SMS system'],
      skills: ['Backend Development', 'REST API', 'IoT'],
      tools: ['Flask', 'PostgreSQL', 'Docker', 'Git/GitHub', 'Postman'],
      tags: ['Backend', 'IoT', 'Solar Energy'],
      image: '/solartechlogo.png',
      color: 'from-green-600/20 to-emerald-600/20',
      icon: '⚡',
      level: 'advanced',
      imageRatio: 'wide',
      details: [
        'Development of backend features with Flask (Python), including a robust user management system and secure authentication.',
        'Design and deployment of an interactive dashboard for data tracking and equipment monitoring.',
        'Implementation of an automated SMS communication service between machines (IoT) to ensure real-time connectivity.',
        'Strengthening skills in backend development, REST API, and user interface management.',
        '🔹 Technologies & Tools: Python, Flask, REST API, SQLAlchemy, PostgreSQL/MySQL, HTML5, CSS3, JavaScript, Bootstrap, IoT (SMS Gateway), Git/GitHub, Docker (introduction), Postman.'
      ]
    },
    {
      id: 'internship3',
      company: 'Softifi',
      position: 'Mobile Developer Intern',
      period: 'June 2022 – July 2022',
      location: 'Softifi, Tunisia',
      description: 'Cross-platform mobile application development',
      technologies: ['Flutter', 'Dart', 'Android', 'iOS', 'REST API', 'Firebase', 'JSON'],
      missions: ['Cross-platform apps', 'Modern UI/UX', 'Performance optimization'],
      achievements: ['Android/iOS apps', 'Responsive interfaces'],
      skills: ['Mobile Development', 'UI/UX', 'Cross-platform'],
      tools: ['Flutter', 'Dart', 'Android Studio', 'Xcode', 'Visual Studio Code'],
      tags: ['Mobile', 'Cross-platform', 'UI/UX'],
      image: '/softifilogo.jpeg',
      color: 'from-purple-600/20 to-pink-600/20',
      icon: '📱',
      level: 'intermediate',
      imageRatio: 'square',
      details: [
        'Design and development of mobile applications for Android and iOS with Flutter, integrating RESTful APIs for advanced services.',
        'Creation of modern and ergonomic interfaces, improving user experience.',
        'Optimization of application performance through profiling and debugging techniques on Visual Studio Code.',
        'Contribution to the complete mobile development cycle: design → development → testing → deployment.',
        '🔹 Technologies & Tools: Flutter, Dart, Android Studio, Xcode, RESTful APIs, Firebase (Auth/DB/Cloud Messaging), JSON, Git/GitHub, Visual Studio Code, Material Design, Postman.'
      ]
    }
  ]

  const filteredInternships = activeFilter === 'all' ? internships : internships.filter(internship => {
    if (activeFilter === 'ai') return internship.technologies.some(tech => 
      ['YOLOv8', 'Deep Learning', 'Computer Vision'].includes(tech)
    )
    if (activeFilter === 'web') return internship.technologies.some(tech => 
      ['Flask', 'REST API', 'PostgreSQL'].includes(tech)
    )
    if (activeFilter === 'mobile') return internship.technologies.some(tech => 
      ['Flutter', 'Dart', 'Android'].includes(tech)
    )
    return true
  })

  const getLevelColor = (level: string) => {
    const colors = {
      junior: 'from-green-500 to-green-600',
      intermediate: 'from-blue-500 to-blue-600',
      advanced: 'from-purple-500 to-purple-600',
      expert: 'from-red-500 to-red-600'
    }
    return colors[level as keyof typeof colors] || 'from-gray-500 to-gray-600'
  }

  const getLevelText = (level: string) => {
    const texts = {
      junior: 'Junior',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      expert: 'Expert'
    }
    return texts[level as keyof typeof texts] || level
  }

  const toggleDetails = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // Simplified InternshipMedia component without video functionality
  const InternshipMedia = ({ internship }: { 
    internship: Internship;
  }) => {
    const [mediaError, setMediaError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const isSquareImage = internship.imageRatio === 'square'

    const containerClass = isSquareImage
      ? 'w-full max-w-[180px] h-[180px] mx-auto flex items-center justify-center rounded-2xl border border-cyan-500/20 bg-white/5 p-4'
      : 'w-full max-w-[280px] h-[110px] mx-auto flex items-center justify-center rounded-2xl border border-cyan-500/20 bg-white/5 p-4'

    const mediaClass = isSquareImage
      ? 'max-w-full max-h-full object-contain rounded-xl mx-auto'
      : 'max-w-full max-h-full object-contain rounded-xl mx-auto'

    if (mediaError) {
      return (
        <div className={`${containerClass} bg-gradient-to-br from-gray-700 to-gray-900`}>
          <div className="text-center text-gray-400">
            <div className="text-4xl mb-2">🏢</div>
            <div className="text-sm">{internship.company}</div>
          </div>
        </div>
      )
    }

    return (
      <div className={containerClass}>
        {isLoading && (
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-gray-700 to-gray-900">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
          </div>
        )}
        <img 
          src={internship.image} 
          alt={internship.company}
          className={`${mediaClass} transition-transform duration-500 hover:scale-105 ${isLoading ? 'hidden' : 'block'}`}
          onError={() => setMediaError(true)}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    )
  }

  const TechBadge = ({ tech, index }: { tech: string; index: number }) => (
    <motion.span 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="px-3 py-1 bg-gradient-to-r from-cyan-900/40 to-purple-900/40 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
    >
      {tech}
    </motion.span>
  )

  // Optimized custom cursor
  const CustomCursor = () => (
    <motion.div
      ref={cursorRef}
      className={`fixed z-50 pointer-events-none hidden md:block transition-opacity duration-200 ${
        isCursorVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
      }}
      animate={{
        x: -10,
        y: -10,
        scale: isHoveringClickable ? 1.3 : 1,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 400,
        mass: 0.5
      }}
    >
      <div className="relative">
        <motion.div
          className="w-6 h-6 border-2 border-cyan-400 rounded-full"
          animate={{
            scale: isHoveringClickable ? 1.1 : 0.8,
            opacity: isHoveringClickable ? 0.8 : 0.5,
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHoveringClickable ? 1.8 : 1,
            backgroundColor: isHoveringClickable ? '#f472b6' : '#22d3ee',
          }}
        />
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a18] to-[#1a1a2e] text-white overflow-hidden relative">
      <CustomCursor />

      {/* Enhanced data flow animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-cyan-400/20 via-purple-500/25 to-pink-500/20"
            initial={{ x: i % 2 === 0 ? '-100%' : '100%', y: `${(i + 1) * 25}%` }}
            animate={{ x: i % 2 === 0 ? '100%' : '-100%' }}
            transition={{ duration: 20 + i * 3, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: "#00a2ff" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.8, direction: "none" },
            links: {
              enable: true, 
              distance: 120,
              color: { value: "#00a2ff" }, 
              opacity: 0.3,
              width: 1
            },
          },
          interactivity: {
            events: { onHover: { enable: false }, onClick: { enable: false } },
          },
        }}
        className="absolute inset-0"
      />

      {/* Enhanced Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-2xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center h-20">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <motion.div key={item.id} className="relative">
                  <Link 
                    href={item.path} 
                    className="text-cyan-300/90 hover:text-cyan-400 transition-colors font-medium text-sm relative py-2 px-1"
                  >
                    {item.name}
                    {activeNav === item.id && (
                      <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" layoutId="navIndicator" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-16 pt-28">
        {/* Enhanced Hero Header */}
        <motion.div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Professional Experience
          </motion.h1>
          
          <motion.p 
            className="text-cyan-300 font-mono text-xl md:text-2xl max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Technological Evolution Journey
          </motion.p>

          {/* Enhanced Subtitle */}
          <motion.div 
            className="max-w-2xl mx-auto text-cyan-100/80 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p>Explore my professional journey through cutting-edge AI projects, backend systems, and mobile applications that showcase my growth in the tech industry.</p>
          </motion.div>
        </motion.div>

        {/* Enhanced Filters with Better Design */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {filters.map(filter => (
            <motion.button 
              key={filter.id} 
              onClick={() => setActiveFilter(filter.id)} 
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group ${
                activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-2xl shadow-cyan-500/30' 
                  : 'bg-cyan-900/30 text-cyan-300 hover:bg-cyan-800/40 border border-cyan-500/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{filter.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Timeline Layout with Better Spacing */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 shadow-2xl" />
          
          {filteredInternships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative flex flex-col md:flex-row items-start mb-24 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full z-10 border-4 border-[#0a0a18] shadow-2xl flex items-center justify-center">
                <span className="text-white text-xl">{internship.icon}</span>
              </div>
              
              {/* Date Indicator */}
              <div className={`absolute top-2 md:top-4 ${index % 2 === 0 ? 'md:right-[55%] md:left-auto' : 'md:left-[55%]'} md:w-32 text-center z-20`}>
                <motion.div 
                  className="bg-cyan-900/60 backdrop-blur-sm px-3 py-1 rounded-full text-cyan-300 text-sm font-mono border border-cyan-500/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.3 + 0.5 }}
                >
                  {internship.period}
                </motion.div>
              </div>
              
              {/* Internship Card */}
              <div className={`ml-16 md:ml-0 md:w-[45%] mt-8 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div 
                  className={`bg-gradient-to-br ${internship.color} backdrop-blur-2xl rounded-3xl p-8 border-2 border-cyan-500/30 shadow-2xl overflow-hidden relative group hover:shadow-cyan-500/20 transition-all duration-500`}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Company Logo Badge */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl z-20">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl">{internship.icon}</span>
                    </div>
                  </div>

                  <div className="relative z-10">
                    {/* Header Section */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-cyan-300 mb-2">{internship.position}</h3>
                          <div className="text-xl font-semibold text-purple-300 mb-3">{internship.company}</div>
                          
                          <div className="flex items-center gap-3 text-sm mb-3">
                            <span className="text-cyan-200/80 bg-cyan-900/30 px-3 py-1 rounded-full flex items-center">
                              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                              {internship.location}
                            </span>
                          </div>
                          
                          <span className={`inline-block px-4 py-2 text-sm font-bold bg-gradient-to-r ${getLevelColor(internship.level)} rounded-full shadow-lg`}>
                            Level {getLevelText(internship.level)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-xl border border-cyan-500/20">
                      <p className="text-cyan-100/80 leading-relaxed">📌 {internship.description}</p>
                    </div>

                    {/* Media Section - SIMPLIFIED without video */}
                    <div className="mb-6 overflow-hidden rounded-2xl flex justify-center">
                      <InternshipMedia internship={internship} />
                    </div>

                    {/* Technologies Grid */}
                    <div className="mb-6">
                      <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <span className="mr-2">🛠️</span>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {internship.technologies.slice(0, 8).map((tech, techIndex) => (
                          <TechBadge key={tech} tech={tech} index={techIndex} />
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    {internship.achievements && (
                      <div className="mb-6">
                        <h4 className="text-cyan-400 font-semibold mb-3 flex items-center">
                          <span className="mr-2">🏆</span>
                          Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {internship.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center text-cyan-100/80 text-sm bg-cyan-900/20 px-3 py-2 rounded-lg">
                              <span className="text-green-400 mr-2">✓</span>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Expandable Details */}
                    <motion.button 
                      onClick={() => toggleDetails(internship.id)}
                      className="w-full py-4 bg-gradient-to-r from-cyan-600/80 to-purple-600/80 rounded-xl font-semibold text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 group relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {expandedItems[internship.id] ? (
                          <>
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            Hide Details
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            Explore Detailed Missions
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </motion.button>

                    <AnimatePresence>
                      {expandedItems[internship.id] && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-cyan-500/20 mt-6 space-y-6">
                            <div>
                              <h4 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                                <span className="mr-2">🎯</span>
                                Detailed Missions
                              </h4>
                              <div className="grid gap-3">
                                {internship.details?.map((detail, detailIndex) => (
                                  <motion.div 
                                    key={detailIndex} 
                                    className="flex items-start p-4 bg-gradient-to-r from-cyan-900/10 to-purple-900/10 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: detailIndex * 0.1 }}
                                    whileHover={{ x: 5 }}
                                  >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold text-sm">
                                      {detailIndex + 1}
                                    </div>
                                    <p className="text-cyan-100/80 leading-relaxed flex-1">{detail}</p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
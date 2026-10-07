'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import CustomCursor from '../../components/CustomCursor'

export default function FuturePredictions() {
  const [selectedSkill, setSelectedSkill] = useState('AI Research')
  const [activeCategory, setActiveCategory] = useState('all')

  // Particles initialization
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {
    // Optional: do something with the container
  }, [])

  // New navigation links with requested redirects
  const navItems = [
    { name: 'Neural Entrance', id: 'home', path: '/' },
    { name: 'Data Mind', id: 'about', path: '/DataMind' },
    { name: 'Project Gallery', id: 'projects', path: '/Projects' },
    { name: 'Professional Experience', id: 'stages', path: '/stages' },
    { name: 'Neural Skills', id: 'skills', path: '/competences' },
    { name: 'Future Predictions', id: 'future', path: '/FuturePredictions' },
    { name: 'Contact', id: 'contact', path: '/contact' }
  ]

  // Data for predictions - CORRECTED with proper timeline
  const careerPathData = [
    { 
      year: 2026, 
      role: 'Degree Completion', 
      probability: 100,
      status: 'diploma',
      description: 'Engineering Degree in Artificial Intelligence and Data Science'
    },
    { 
      year: 2027, 
      role: 'Junior Data Scientist', 
      probability: 95,
      status: 'future',
      description: 'First post-graduation position, corporate integration and practical application of skills'
    },
    { 
      year: 2028, 
      role: 'Data Scientist', 
      probability: 90,
      status: 'future',
      description: 'Skill consolidation, increased responsibilities on AI projects'
    },
    { 
      year: 2029, 
      role: 'Senior Data Scientist', 
      probability: 85,
      status: 'future',
      description: 'Technical leadership, junior mentoring, management of complex projects'
    },
    { 
      year: 2030, 
      role: 'AI Research Engineer', 
      probability: 80,
      status: 'future',
      description: 'Specialization in research, contributions to scientific publications'
    },
    { 
      year: 2032, 
      role: 'Lead AI Researcher', 
      probability: 75,
      status: 'future',
      description: 'Research team leadership, AI innovation strategy'
    }
  ]

  // Enriched data for skills
  const skillCategories = [
    { id: 'technical', name: 'Technical', color: 'from-cyan-500 to-blue-500' },
    { id: 'research', name: 'Research', color: 'from-purple-500 to-pink-500' },
    { id: 'soft', name: 'Soft Skills', color: 'from-green-500 to-emerald-500' },
    { id: 'emerging', name: 'Emerging', color: 'from-orange-500 to-red-500' }
  ]

  const skillAcquisitionData = [
    // Technical Skills
    { 
      skill: 'Machine Learning', 
      level: 80, 
      target: 95, 
      category: 'technical',
      timeline: '2024-2026',
      projects: 12,
      icon: '🤖'
    },
    { 
      skill: 'Deep Learning', 
      level: 75, 
      target: 90, 
      category: 'technical',
      timeline: '2024-2025',
      projects: 8,
      icon: '🧠'
    },
    { 
      skill: 'Advanced NLP', 
      level: 70, 
      target: 95, 
      category: 'technical',
      timeline: '2025-2027',
      projects: 6,
      icon: '💬'
    },
    { 
      skill: 'Computer Vision', 
      level: 65, 
      target: 90, 
      category: 'technical',
      timeline: '2025-2026',
      projects: 5,
      icon: '👁️'
    },
    { 
      skill: 'MLOps', 
      level: 60, 
      target: 90, 
      category: 'technical',
      timeline: '2026-2028',
      projects: 4,
      icon: '⚙️'
    },
    
    // Research Skills
    { 
      skill: 'Academic Research', 
      level: 70, 
      target: 95, 
      category: 'research',
      timeline: '2026-2030',
      projects: 3,
      icon: '📚'
    },
    { 
      skill: 'Scientific Publications', 
      level: 50, 
      target: 85, 
      category: 'research',
      timeline: '2027-2032',
      projects: 0,
      icon: '📄'
    },
    { 
      skill: 'AI Innovation', 
      level: 65, 
      target: 92, 
      category: 'research',
      timeline: '2028-2032',
      projects: 2,
      icon: '💡'
    },
    
    // Soft Skills
    { 
      skill: 'Technical Leadership', 
      level: 75, 
      target: 90, 
      category: 'soft',
      timeline: '2026-2028',
      projects: 4,
      icon: '👨‍💼'
    },
    { 
      skill: 'Project Management', 
      level: 70, 
      target: 88, 
      category: 'soft',
      timeline: '2025-2027',
      projects: 6,
      icon: '📊'
    }
  ]

  const impactData = [
    { area: 'AI in Healthcare', impact: 90, complexity: 80, timeline: 2026 },
    { area: 'Climate Science', impact: 95, complexity: 90, timeline: 2028 },
    { area: 'Educational Technology', impact: 85, complexity: 70, timeline: 2025 },
    { area: 'Financial Inclusion', impact: 80, complexity: 75, timeline: 2027 }
  ]

  // Data for the data universe
  const dataUniverse = [
    { id: 1, name: 'AI Research', x: 20, y: 30, size: 40, connections: [2, 3, 4] },
    { id: 2, name: 'Machine Learning', x: 60, y: 20, size: 60, connections: [1, 3, 5] },
    { id: 3, name: 'Data Engineering', x: 40, y: 60, size: 50, connections: [1, 2, 4, 6] },
    { id: 4, name: 'NLP', x: 80, y: 40, size: 45, connections: [1, 3, 5] },
    { id: 5, name: 'Computer Vision', x: 70, y: 70, size: 35, connections: [2, 4, 6] },
    { id: 6, name: 'MLOps', x: 30, y: 80, size: 30, connections: [3, 5] }
  ]

  // Filter skills by category
  const filteredSkills = activeCategory === 'all' 
    ? skillAcquisitionData 
    : skillAcquisitionData.filter(skill => skill.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a18] to-[#1a1a2e] text-white overflow-hidden">
      <CustomCursor />

      {/* Data flow animation across screen */}
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

      {/* Particles background - Futuristic neural network */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#00a2ff", "#0066ff", "#a855f7", "#00f2fe"],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.7,
            },
            size: {
              value: {
                min: 1,
                max: 5,
              },
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: {
                value: "#00a2ff",
              },
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.8,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Enhanced top navigation bar with premium design */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-2xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center h-20">
            {/* Enhanced navigation links - Centered */}
            <div className="flex space-x-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className="text-cyan-300/90 hover:text-cyan-400 transition-colors font-medium text-sm relative py-2 px-1"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10 container mx-auto px-4 py-16 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header with futuristic title */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Future Predictions
            </motion.h1>
            <motion.p 
              className="text-cyan-300 font-mono text-xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Algorithmic projection of my professional journey
            </motion.p>
            {/* Longer bar */}
            <motion.div 
              className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '400px' }}
              transition={{ delay: 1.4, duration: 0.8 }}
            />
          </motion.div>

          {/* Control room with prediction screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Screen 1: Career Path Prediction - CORRECTED VERSION */}
            <motion.div 
              className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                <span className="mr-3">📈</span> 
                Career Forecast 2026-2032
              </h2>
              
              {/* Degree indicator */}
              <div className="mb-6 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                <div className="flex items-center justify-center">
                  <span className="text-green-400 mr-2">🎓</span>
                  <span className="text-green-300 font-mono text-sm">Engineering Degree completion in 2026</span>
                </div>
              </div>
              
              {/* Enhanced vertical timeline */}
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>
                
                {/* Timeline points */}
                <div className="space-y-8 ml-4">
                  {careerPathData.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="relative flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 + index * 0.2 }}
                    >
                      {/* Point on timeline */}
                      <div className={`absolute -left-7 w-6 h-6 rounded-full border-4 z-10 ${
                        item.status === 'diploma' 
                          ? 'bg-green-500 border-green-300 shadow-lg shadow-green-500/50 animate-pulse' 
                          : 'bg-cyan-500 border-cyan-300'
                      }`}></div>
                      
                      {/* Prediction card */}
                      <div className={`ml-8 flex-1 p-4 rounded-xl backdrop-blur-sm ${
                        item.status === 'diploma'
                          ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30'
                          : 'bg-black/20 border border-cyan-500/20'
                      }`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-cyan-300 text-lg">{item.role}</h3>
                            <div className="flex items-center mt-1">
                              <span className={`font-mono text-sm px-2 py-1 rounded ${
                                item.status === 'diploma'
                                  ? 'text-green-400 bg-green-500/10'
                                  : 'text-cyan-400 bg-cyan-500/10'
                              }`}>
                                {item.year}
                                {item.status === 'diploma' && (
                                  <span className="ml-2 text-green-400">★ Degree</span>
                                )}
                              </span>
                            </div>
                          </div>
                          
                          {/* Probability indicator */}
                          <div className="text-right">
                            <div className="text-2xl font-bold text-cyan-400">{item.probability}%</div>
                            <div className="text-cyan-300/70 text-xs">probability</div>
                          </div>
                        </div>
                        
                        {/* Probability progress bar */}
                        <div className="mt-3">
                          <div className="flex justify-between text-xs text-cyan-300/70 mb-1">
                            <span>Prediction confidence</span>
                            <span>{item.probability}%</span>
                          </div>
                          <div className="w-full bg-cyan-900/30 rounded-full h-2">
                            <motion.div 
                              className={`h-2 rounded-full ${
                                item.status === 'diploma'
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                                  : 'bg-gradient-to-r from-cyan-500 to-purple-500'
                              }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${item.probability}%` }}
                              transition={{ duration: 1.5, delay: 2.0 + index * 0.3 }}
                            />
                          </div>
                        </div>
                        
                        {/* Contextual description */}
                        <div className="mt-3 text-cyan-200/80 text-sm">
                          {item.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Legend and metrics */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-cyan-500/10 rounded-lg">
                  <div className="text-cyan-400 font-bold">6 years</div>
                  <div className="text-cyan-300/70">Horizon</div>
                </div>
                <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                  <div className="text-purple-400 font-bold">±10%</div>
                  <div className="text-purple-300/70">Margin of error</div>
                </div>
                <div className="text-center p-3 bg-green-500/10 rounded-lg">
                  <div className="text-green-400 font-bold">2026</div>
                  <div className="text-green-300/70">Key point</div>
                </div>
              </div>
            </motion.div>

            {/* Screen 2: Skill Acquisition Forecast - SIMPLIFIED VERSION WITHOUT SCROLL */}
            <motion.div 
              className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                <span className="mr-3">🚀</span> 
                Skill Acquisition Forecast
              </h2>
              
              {/* Category filters */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      activeCategory === 'all'
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20'
                    }`}
                  >
                    All
                  </button>
                  {skillCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        activeCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                          : 'bg-gray-500/10 text-gray-300 hover:bg-gray-500/20'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Skills grid - WITHOUT SCROLL, ALIGNED WITH TIMELINE */}
              <div className="grid grid-cols-1 gap-4">
                {filteredSkills.slice(0, 6).map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 + index * 0.1 }}
                    className="bg-black/20 rounded-lg p-4 border border-cyan-500/10 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{skill.icon}</span>
                        <div>
                          <h3 className="font-bold text-cyan-300 text-sm">{skill.skill}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-cyan-400/70 text-xs bg-cyan-500/10 px-2 py-1 rounded">
                              {skill.timeline}
                            </span>
                            <span className="text-green-400/70 text-xs bg-green-500/10 px-2 py-1 rounded">
                              {skill.projects} projects
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold text-cyan-400">{skill.level}%</div>
                        <div className="text-cyan-300/70 text-xs">→ {skill.target}%</div>
                      </div>
                    </div>
                    
                    {/* Single simplified progress bar */}
                    <div className="relative">
                      <div className="flex justify-between text-xs text-cyan-300/70 mb-1">
                        <span>Progress</span>
                        <span>{skill.level}% / {skill.target}%</span>
                      </div>
                      <div className="w-full bg-gray-800/40 rounded-full h-2.5 backdrop-blur-sm overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.8, delay: 2.2 + index * 0.1, ease: "easeOut" }}
                          className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg"
                        />
                      </div>
                      {/* Goal indicator */}
                      <div 
                        className="absolute top-0 w-0.5 h-3 -mt-0.5 bg-green-400 rounded-full shadow-lg"
                        style={{ left: `${skill.target}%` }}
                      />
                    </div>
                    
                    {/* Level indicator */}
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-cyan-300/50">
                        {skill.level < 40 ? 'Beginner' : 
                         skill.level < 70 ? 'Intermediate' : 
                         skill.level < 90 ? 'Advanced' : 'Expert'}
                      </span>
                      <span className="text-xs text-green-400/70">
                        Goal: {skill.target}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Additional skills indicator */}
              {filteredSkills.length > 6 && (
                <div className="mt-4 text-center">
                  <span className="text-cyan-400/70 text-sm">
                    +{filteredSkills.length - 6} additional skills...
                  </span>
                </div>
              )}
              
              {/* Summary statistics */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                <div className="text-center p-2 bg-cyan-500/10 rounded">
                  <div className="text-cyan-400 font-bold">
                    {skillAcquisitionData.filter(s => s.level >= 70).length}
                  </div>
                  <div className="text-cyan-300/70">Advanced</div>
                </div>
                <div className="text-center p-2 bg-purple-500/10 rounded">
                  <div className="text-purple-400 font-bold">
                    {skillAcquisitionData.reduce((sum, skill) => sum + skill.projects, 0)}
                  </div>
                  <div className="text-purple-300/70">Projects</div>
                </div>
                <div className="text-center p-2 bg-green-500/10 rounded">
                  <div className="text-green-400 font-bold">
                    {Math.round(skillAcquisitionData.reduce((sum, skill) => sum + skill.level, 0) / skillAcquisitionData.length)}%
                  </div>
                  <div className="text-green-300/70">Average</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Screen 3: Impact Estimation */}
          <motion.div 
            className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <span className="mr-3">🌍</span> 
              Impact Estimation
            </h2>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 lg:col-span-1">
                {/* Bubble chart */}
                <div className="relative h-64">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {impactData.map((item, i) => {
                      const impactScale = item.impact / 100;
                      const complexityScale = item.complexity / 100;
                      const x = 20 + complexityScale * 60;
                      const y = 80 - impactScale * 60;
                      
                      return (
                        <g key={i} transform={`translate(${x}, ${y})`}>
                          <circle
                            r={5 + impactScale * 10}
                            fill="rgba(79, 172, 254, 0.6)"
                            stroke="#4facfe"
                            strokeWidth="0.5"
                            className="cursor-pointer hover:fill-cyan-300 transition-colors"
                          />
                          <text
                            x="0"
                            y={-5 - (5 + impactScale * 10)}
                            textAnchor="middle"
                            fill="#4facfe"
                            fontSize="4"
                            className="font-mono"
                          >
                            {item.area}
                          </text>
                          <text
                            x="0"
                            y="5"
                            textAnchor="middle"
                            fill="#fff"
                            fontSize="3"
                            className="font-mono"
                          >
                            {item.timeline}
                          </text>
                        </g>
                      );
                    })}
                    
                    {/* Axes */}
                    <line x1="20" y1="20" x2="20" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                    <line x1="20" y1="80" x2="90" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                    
                    <text x="10" y="50" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="3" transform="rotate(-90 10 50)">Impact</text>
                    <text x="55" y="90" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="3">Complexity</text>
                  </svg>
                </div>
              </div>
              
              <div className="col-span-2 lg:col-span-1 flex flex-col justify-center">
                <div className="space-y-4">
                  {impactData.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-32 font-mono text-cyan-300">{item.area}</div>
                      <div className="flex-1 h-3 bg-cyan-900/50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.impact}%` }}
                          transition={{ duration: 1, delay: 2.2 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full"
                        />
                      </div>
                      <div className="w-12 text-right font-mono text-cyan-300">{item.impact}%</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-cyan-100/80 text-sm">
                  <p>Estimated potential impact in different fields based on skill alignment and societal needs.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Data Universe */}
          <motion.div 
            className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/40 shadow-2xl shadow-purple-500/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
          >
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center justify-center">
              <span className="mr-3">🌌</span> 
              The Data Universe
            </h2>
            
            <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-[#0a0a18] to-[#1a1a2e]">
              {/* Background stars */}
              <div className="absolute inset-0">
                {[...Array(100)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${Math.random() * 3}px`,
                      height: `${Math.random() * 3}px`,
                      opacity: Math.random() * 0.7 + 0.3,
                      animation: `twinkle ${Math.random() * 5 + 3}s infinite`
                    }}
                  />
                ))}
              </div>
              
              {/* Nebulae */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-2/3 left-1/3 w-1/3 h-1/3 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-2/3 w-1/4 h-1/4 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>
              
              {/* Planets and skills */}
              <div className="absolute inset-0">
                {dataUniverse.map((item) => (
                  <motion.div
                    key={item.id}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                      width: `${item.size / 2}px`,
                      height: `${item.size / 2}px`,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: item.id * 0.2 }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setSelectedSkill(item.name)}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/30"></div>
                    <div className="absolute -inset-2 rounded-full border border-cyan-400/30 animate-pulse"></div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-300 text-xs font-mono whitespace-nowrap">
                      {item.name}
                    </div>
                  </motion.div>
                ))}
                
                {/* Connections between planets */}
                {dataUniverse.map((item) =>
                  item.connections.map((connectionId) => {
                    const target = dataUniverse.find(d => d.id === connectionId);
                    if (!target) return null;
                    
                    return (
                      <svg
                        key={`${item.id}-${connectionId}`}
                        className="absolute inset-0 pointer-events-none"
                      >
                        <line
                          x1={`${item.x}%`}
                          y1={`${item.y}%`}
                          x2={`${target.x}%`}
                          y2={`${target.y}%`}
                          stroke="rgba(79, 172, 254, 0.3)"
                          strokeWidth="1"
                        />
                      </svg>
                    );
                  })
                )}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-cyan-300 font-mono">Selected: {selectedSkill}</p>
              <p className="text-cyan-100/80 text-sm mt-2">Navigate my data universe to explore connections between skills and specializations.</p>
            </div>
          </motion.div>

          {/* Conclusion section */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Algorithmic Vision of the Future</h2>
            <p className="text-cyan-100/80 text-lg max-w-3xl mx-auto mb-8">
              These projections are generated by algorithmic analysis of current skill trajectories,
              industry trends, and personal aspirations. While the future is inherently uncertain,
              this data-driven approach provides a strategic roadmap for professional development
              and impact maximization.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated footer */}
      <motion.footer 
        className="text-center py-12 text-cyan-500/50 text-sm relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
      >
        <p>Designed with ❤️ and 🤖 • © 2024 Mberik Oumayma</p>
      </motion.footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          cursor: none;
        }
        
        h1, h2, h3, .font-mono {
          font-family: 'Space Mono', monospace;
        }
        
        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
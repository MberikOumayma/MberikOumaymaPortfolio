'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import CustomCursor from '../../components/CustomCursor'

export default function DataMind() {
  const [activeNav, setActiveNav] = useState('')
  const [displayedText, setDisplayedText] = useState('')
  const [showContent, setShowContent] = useState(false)

  // Function to download CV
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'Mberik_Oumayma_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Mysterious text animation
  useEffect(() => {
    const mysteriousText = "Compiling Oumayma's Intelligent Portfolio..."
    let index = 0
    const interval = setInterval(() => {
      setDisplayedText(mysteriousText.slice(0, index + 1))
      index++
      if (index === mysteriousText.length) {
        clearInterval(interval)
        setTimeout(() => {
          setShowContent(true)
        }, 1000)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  // Particles initialization
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {
    // Optional: do something with the container
  }, [])

  // Languages representation
  const languages = [
    { name: 'Arabic', level: 100, proficiency: 'Native language', color: 'from-cyan-400 to-cyan-600' },
    { name: 'French', level: 90, proficiency: 'Very advanced level', color: 'from-purple-400 to-purple-600' },
    { name: 'English', level: 80, proficiency: 'Advanced level', color: 'from-blue-400 to-blue-600' },
    { name: 'German', level: 30, proficiency: 'Beginner level', color: 'from-gray-400 to-gray-600' }
  ]

  // Navigation links with unique IDs
  const navItems = [
    { name: 'Neural Entrance', id: 'home', path: '/' },
    { name: 'Data Mind', id: 'about', path: '/DataMind' },
    { name: 'Project Gallery', id: 'projects', path: '/Projects' },
    { name: 'Professional Experience', id: 'experience', path: '/stages' },
    { name: 'Neural Skills', id: 'skills', path: '/competences' },
    { name: 'Future Predictions', id: 'predictions', path: '/predictions' },
    { name: 'Contact', id: 'contact', path: '/contact' }
  ]

  // Keywords for hover effect
  const keywords = ['AI', 'ML', 'Python', 'Data Science', 'TensorFlow', 'Deep Learning']

  // Academic background
  const education = [
    {
      title: 'Engineering Degree – Computer Engineering – Data Science & AI',
      institution: 'Private Higher School of Engineering and Technologies (ESPRIT)',
      period: '2021 - 2026',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Tunisian Baccalaureate Mathematics Section',
      institution: 'Zarzis High School, Tunisia',
      period: '2021',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a18] to-[#1a1a2e] text-white overflow-hidden">
      {/* Loading animation */}
      {!showContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a18]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-20 bg-black/20 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 font-mono"
          >
            <div className="text-cyan-400 text-lg mb-4">
              <span className="text-green-400">$</span> system_init --mode=data_interface
            </div>
            <div className="text-cyan-300">
              {displayedText}
              <span className="text-cyan-400 animate-pulse">▋</span>
            </div>
          </motion.div>
        </div>
      )}

      <CustomCursor />

      {/* Data flow animation across the screen */}
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
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Particles background - Original neural network */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent'
            }
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ['#00a2ff', '#0066ff', '#a855f7']
            },
            shape: {
              type: 'circle'
            },
            opacity: {
              value: 0.7
            },
            size: {
              value: {
                min: 1,
                max: 3
              }
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              outModes: {
                default: 'out'
              }
            },
            links: {
              enable: true,
              distance: 150,
              color: {
                value: '#00a2ff'
              },
              opacity: 0.4,
              width: 1
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'grab'
              },
              onClick: {
                enable: true,
                mode: 'push'
              }
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.8
                }
              },
              push: {
                quantity: 4
              }
            }
          },
          detectRetina: true
        }}
      />

      {/* Main content */}
      {showContent && (
        <>
          {/* Top navigation bar */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-2xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
          >
            <div className="container mx-auto px-6">
              <div className="flex justify-center items-center h-20">
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
                        className={`text-cyan-300/90 hover:text-cyan-400 transition-colors font-medium text-sm relative py-2 px-1 ${
                          activeNav === item.id ? 'text-cyan-400' : ''
                        }`}
                        onClick={() => setActiveNav(item.id)}
                      >
                        {item.name}
                        {activeNav === item.id && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                            layoutId="navIndicator"
                          />
                        )}
                        {/* Underline "Data Mind" */}
                        {item.name === 'Data Mind' && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                            layoutId="dataMindIndicator"
                          />
                        )}
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
              className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Left column - Photo and personal information */}
              <div className="lg:col-span-1 space-y-8">
                {/* Photo with hologram effect */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="relative w-64 h-64 mx-auto">
                    {/* Pulsing hologram effect */}
                    <motion.div
                      className="absolute -inset-6 rounded-full border-4 border-cyan-400/30"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                    <motion.div
                      className="absolute -inset-4 rounded-full border-4 border-purple-400/20"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5
                      }}
                    />

                    {/* Background effects */}
                    <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/10 via-purple-600/10 to-pink-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-1000"></div>
                    <div className="absolute -inset-3 border-2 border-cyan-400/20 rounded-full"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/15 to-purple-600/15 backdrop-blur-md"></div>

                    {/* Concentric rings */}
                    <motion.div
                      className="absolute -inset-4 border border-cyan-400/10 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                      className="absolute -inset-6 border border-purple-400/10 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Photo */}
                    <div className="relative z-10 w-full h-full overflow-hidden rounded-full">
                      <Image
                        src="/photo.jpeg"
                        alt="Mberik Oumayma"
                        width={256}
                        height={256}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Personal information */}
                <motion.div
                  className="bg-gradient-to-b from-cyan-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-xl font-bold text-cyan-400 mb-6 flex items-center">
                    <span className="mr-3 text-cyan-400">🔍</span>
                    Informations
                  </h2>

                  <div className="space-y-5 text-cyan-100/90">
                    {[
                      { icon: '📧', text: 'mberikoumaima74@gmail.com' },
                      { icon: '📱', text: '+216 24520160' },
                      { icon: '📍', text: 'Tunis, Tunisia' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <span className="text-cyan-400 mr-3 mt-0.5 text-lg">{item.icon}</span>
                        <span className="text-cyan-100/90">{item.text}</span>
                      </motion.div>
                    ))}

                    {/* LinkedIn and GitHub side by side */}
                    <motion.div
                      className="flex space-x-4 pt-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/oumaymamberik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-100/90 hover:text-cyan-400 transition-colors duration-300 group-hover:translate-x-1 bg-cyan-900/30 px-3 py-2 rounded-lg"
                      >
                        <span className="text-cyan-400 mr-2 text-lg">🔗</span>
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/MberikOumayma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-100/90 hover:text-cyan-400 transition-colors duration-300 group-hover:translate-x-1 bg-cyan-900/30 px-3 py-2 rounded-lg"
                      >
                        <span className="text-cyan-400 mr-2 text-lg">⚡</span>
                        GitHub
                      </a>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Languages */}
                <motion.div
                  className="bg-gradient-to-b from-cyan-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-xl font-bold text-cyan-400 mb-6 flex items-center">
                    <span className="mr-3">🌐</span>
                    Languages Database
                  </h2>
                  <div className="space-y-6">
                    {languages.map((language, index) => (
                      <motion.div
                        key={index}
                        className="relative group"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.2 }}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-cyan-300 font-mono text-sm tracking-wide">{language.name}</span>
                          <span className="text-cyan-100/70 text-xs bg-cyan-900/30 px-2 py-1 rounded-full">{language.proficiency}</span>
                        </div>
                        <div className="w-full bg-gray-800/40 rounded-full h-2.5 backdrop-blur-sm overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${language.level}%` }}
                            transition={{ duration: 1.8, delay: 1.0 + index * 0.3, ease: 'easeOut' }}
                            className={`h-2.5 rounded-full bg-gradient-to-r ${language.color} shadow-lg group-hover:brightness-125 transition-all`}
                          />
                        </div>
                        <div className="text-right text-xs text-cyan-400/70 mt-2 font-mono">
                          {language.level}% proficiency
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right column - Main content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Name and title */}
                <motion.div
                  className="text-center lg:text-left"
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
                    Mberik Oumayma
                  </motion.h1>
                  <motion.p
                    className="text-cyan-300 font-mono text-xl mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    Data Scientist & AI Engineer
                  </motion.p>
                  <motion.div
                    className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto lg:mx-0 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '340px' }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  />
                </motion.div>

                {/* Biography */}
                <motion.div
                  className="relative bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  {/* Scrolling code background effect */}
                  <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-cyan-500/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-cyan-400/30 font-mono text-xs whitespace-nowrap"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                        animate={{
                          y: [0, -100],
                          opacity: [0, 0.5, 0]
                        }}
                        transition={{
                          duration: 15 + Math.random() * 20,
                          repeat: Infinity,
                          delay: Math.random() * 5
                        }}
                      >
                        {`${Math.random().toString(36).substring(2)} ${Math.random() > 0.5 ? '=' : '=>'} ${Math.random().toString(36).substring(2)}`}
                      </motion.div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center relative z-10">
                    <span className="mr-3">📈</span>
                    Data Scientist Profile
                  </h2>
                  <div className="text-cyan-100/90 leading-relaxed space-y-5 text-lg relative z-10">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                    >
                      Newly graduated Computer Engineer from ESPRIT in Tunisia, specialized in Data Science and AI,
                      with strong experience in developing machine learning, deep learning models, and real-time systems.
                      Expert in computer vision, LLMs, NLP, and RAG architectures, with comprehensive expertise across
                      the full AI project lifecycle—from design to the deployment of high-performance and innovative AI solutions.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      Through rigorous training and hands-on projects using Python, Scikit-learn, TensorFlow,
                      Power BI, MySQL, Flask, and Docker, I have designed and implemented machine learning and deep learning
                      models applied to real-world cases.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.0 }}
                    >
                      Responsible, motivated, and with strong communication skills, I am now open to full-time
                      opportunities as a Data Scientist / AI Engineer, to apply my data and AI skills to innovative
                      technological projects with concrete impact.
                    </motion.p>
                  </div>

                  {/* Keywords that appear on hover */}
                  <motion.div
                    className="flex flex-wrap gap-3 mt-6 relative z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {keywords.map((keyword, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: 'rgba(6, 182, 212, 0.3)',
                          transition: { duration: 0.2 }
                        }}
                        transition={{
                          delay: index * 0.1,
                          type: 'spring',
                          stiffness: 200
                        }}
                      >
                        {keyword}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Education timeline */}
                <motion.div
                  className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <h2 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center">
                    <span className="mr-3">🎓</span>
                    Academic Background
                  </h2>
                  <div className="space-y-8 relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>

                    {education.map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative pl-16"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 + index * 0.3 }}
                      >
                        <div className={`absolute left-8 top-4 w-6 h-6 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center -translate-x-1/2 shadow-lg`}>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <h3 className="text-cyan-300 font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-cyan-100/80 mb-1">{item.institution}</p>
                        <p className="text-cyan-100/60 text-sm">{item.period}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Call to action */}
                <div className="w-full flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 }}
                    className="text-center"
                  >
                    <motion.button
                      className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 group relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleDownloadCV}
                    >
                      <span className="relative z-10">Download my CV</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Animated footer */}
          <motion.footer
            className="text-center py-12 text-cyan-500/50 text-sm relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            <p>Designed with ❤️ and 🤖 • © 2026 Mberik Oumayma</p>
          </motion.footer>
        </>
      )}

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
      `}</style>
    </div>
  )
}

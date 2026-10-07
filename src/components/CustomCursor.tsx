'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed z-40 pointer-events-none hidden md:block"
      style={{
        left: '0px',
        top: '0px',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-6 h-6 relative">
        <div className="absolute inset-0 bg-cyan-400 rounded-full opacity-70 animate-ping" />
        <div className="absolute inset-0 bg-cyan-500 rounded-full" />
        <div className="absolute -inset-2 border-2 border-cyan-400 rounded-full opacity-40" />
        <div className="absolute -inset-1 border border-cyan-300 rounded-full opacity-30" />
      </div>
      <div className="absolute -inset-4 bg-cyan-400 rounded-full blur-md opacity-20" />
    </div>
  )
}

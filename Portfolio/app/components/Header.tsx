'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`sticky top-0 z-50 bg-background/80 backdrop-blur-sm transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Yoel Nasi Kazado</Link>
        <ul className="flex space-x-4">
          <li><button onClick={() => scrollTo('education')} className="hover:underline">Education</button></li>
          <li><button onClick={() => scrollTo('experience')} className="hover:underline">Experience</button></li>
          <li><button onClick={() => scrollTo('projects')} className="hover:underline">Projects</button></li>
          <li><button onClick={() => scrollTo('skills')} className="hover:underline">Skills</button></li>
          <li><button onClick={() => scrollTo('contact')} className="hover:underline">Contact</button></li>
        </ul>
      </nav>
    </header>
  )
}


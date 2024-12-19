import dynamic from 'next/dynamic'
import Header from './components/Header'

const Hero = dynamic(() => import('./components/Hero'), { ssr: false })
const Experience = dynamic(() => import('./components/Experience'), { ssr: false })
const Projects = dynamic(() => import('./components/Projects'), { ssr: false })
const Skills = dynamic(() => import('./components/Skills'), { ssr: false })
const Education = dynamic(() => import('./components/Education'), { ssr: false })
const Contact = dynamic(() => import('./components/Contact'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}


import Header from "./components/Header"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Awards from "./components/Awards"
import LeadershipInvolvement from "./components/LeadershipInvolvement"
import Contact from "./components/Contact"
import ChatBot from "./components/ChatBot"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Education />
        <Experience />
        <LeadershipInvolvement />
        <Projects />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <ChatBot />
    </div>
  )
}

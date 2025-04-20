import { Mail, MapPin, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <Mail className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-300" />
            <a href="mailto:yoelnk1+web@gmail.com" className="text-blue-500 hover:text-blue-600">
              yoelnk1+web@gmail.com
            </a>
          </div>
          <div className="flex items-center mb-4">
            <Linkedin className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-300" />
            <a
              href="https://www.linkedin.com/in/yoel-nasi-kazado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center">
            <MapPin className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-300" />
            <span className="text-gray-600 dark:text-gray-300">Madison, WI, 53703</span>
          </div>
        </div>
      </div>
    </section>
  )
}

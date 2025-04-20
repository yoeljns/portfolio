import { Mail, MapPin, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Contact Me</h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="text-center mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Feel free to reach out to me for any inquiries, opportunities, or just to say hello!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3 text-primary" />
              <a href="mailto:yoelnk1+web@gmail.com" className="text-blue-500 hover:text-blue-600 text-lg">
                yoelnk1+web@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center">
              <Linkedin className="w-6 h-6 mr-3 text-primary" />
              <a
                href="https://www.linkedin.com/in/yoel-nasi-kazado"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-lg"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-3 text-primary" />
              <span className="text-gray-600 dark:text-gray-300 text-lg">Madison, WI, 53703</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

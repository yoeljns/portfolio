import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <Mail className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-300" />
            <a href="mailto:nasikazado@wisc.edu" className="text-blue-500 hover:text-blue-600">nasikazado@wisc.edu</a>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-300" />
            <a href="tel:+16089019166" className="text-blue-500 hover:text-blue-600">+1 (608) 901-9166</a>
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


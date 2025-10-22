"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
              like to collaborate or just say hello!
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@example.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Download, FileText } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Download my resume to learn more about my education, skills, and experience.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <FileText size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Binks Resume</h3>
                  <p className="text-foreground/60">Full Stack Developer & AI/ML Enthusiast</p>
                </div>
              </div>
              <p className="text-foreground/70 mb-6">
                My comprehensive resume includes my education, technical skills, projects, and achievements. Download it
                to get a complete overview of my professional profile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
                >
                  <Download className="mr-2" size={20} />
                  Download PDF
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary/50 text-foreground rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
                >
                  Request More Info
                </a>
              </div>
            </div>

            {/* Resume Preview */}
            <div className="flex-1 w-full sm:w-auto">
              <div className="bg-background border-2 border-border rounded-lg overflow-hidden aspect-[8.5/11]">
                <iframe
                  src="/resume.pdf#view=fitH"
                  className="w-full h-full"
                  title="Resume Preview"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

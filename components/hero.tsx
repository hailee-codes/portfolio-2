"use client"

import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-background to-cyan-900/40 animate-gradient-shift"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 animate-slide-in-up">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Binks
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl text-foreground/70 mb-2 animate-slide-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Full Stack Developer | AI/ML Enthusiast
        </p>

        <p
          className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto animate-slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Building intelligent web applications and exploring machine learning. Passionate about creating beautiful,
          performant experiences with modern technologies.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
          >
            View My Work
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary/50 text-foreground rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#"
            className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <Github size={24} className="text-foreground" />
          </a>
          <a
            href="#"
            className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <Linkedin size={24} className="text-foreground" />
          </a>
          <a
            href="#"
            className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <Mail size={24} className="text-foreground" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

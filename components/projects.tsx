"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: "web" | "ai-ml"
  github: string
  live: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Todo App with React",
    description:
      "A simple yet functional todo application built with React. Features include adding, deleting, and marking tasks as complete with local storage persistence.",
    image: "/todo-app-interface.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    category: "web",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Real-time weather application that fetches data from a weather API. Shows current weather, forecasts, and allows users to search for different cities.",
    image: "/weather-app-dashboard.png",
    tags: ["React", "API", "Axios"],
    category: "web",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills. Built with Next.js and Tailwind CSS with smooth animations and interactive elements.",
    image: "/portfolio-website-design.png",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
    category: "web",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Iris Flower Classification",
    description:
      "Machine learning project using scikit-learn to classify iris flowers. Implemented multiple algorithms and compared their accuracy using cross-validation.",
    image: "/machine-learning-iris-classification.jpg",
    tags: ["Python", "Scikit-learn", "ML"],
    category: "ai-ml",
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Sentiment Analysis Model",
    description:
      "NLP project that analyzes sentiment from text data. Built using TensorFlow and trained on a large dataset to classify positive, negative, and neutral sentiments.",
    image: "/sentiment-analysis-nlp.jpg",
    tags: ["Python", "TensorFlow", "NLP"],
    category: "ai-ml",
    github: "#",
    live: "#",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "ai-ml">("all")

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Here are some projects I've built while learning web development and exploring AI/ML. Each project helped me
            grow my skills and understand different technologies better.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border hover:border-primary/50"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter("web")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeFilter === "web"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border hover:border-primary/50"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveFilter("ai-ml")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeFilter === "ai-ml"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border hover:border-primary/50"
            }`}
          >
            AI/ML
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  /* Added lazy loading for images */
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-card hover:bg-primary/10 text-foreground rounded-lg transition-all duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

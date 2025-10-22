"use client"

import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Dev
            </h3>
            <p className="text-foreground/60 text-sm">
              Building beautiful digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {["About", "Projects", "Tech Stack", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-background hover:bg-primary/10 rounded-lg transition-colors duration-300"
                >
                  <social.icon size={20} className="text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

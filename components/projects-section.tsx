"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "SimpliDoc AI",
    description: "AI-Powered Document Management & Chat Platform. Transform your documents into intelligent conversations with AI using RAG technology.",
    image: "/Assets/Screenshot_1753022232.png",
    tags: ["React Native", "FastAPI", "Supabase", "AI/ML", "RAG"],
    slug: "simplidoc-ai",
    featured: true,
  },
  // Add more projects here as needed
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects I&apos;ve built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Server,
  Database,
  Brain,
  Code,
  Cloud,
} from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    icon: Smartphone,
    technologies: [
      { name: "React Native", version: "0.79.5", color: "bg-blue-500" },
      { name: "Expo", version: "53.0.20", color: "bg-black dark:bg-white" },
      { name: "TypeScript", version: "Latest", color: "bg-blue-600" },
      { name: "NativeWind", version: "Latest", color: "bg-cyan-500" },
    ],
    description: "Modern mobile development with Expo Router, TanStack Query, and React Native Reanimated.",
  },
  {
    category: "Backend",
    icon: Server,
    technologies: [
      { name: "FastAPI", version: "0.115.13", color: "bg-green-500" },
      { name: "Python", version: "3.11+", color: "bg-yellow-500" },
      { name: "Redis + RQ", version: "Latest", color: "bg-red-500" },
      { name: "Docker", version: "Latest", color: "bg-blue-400" },
    ],
    description: "High-performance API with background job processing using Redis Queue.",
  },
  {
    category: "Database",
    icon: Database,
    technologies: [
      { name: "Supabase", version: "2.16.0", color: "bg-purple-500" },
      { name: "PostgreSQL", version: "Latest", color: "bg-blue-700" },
      { name: "pgvector", version: "Latest", color: "bg-indigo-500" },
      { name: "Storage", version: "S3", color: "bg-orange-500" },
    ],
    description: "Scalable PostgreSQL with vector search capabilities and secure file storage.",
  },
  {
    category: "AI & ML",
    icon: Brain,
    technologies: [
      { name: "Google Gemini", version: "API", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
      { name: "RAG Pipeline", version: "Custom", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
      { name: "Embeddings", version: "1536-dim", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
      { name: "Vector Search", version: "pgvector", color: "bg-gradient-to-r from-orange-500 to-red-500" },
    ],
    description: "Retrieval-Augmented Generation with semantic search and context-aware responses.",
  },
];

export function TechStackSection() {
  return (
    <section id="tech" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built with modern, scalable technologies for optimal performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <stack.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stack.category}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {stack.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {stack.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-lg ${tech.color} text-white text-sm font-semibold shadow-md`}
                  >
                    {tech.name} {tech.version && <span className="opacity-80">v{tech.version}</span>}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


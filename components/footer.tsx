"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 dark:bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Alfred's Portfolio</h3>
            <p className="text-gray-400">
              Full Stack Developer & AI Enthusiast. Building modern, scalable applications with cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Tech Stack</h4>
            <ul className="space-y-2 text-gray-400">
              <li>React Native + Expo</li>
              <li>FastAPI + Python</li>
              <li>Supabase + PostgreSQL</li>
              <li>Google Gemini AI</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#tech" className="text-gray-400 hover:text-white transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 SimpliDoc AI. Built with modern technologies.
          </p>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-400" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="External Link"
            >
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}


"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Server, Database, Brain } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            System Architecture
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Scalable architecture designed for performance and reliability
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
            {/* Mobile App - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center md:justify-end relative z-10"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl w-full max-w-xs">
                <Smartphone className="w-10 h-10 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-bold text-white mb-1 text-center">Mobile App</h3>
                <p className="text-blue-100 text-sm text-center">React Native + Expo</p>
              </div>
            </motion.div>

            {/* Arrow: Mobile App → Backend API */}
            <div className="hidden md:flex items-center justify-center absolute left-[calc(33.333%-2rem)] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center"
              >
                <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-600" />
              </motion.div>
            </div>

            {/* Backend API - Center */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center justify-center gap-8 relative z-10"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl w-full max-w-xs">
                <Server className="w-10 h-10 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-bold text-white mb-1 text-center">Backend API</h3>
                <p className="text-green-100 text-sm text-center">FastAPI + Redis + RQ</p>
              </div>

              {/* Arrow: Backend API → AI Services */}
              <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-full mt-4 z-20 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="flex flex-col items-center"
                >
                  <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-600 rotate-90" />
                </motion.div>
              </div>

              {/* AI Services - Below Backend */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-full max-w-xs"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 shadow-2xl">
                  <Brain className="w-10 h-10 text-white mb-3 mx-auto" />
                  <h3 className="text-lg font-bold text-white mb-1 text-center">AI Services</h3>
                  <p className="text-orange-100 text-sm text-center">Google Gemini + RAG</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Arrow: Backend API → Supabase */}
            <div className="hidden md:flex items-center justify-center absolute left-[calc(66.666%-2rem)] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center"
              >
                <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-600" />
              </motion.div>
            </div>

            {/* Supabase - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center md:justify-start relative z-10"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl w-full max-w-xs">
                <Database className="w-10 h-10 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-bold text-white mb-1 text-center">Supabase</h3>
                <p className="text-purple-100 text-sm text-center">PostgreSQL + Storage</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RAG Pipeline Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            RAG Pipeline Flow
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 flex-wrap">
            {[
              "Document Upload",
              "Text Extraction",
              "Chunking",
              "Embedding",
              "Vector Storage",
              "Query Processing",
              "AI Response",
            ].map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg text-sm md:text-base"
                >
                  {step}
                </motion.div>
                {index < 6 && (
                  <ArrowRight className="mx-2 text-gray-400 dark:text-gray-600 hidden md:block w-5 h-5" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  MessageSquare,
  CreditCard,
  Zap,
  Search,
  FolderTree,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "JWT-based auth with Supabase, auto-refresh tokens, and complete data isolation with Row Level Security.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Upload, organize PDFs with folder-based hierarchy. Real-time upload progress and advanced search.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI Chat System",
    description: "Document-specific and general AI conversations with RAG. Context-aware responses with conversation history.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: CreditCard,
    title: "Subscription System",
    description: "Multi-tier plans (Free, Pro, Premium) with usage tracking, billing history, and easy plan management.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Live document processing status, instant chat synchronization, and push notifications.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Search,
    title: "Smart Processing",
    description: "Automatic text extraction, semantic chunking, and vector embeddings for AI-ready documents.",
    color: "from-indigo-500 to-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage documents and chat with AI intelligence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


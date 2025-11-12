"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Database, Brain, Zap, Shield } from "lucide-react";

const skills = [
  { icon: Code, name: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { icon: Smartphone, name: "Mobile", technologies: ["React Native", "Expo", "NativeWind"] },
  { icon: Database, name: "Backend", technologies: ["FastAPI", "Python", "Node.js", "PostgreSQL"] },
  { icon: Brain, name: "AI/ML", technologies: ["RAG", "LLMs", "Vector DB", "Embeddings"] },
  { icon: Zap, name: "Tools", technologies: ["Docker", "Git", "CI/CD", "AWS"] },
  { icon: Shield, name: "Security", technologies: ["JWT", "OAuth", "RLS", "Encryption"] },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building modern web and mobile applications. 
              I love working with cutting-edge technologies and creating solutions that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My focus is on creating scalable, maintainable code while delivering exceptional user experiences. 
              I'm particularly interested in AI/ML integration and building intelligent applications that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-3">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {skill.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>• {tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


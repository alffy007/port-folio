"use client";

import { motion } from "framer-motion";

const screenshots = [
  "/Assets/Screenshot_1753022232.png",
  "/Assets/Screenshot_1753022226.png",
  "/Assets/Screenshot_1753022218.png",
  "/Assets/Screenshot_1753022212.png",
  "/Assets/Screenshot_1753022201.png",
  "/Assets/Screenshot_1753022179.png",
  "/Assets/Screenshot_1750960230.png",
  "/Assets/Screenshot_1750959288.png",
  "/Assets/Screenshot_1750959280.png",
];

export function GallerySection() {

  return (
    <section id="gallery" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the beautiful UI and features of SimpliDoc AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="max-h-[600px] w-auto object-contain group-hover:brightness-110 transition-all"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


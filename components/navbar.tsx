"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isProjectPage = pathname !== "/";

  const navLinks = isProjectPage
    ? [
        { href: "#gallery", label: "Gallery" },
        { href: "#tech", label: "Tech Stack" },
        { href: "#features", label: "Features" },
      ]
    : [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text cursor-pointer"
          >
            {isProjectPage ? "← Back to Portfolio" : "Alfred's Portfolio"}
          </motion.div>
        </Link>
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}


import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0f1115] text-white overflow-hidden px-6">

      {/* Responsive glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] left-[-80px] w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] bg-blue-500 blur-3xl opacity-40 rounded-full" />
        <div className="absolute bottom-[-100px] right-[-60px] w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] bg-purple-500 blur-3xl opacity-40 rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 mb-4 text-sm"
        >
          🟢 Available for freelance & full-time roles
        </motion.p>

        {/* Responsive heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
        >
          Full Stack MERN Developer
          <br />
          Building Modern Web Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base"
        >
          I build fast, scalable, and animated web apps using React,
          Node.js, Tailwind, Express, REST APIs, and Git.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:scale-105 transition"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            Hire Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

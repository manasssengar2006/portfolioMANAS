import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "MMW Ventures",
    desc: "Designed and developed a modern animated landing page with clean UI, smooth transitions, and full mobile responsiveness.",
    live: "https://cogent-frontend-two.vercel.app/", // 🔗 add real link
    github: "", // optional
  },
  {
    title: "MSI Construction",
    desc: "Built a complete full-stack website for an international client including frontend, backend, and deployment-ready architecture.",
    live: "https://msi-construction.vercel.app/",
    github: "",
  },
  {
    title: "Swabhiman NGO Platform",
    featured: true,
    desc: "Developed a full MERN platform with authentication, admin panel, analytics dashboard, and social features like posts, likes, and comments.",
    live: "https://ssss-ngo-frontend.vercel.app/", // add after deploy
    github: "",
  },
];

export default function Projects() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen bg-[#0f1115] text-white px-6 py-20 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500 blur-3xl opacity-30 rounded-full" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-purple-500 blur-3xl opacity-30 rounded-full" />
      </div>

      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-14">
          My Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMouse({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
              whileHover={{ scale: 1.05, y: -12 }}
              className="relative group rounded-2xl"
            >
              {/* Neon border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              {/* Cursor glow */}
              <div
                className="absolute pointer-events-none rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition"
                style={{
                  width: 120,
                  height: 120,
                  left: mouse.x - 60,
                  top: mouse.y - 60,
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.25), transparent)",
                }}
              />

              {/* Card */}
              <motion.div
                className="relative bg-[#14161c] border border-white/10 rounded-2xl p-6 backdrop-blur-xl h-full overflow-hidden"
                whileHover={{ rotateX: 6, rotateY: -6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Featured badge */}
                {p.featured && (
                  <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-yellow-400 text-black font-semibold">
                    ⭐ Flagship
                  </div>
                )}

                {/* Title */}
                <h2 className="text-xl font-semibold mb-3">{p.title}</h2>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex gap-2 text-xs text-gray-500">
                  <span className="bg-white/5 px-2 py-1 rounded">React</span>
                  <span className="bg-white/5 px-2 py-1 rounded">Node</span>
                  <span className="bg-white/5 px-2 py-1 rounded">MongoDB</span>
                </div>

                {/* 🔗 Buttons */}
                {(p.live || p.github) && (
                  <div className="mt-6 flex gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-2 bg-blue-600 rounded-md hover:scale-105 transition"
                      >
                        Live Demo →
                      </a>
                    )}

                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-2 border border-white/20 rounded-md hover:bg-white/10 transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

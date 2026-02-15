import { motion } from "framer-motion";

const services = [
  {
    title: "Modern React Websites",
    desc: "Fast, responsive websites built with modern UI frameworks and best practices.",
    icon: "⚛️",
  },
  {
    title: "Full Stack Web Apps",
    desc: "End-to-end MERN stack applications with authentication and scalable backend architecture.",
    icon: "🧠",
  },
  {
    title: "Landing Pages",
    desc: "High-converting landing pages with animations and premium visuals.",
    icon: "🚀",
  },
  {
    title: "API Development",
    desc: "Secure REST APIs built with Node.js and Express.",
    icon: "🔗",
  },
  {
    title: "UI Animations",
    desc: "Premium motion effects using Framer Motion.",
    icon: "✨",
  },
  {
    title: "Performance Optimization",
    desc: "Speed, SEO, and responsiveness improvements.",
    icon: "⚡",
  },
];

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen bg-[#0f1115] text-white px-6 py-20 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-500 blur-3xl opacity-30 rounded-full" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[380px] h-[380px] bg-purple-500 blur-3xl opacity-30 rounded-full" />
      </div>

      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Services I Offer
          </h1>
          <p className="text-gray-400">
            Modern, scalable, and visually engaging web solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              {/* Card */}
              <div className="relative bg-[#14161c] border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h2 className="text-lg font-semibold mb-2">{s.title}</h2>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://portfolio-backend-0ih6.onrender.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully 🚀");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch {
      setStatus("Server error ❌");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0f1115] text-white overflow-hidden px-6">

      {/* 🌌 Glow Background (hero-style) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-purple-500 rounded-full blur-3xl opacity-40" />
      </div>

      {/* 🧊 Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg"
      >
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#14161c] border border-white/10 p-8 rounded-2xl backdrop-blur-xl"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold mb-6 text-center"
          >
            Let’s Work Together
          </motion.h1>

          {/* Name */}
          <motion.input
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
            required
          />

          {/* Email */}
          <motion.input
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            type="email"
            className="w-full mb-4 p-3 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
            required
          />

          {/* Message */}
          <motion.textarea
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full mb-4 p-3 rounded-lg bg-black/30 border border-white/10 focus:border-purple-500 outline-none"
            required
          />

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full bg-blue-600 py-3 rounded-lg hover:scale-105 transition"
          >
            Send Message
          </motion.button>

          {/* Status */}
          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm mt-4 text-gray-400"
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}

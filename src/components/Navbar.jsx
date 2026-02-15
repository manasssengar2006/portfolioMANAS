import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `transition ${
      pathname === path
        ? "text-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass container */}
      <div className="bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-white">

          {/* Logo */}
          <Link
            to="/"
            className="font-semibold text-lg tracking-wide"
            onClick={() => setOpen(false)}
          >
            Manas.dev
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex gap-8 text-sm">
            <Link to="/services" className={linkClass("/services")}>
              Services
            </Link>
            <Link to="/projects" className={linkClass("/projects")}>
              Projects
            </Link>
            <Link to="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/10">
          <div className="flex flex-col items-center py-4 space-y-4 text-white text-sm">
            <Link to="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link to="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

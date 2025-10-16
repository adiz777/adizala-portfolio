import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-cyan-400/10 shadow-lg"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <motion.div
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 select-none"
          whileHover={{ scale: 1.05 }}
        >
          Major_ADI
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 lg:gap-10 text-gray-300 text-lg font-medium">
          {links.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative transition-all duration-300 ${
                    isActive
                      ? "text-fuchsia-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-fuchsia-500"
                      : "hover:text-cyan-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-cyan-400 text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Nav Links */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0a0f]/95 border-t border-cyan-400/10 backdrop-blur-lg"
          >
            <ul className="flex flex-col items-center py-6 space-y-4 text-lg text-gray-300">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block transition-all duration-300 ${
                        isActive
                          ? "text-fuchsia-400 border-b-2 border-fuchsia-500 pb-1"
                          : "hover:text-cyan-300"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

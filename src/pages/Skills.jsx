import React from "react";
import { motion } from "framer-motion";

// Simple Icons
import {
  SiKalilinux,
  SiLinux,
  SiPython,
  SiWireshark,
  SiGithub,
  SiDocker,
  SiCloudflare,
  SiBurpsuite
} from "react-icons/si";

// Font Awesome
import {
  FaWindows,
  FaShieldAlt,
  FaSkullCrossbones,
  FaNetworkWired,
  FaLock
} from "react-icons/fa";

// Ant Design
import { AiOutlineConsoleSql } from "react-icons/ai";

// Material Design
import { MdSecurity } from "react-icons/md";

// Ionicons
import { IoIosAnalytics } from "react-icons/io";

// BoxIcons
import { BiGitBranch } from "react-icons/bi";

// Remix Icons
import { RiShieldStarLine } from "react-icons/ri";

// Skill categories
const skillCategories = [
  {
    category: "Offensive",
    skills: [
      { name: "Kali Linux", icon: <SiKalilinux /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Burp Suite", icon: <SiBurpsuite /> },
      { name: "SQLMap", icon: <AiOutlineConsoleSql /> }
    ]
  },
  {
    category: "Defensive",
    skills: [
      { name: "Network Security", icon: <FaShieldAlt /> },
      { name: "Lock/Encryption", icon: <FaLock /> },
      { name: "Advanced Security", icon: <RiShieldStarLine /> },
      { name: "Security Tools", icon: <MdSecurity /> }
    ]
  },
  {
    category: "Networking",
    skills: [
      { name: "Wireshark", icon: <SiWireshark /> },
      { name: "Networking", icon: <FaNetworkWired /> },
      { name: "Analytics", icon: <IoIosAnalytics /> }
    ]
  },
  {
    category: "Platforms & Tools",
    skills: [
      { name: "Linux", icon: <SiLinux /> },
      { name: "Windows", icon: <FaWindows /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Cloudflare", icon: <SiCloudflare /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Git Branching", icon: <BiGitBranch /> }
    ]
  }
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <h2 className="skills-title">My Skills</h2>
      {skillCategories.map((category, idx) => (
        <div key={idx} className="skill-category">
          <h3 className="category-title">{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px #00f0ff" }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="icon">{skill.icon}</div>
                <p className="name">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Embedded CSS */}
      <style jsx>{`
        .skills-wrapper {
          padding: 2rem 1rem;
        }

        .skills-title {
          font-size: 2.2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 2.5rem;
          color: #00f0ff;
          text-shadow: 0 0 10px #00f0ff;
        }

        .skill-category {
          margin-bottom: 2.5rem;
        }

        .category-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #00f0ff;
          font-weight: 600;
          border-bottom: 1px solid #00f0ff;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          justify-items: center;
          align-items: center;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #1a1a1a;
          color: #00f0ff;
          padding: 1rem;
          border-radius: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .skill-card .icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .skill-card .name {
          font-size: 0.95rem;
          font-weight: 500;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Skills;

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

// Ant Design Icons
import { AiOutlineConsoleSql } from "react-icons/ai";

// Material Design
import { MdSecurity } from "react-icons/md";

// Ionicons
import { IoIosAnalytics } from "react-icons/io";

// BoxIcons
import { BiGitBranch } from "react-icons/bi";

// Remix Icons
import { RiShieldStarLine } from "react-icons/ri";

const Skills = () => {
  const skills = [
    { name: "Kali Linux", icon: <SiKalilinux /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Wireshark", icon: <SiWireshark /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Cloudflare", icon: <SiCloudflare /> },
    { name: "Burp Suite", icon: <SiBurpsuite /> },
    { name: "Windows", icon: <FaWindows /> },
    { name: "Network Security", icon: <FaShieldAlt /> },
    { name: "Cyber Threat", icon: <FaSkullCrossbones /> },
    { name: "Networking", icon: <FaNetworkWired /> },
    { name: "Lock/Encryption", icon: <FaLock /> },
    { name: "SQLMap", icon: <AiOutlineConsoleSql /> },
    { name: "Security Tools", icon: <MdSecurity /> },
    { name: "Analytics", icon: <IoIosAnalytics /> },
    { name: "Git Branching", icon: <BiGitBranch /> },
    { name: "Advanced Security", icon: <RiShieldStarLine /> }
  ];

  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="skill-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {skill.icon}
          <p>{skill.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;

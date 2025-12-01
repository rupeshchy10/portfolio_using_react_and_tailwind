import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  "Frontend Developer",
  "Backend Developer",
  "PERN Stack Developer",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentSkill = skills[skillIndex];

    if (charIndex < currentSkill.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentSkill.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, skillIndex]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-blue-500 dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:via-[#1e3a8a] dark:to-[#1e40af] dark:bg-clip-text dark:text-transparent"
    >
      {text}
      <span className="animate-pulse">|</span>
    </motion.p>
  );
};

export default Typewriter;

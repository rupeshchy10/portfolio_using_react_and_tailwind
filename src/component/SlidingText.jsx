import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const skills = [
  "Frontend Developer",
  "Backend Developer",
  "PERN Stack Developer",
];

const SlidingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={skills[index]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-500 dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:via-[#1e3a8a] dark:to-[#1e40af] dark:bg-clip-text dark:text-transparent"
        >
          {skills[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default SlidingText;

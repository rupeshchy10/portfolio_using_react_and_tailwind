// AnimatedName.jsx
import React from "react";
import { motion } from "framer-motion";

const name = "Rupesh Choudhary,";

// parent container variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
};

// child (letter) variants
const letter = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AnimatedName() {
  const words = name.split(" "); // ["Rupesh", "Choudhary,"]

  return (
    <motion.span
      className="inline-block overflow-hidden" // parent can wrap
      variants={container}
      initial="hidden"
      whileInView="show"
      animate={{ y: [0, 14, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {words.map((word, wi) => (
        // make each whole word an atomic inline-block so it won't break mid-word
        <span key={wi}   className={`inline-block ${wi !== words.length - 1 ? "mr-[0.25em]" : ""}`}
>
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letter}
              className="inline-block text-yellow-500 dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:via-[#1e3a8a] dark:to-[#1e40af] dark:bg-clip-text dark:text-transparent"
            >
              {char}
            </motion.span>
          ))}
          {/* add a normal space after each word except the last so wrapping can occur */}
        </span>
      ))}
    </motion.span>
  );
}

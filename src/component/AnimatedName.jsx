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
			staggerChildren: 0.04, // time between letters
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
	return (
		<motion.span
			className="inline-block overflow-hidden"
			variants={container}
			initial="hidden"
			whileInView="show"
animate={{ y: [0, -6, 8, 0] }}
			transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
			viewport={{ once: false, amount: 0.3 }} // amount controls how much in view triggers
		>
			{name.split("").map((char, i) => (
				<motion.span
					key={i}
					variants={letter}
					className="inline-block text-yellow-500 dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:via-[#1e3a8a] dark:to-[#1e40af] dark:bg-clip-text dark:text-transparent"
				>
					{char === " " ? "\u00A0" : char}
				</motion.span>
			))}
		</motion.span>
	);
}

// FloatingName.jsx
import React from "react";
import { motion } from "framer-motion";

export default function FloatingName() {
	return (
		<motion.span
			className="inline-block text-yellow-600 dark:text-green-600 italic"
			// start position is 0, animate to -8px, then back
			animate={{ y: [0, -8, 0] }}
			transition={{
				duration: 2,
				repeat: Infinity,
				repeatType: "reverse",
				ease: "easeInOut",
			}}
			// optional: only animate when in view
			// whileInView={{}}
			// viewport={{ once: false }}
		>
			Rupesh Choudhary?
		</motion.span>
	);
}

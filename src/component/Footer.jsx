import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
	const menus = [
		{ label: "Home", href: "#home" },
		{ label: "Features", href: "#features" },
		{ label: "About", href: "#about" },
		{ label: "Education", href: "#education" },
		{ label: "Projects", href: "#projects" },
	];
	return (
		<footer className="bg-green-800 dark:bg-[#0f172a] text-white pb-5 px-6">
			<div className=" border-t border-gray-600 mb-6" />
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				// viewport={{ once: false }}
				className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
			>
				{/* ------- LEFT ---------- */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					// viewport={{ once: false }}
					className="flex flex-col lg:items-start items-center"
				>
					<h2 className="text-3xl font-bold mb-3">
						Rupesh{" "}
						<span className="text-yellow-400 dark:text-green-500">
							Choudhary
						</span>
					</h2>

					<p className="text-gray-300 leading-relaxed">
						A passionate React.js developer focused on building
						modern, responsive and clean user interfaces. Always
						eager to learn and grow as a full-stack developer.
					</p>
				</motion.div>

				{/* ------- MIDDLE ---------- */}
				<div className="flex flex-col items-center  xl:ml-30">
					<h3 className="text-xl font-semibold mb-4 border-b border-yellow-500 dark:border-green-600 inline-block pb-1">
						Quick Links
					</h3>

					<ul className="space-y-2 text-gray-300">
						{menus.map((menu) => (
							<li key={menu.label}>
								<a
									href={menu.href}
									className="hover:text-yellow-400 dark:hover:text-green-600 cursor-pointer"
								>
									{menu.label}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* ------- RIGHT ---------- */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					// viewport={{ once: false }}
					className="lg:ml-19 xl:ml-30 md:-ml-3 flex flex-col items-center md:items-start"
				>
					<h3 className="text-xl font-semibold mb-4 border-b border-yellow-500 dark:border-green-600 inline-block pb-1">
						Contact
					</h3>

					<ul className="space-y-3 text-gray-300">
						<li className="flex items-center gap-3">
							<FaPhoneAlt className="text-yellow-400 dark:text-green-600" />
							<span>+977-9862885899</span>
						</li>

						<li className="flex items-center gap-3 break-all">
							<FaEnvelope className="text-yellow-400 dark:text-green-600" />
							<span>rupevilary1010@gmail.com</span>
						</li>
					</ul>

					{/* Social Icons */}
					<div className="flex gap-4 mt-5">
						<a
							href="https://github.com/rupeshchy10"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-yellow-500 dark:bg-green-600 text-black p-2 rounded-full hover:scale-110 transition"
						>
							<FaGithub />
						</a>

						<a
							href="https://www.linkedin.com/in/rupeshchy10/"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-yellow-500 dark:bg-green-600 text-black p-2 rounded-full hover:scale-110 transition"
						>
							<FaLinkedinIn />
						</a>
					</div>
				</motion.div>
			</motion.div>

			{/* ------- BOTTOM LINE ---------- */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				viewport={{ once: false }}
				className="border-t border-gray-300 dark:border-gray-600 mt-6 pt-5 text-center text-gray-400 text-sm"
			>
				© {new Date().getFullYear()} Rupesh Choudhary — All Rights
				Reserved.
			</motion.div>
		</footer>
	);
};

export default Footer;

import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-[#005427] dark:bg-[#0f172a] text-white pb-6 px-6">
            <div className=" border-t border-gray-600 mb-10"/>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

				{/* ------- LEFT ---------- */}
				<div className="flex flex-col lg:items-start items-center">
					<h2 className="text-3xl font-bold mb-3">
						Rupesh{" "}
						<span className="text-yellow-400 dark:text-green-500">
							Choudhary
						</span>
					</h2>

					<p className="text-gray-300 leading-relaxed">
						A passionate React.js developer focused on building modern,
						responsive and clean user interfaces. Always eager to learn
						and grow as a full-stack developer.
					</p>
				</div>

				{/* ------- MIDDLE ---------- */}
				<div className="flex flex-col items-center  xl:ml-30">
					<h3 className="text-xl font-semibold mb-4 border-b border-yellow-500 inline-block pb-1">
						Quick Links
					</h3>

					<ul className="space-y-2 text-gray-300">
						<li className="hover:text-yellow-400 cursor-pointer">
							Home
						</li>
						<li className="hover:text-yellow-400 cursor-pointer">
							About
						</li>
						<li className="hover:text-yellow-400 cursor-pointer">
							Projects
						</li>
						<li className="hover:text-yellow-400 cursor-pointer">
							Contact
						</li>
					</ul>
				</div>

				{/* ------- RIGHT ---------- */}
				<div className="lg:ml-19 xl:ml-30 md:-ml-3 flex flex-col items-center md:items-start">
					<h3 className="text-xl font-semibold mb-4 border-b border-yellow-500 inline-block pb-1">
						Contact
					</h3>

					<ul className="space-y-3 text-gray-300">
						<li className="flex items-center gap-3">
							<FaPhoneAlt className="text-yellow-400" />
							<span>+977-9862885899</span>
						</li>

						<li className="flex items-center gap-3 break-all">
							<FaEnvelope className="text-yellow-400" />
							<span>rupevilary1010@gmail.com</span>
						</li>
					</ul>

					{/* Social Icons */}
					<div className="flex gap-4 mt-5">
						<a
							href="#"
							className="bg-yellow-500 text-black p-2 rounded-full hover:scale-110 transition"
						>
							<FaGithub />
						</a>

						<a
							href="#"
							className="bg-yellow-500 text-black p-2 rounded-full hover:scale-110 transition"
						>
							<FaLinkedinIn />
						</a>
					</div>
				</div>
			</div>

			{/* ------- BOTTOM LINE ---------- */}
			<div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
				© {new Date().getFullYear()} Rupesh Choudhary — All Rights Reserved.
			</div>
		</footer>
	);
};

export default Footer;

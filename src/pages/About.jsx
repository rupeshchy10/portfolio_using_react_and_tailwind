import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import FloatingName from "../component/FloatingName";
import { motion } from "motion/react";
import dark_profile from "../assets/images/dark_profile.png";
import light_profile from "../assets/images/light_profile.png";
import light_sign from "../assets/images/light_sign.png";
import dark_sign from "../assets/images/dark_sign.png";
import resume_download from "../assets/Resume_download.pdf";

const About = ({ theme }) => {
	return (
		<>
			<div id="about" className="lg:h-[600px] bg-[#005427] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f172a] flex items-center justify-center text-white w-full">
				<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 md:px-10 lg:px-40 bg-green-">
					{/* -----------------Image Left Portion------------- */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						// viewport={{ once: false }}
						className="w-full lg:mb-10  max-w-xs md:max-w-sm lg:max-w-sm h-[300px] sm:h-[315px] md:h-[400px] lg:h-[500px] mx-auto bg-yellow- flex items-end justify-center hover:scale-105 transition-all duration-150 cursor-pointer"
					>
						<img
							src={
								theme === "dark" ? dark_profile : light_profile
							}
							alt="profile_pic"
							className="max-w-full max-h-full object-cover lg:mb-7 sm:-mb-10 -mb-7"
						/>
					</motion.div>

					{/* ----------------Right portion-------------- */}
					<div className="flex items-center lg:my-18 md:my-15 sm:my-10 my-7 ">
						<div className="w-full max-w-xl mx-6 md:mx-auto lg:mx-0">
							<div className="text-center lg:text-left ">
								<span>--</span> About Me
							</div>

							<div className="text-3xl md:text-4xl font-bold mt-2 text-center lg:text-left">
								Who is <FloatingName />
							</div>

							<div className="my-4 space-y-2 text-justify">
								<motion.p
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 1.5, delay: 0.2 }}
									// viewport={{ once: false }}
								>
									A Computer Engineering student from
									Biratnagar, Nepal, passionate about sleek,
									responsive web interfaces using React.js,
									JavaScript, and Tailwind CSS.
								</motion.p>
								<motion.p
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 1.5, delay: 0.4 }}
									// viewport={{ once: false }}
								>
									Currently exploring backend development with
									Node.js, Express, and PostgreSQL (PERN
									stack) to understand full-stack concepts.
								</motion.p>
								<motion.p
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 1.5, delay: 0.6 }}
									// viewport={{ once: false }}
								>
									His goal is to start as a React.js developer
									and gradually evolve into a full-stack
									engineer while working on impactful
									real-world projects.
								</motion.p>
							</div>

							<div className="flex flex-wrap gap-2 justify-center lg:justify-start">
								{/* -------------Button Group---------- */}
								<motion.a
									href={resume_download}
									download
									target="_blank"
									rel="noopener noreferrer"
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									// viewport={{ once: false }}
									className="flex items-center hover:scale-105 transition-all duration-100 cursor-pointer"
								>
									<div className="flex border-yellow-500 dark:border-red-700 border-3 rounded-full px-6 py-1.5 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-white font-semibold cursor-pointer z-10">
										Download CV
									</div>
									<button className="flex items-center justify-end bg-yellow-500 dark:bg-red-700  rounded-full py-1.5 px-1 -ml-9 cursor-pointer z-0 shadow-lg w-17 border-3 border-yellow-500 dark:border-red-700">
										<FaArrowCircleDown className="text-white text-2xl rounded-full bg-black" />
									</button>
								</motion.a>

								{/* -------------Signature------------ */}
								<motion.div
									initial={{ opacity: 0, x: 30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									// viewport={{ once: false }}
									className="ml-4"
								>
									<img
										src={
											theme === "dark"
												? dark_sign
												: light_sign
										}
										className="w-25"
									/>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;

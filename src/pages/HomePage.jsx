import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GiStaryu } from "react-icons/gi";
import { motion } from "motion/react";
import Typewriter from "../component/Typewriter";
import AnimatedName from "../component/AnimatedName";
import profile_pic from "../assets/images/Rup_profile.png";
import resume_preview from "../assets/Resume_preview.pdf";
import { bannerWords } from "../assets/assets";

const HomePage = () => {
	return (
		<div id="home">
			<div className="grid lg:grid-cols-2 grid-cols-1 justify-between mx-14">
				{/* Left Description Portion */}
				<div className="lg:my-40 my-30 flex flex-col lg:items-start items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						// viewport={{ once: false }}
						className="border-2 border-gray-500 w-26 flex items-center justify-center p-0.5 text-black dark:text-white "
					>
						Hello There!
					</motion.div>

					{/* ------------Title Naming----------- */}
					<div className="text-5xl sm:text-4xl md:text-5xl  lg:text-4xl xl:text-5xl font-bold my-6 space-y-2 text-black dark:text-gray-300 text-center lg:text-left">
						<p>
							I'm <AnimatedName />
						</p>
						<p>An Aspiring</p>
						<Typewriter />
					</div>

					{/* ------------Description------------- */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						// viewport={{ once: false }}
						className="text-center lg:text-left text-black dark:text-gray-400"
					>
						Passionate about crafting responsive, user-friendly web
						applications with{" "}
						<span className="font-bold text-black dark:text-red-500">
							React.JS
						</span>{" "}
						and{" "}
						<span className="font-bold text-black dark:text-red-500">
							modern web
						</span>{" "}
						technologies. Currently exploring the{" "}
						<span className="font-bold text-black dark:text-red-500">
							PERN
						</span>{" "}
						stack to strengthen my{" "}
						<span className="font-bold text-black dark:text-red-500">
							full-stack
						</span>{" "}
						development skills
					</motion.div>

					{/* --------------Button-------------- */}
					<div className="flex flex-col sm:flex-row items-center justify-center  lg:justify-start my-6 space-x-10 space-y-4 sm:space-y-0">
						{/* ----------------Button Group------------ */}
						<motion.a
							href={resume_preview}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							// viewport={{ once: false }}
							className="flex items-center hover:scale-103 transition-all duration-100"
						>
							<button className="flex border-yellow-500 dark:border-red-700 border-3 rounded-full px-6 py-1.5 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-white font-semibold cursor-pointer z-10">
								View My Resume
							</button>
							<button className="flex items-center justify-end bg-yellow-500 dark:bg-red-700  rounded-full py-1.5 px-1 -ml-9 cursor-pointer z-0 shadow-lg w-17 border-3 border-yellow-500 dark:border-red-700">
								<FaArrowRight className="text-black text-2xl p-1 rounded-2xl bg-white" />
							</button>
						</motion.a>

						{/* ------------------"Get in Touch" Button--------------- */}
						<a href="#contact">
							<motion.button
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								// viewport={{ once: false }}
								className="border-2 text-black dark:text-white border-black dark:border-red-700 rounded-4xl mr-10 sm:mr-0 px-3.5 h-10 flex items-center font-bold dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] cursor-pointer hover:scale-103 transition-all duration-100"
							>
								Get in Touch
							</motion.button>
						</a>
					</div>
				</div>

				{/* Image Right Portion */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					// viewport={{ once: false }}
					className="-mt-50 sm:mt-0"
				>
					<div className="flex w-full lg:mt-24 md:-mt-30 sm:-mt-30 mt-20 justify-center">
						<img
							src={profile_pic}
							className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] hover:scale-105 transition-all duration-200"
							alt="profile_pic"
						/>
					</div>
				</motion.div>
			</div>

			<div>
				<div className="bg-yellow-500 dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#1e40af] py-2.5 px-1 items-center z-10 relative flex overflow-hidden xl:-mt-20 lg:-mt-38">
					<div className="overflow-hidden w-full">
						<ul className="flex text-black dark:text-white justify-center md:justify-between items-center gap-1.5 md:gap-3 sm:mx-8 font-bold animate-marquee whitespace-nowrap text-[10px] sm:text-base md:text-lg lg:text-xl">
							<li className="">
								<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
							</li>
							{bannerWords.map((word) => (
								<React.Fragment key={word}>
									<li className=" italic">{word}</li>
									<li className="">
										<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
									</li>
								</React.Fragment>
							))}
						</ul>
					</div>
				</div>


             


				<div className="bg-[#005427] dark:bg-red-700 -mt-9 sm:-mt-11 md:-mt-12 h-9 sm:h-11 md:h-12 z-0 items-center flex rotate-[-1deg]"></div>
			</div>
		</div>
	);
};

export default HomePage;

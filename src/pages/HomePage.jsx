import React from "react";
import { CgPlayButtonO } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { GiStaryu } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import { PiCursorClickBold } from "react-icons/pi";

const HomePage = () => {
	return (
		<>
			<div className="flex justify-between mx-14 h-[650px]">
				<div className="flex-1 my-40">
					<div className="border-2 border-gray-500 w-26 flex items-center justify-center p-0.5 text-black dark:text-white">
						Hello There!
					</div>
					<div className="text-5xl font-bold my-6 space-y-2 text-black dark:text-gray-300">
						<p>
							I'm{" "}
							<span className="text-yellow-500 dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:via-[#1e3a8a] dark:to-[#1e40af] dark:bg-clip-text dark:text-transparent ">
								Rupesh Choudhary,
							</span>
						</p>
						<p>An Aspiring</p>
						<p className="text-blue-500 dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:via-[#1e3a8a] dark:to-[#1e40af] dark:bg-clip-text dark:text-transparent">
							Frontend Developer.
						</p>
					</div>
					<div className="text-black dark:text-gray-400">
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
					</div>
					<div className="flex my-6 space-x-10">
						<div className="flex items-center">
							<div className="flex border-yellow-500 dark:border-red-700 border-3 rounded-full px-6 py-1.5 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-white font-semibold cursor-pointer z-10">
								View My Portfolio
							</div>
							<button className="flex items-center justify-end bg-yellow-500 dark:bg-red-700  rounded-full py-1.5 px-1 -ml-9 cursor-pointer z-0 shadow-lg w-17 border-3 border-yellow-500 dark:border-red-700">
								<FaArrowRight className="text-black text-2xl p-1 rounded-2xl bg-white" />
							</button>
						</div>

						<div className="border-2 text-black dark:text-white border-black dark:border-red-700 rounded-4xl px-3.5 h-10 flex items-center font-bold dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b]">
							Get in Touch
						</div>
					</div>
				</div>

				<div className="flex-1 bg-blue- ">
					<div className="top-0 left-0 flex w-full items- justify-center">
						<img src="/profile.png" className="h-[500px] mb-0 " />
					</div>
				</div>
			</div>
			<div className="bg-yellow-500 dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#1e40af] h-12 items-center z-10 relative flex">
				<ol className="flex text-black dark:text-white justify-between w-full mx-8 font-bold text-xl">
					<li>
						<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
					</li>

					<li>HTML</li>
					<li>
						<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
					</li>
					<li>CSS</li>
					<li>
						<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
					</li>
					<li>JavaScript</li>
					<li>
						<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
					</li>
					<li>ReactJS</li>
					<li>
						<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
					</li>
					<li>NodeJS</li>
					<li>
						<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
					</li>
					<li>PostgreSQL</li>
					<li>
						<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
					</li>
				</ol>
			</div>
			<div className="bg-[#005427] dark:bg-red-700 -mt-12 h-12 z-0 items-center flex rotate-[-1deg]"></div>
		</>
	);
};

export default HomePage;

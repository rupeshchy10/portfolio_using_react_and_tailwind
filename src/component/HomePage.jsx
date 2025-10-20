import React from "react";
import { CgPlayButtonO } from "react-icons/cg";
import { GiStaryu } from "react-icons/gi";

const HomePage = () => {
	return (
		<>
			<div className="flex justify-between mx-14 h-[530px] bg-yellow-500">
				<div className="flex-1 my-20">
					<div className="border-2 border-gray-500 w-26 flex items-center justify-center p-0.5">
						Hello There!
					</div>
					<div className="text-5xl font-bold my-6 space-y-2">
						<p>
							I'm{" "}
							<span className="text-blue-500">Rupesh Choudhary,</span>
						</p>
						<p>An Aspiring</p>
						<p>Frontend Developer.</p>
					</div>
					<div className="">
						Passionate about crafting responsive, user-friendly web applications with <span className="font-bold">React.JS</span> and <span className="font-bold">modern web</span> technologies. Currently exploring the <span className="font-bold">PERN</span> stack to strengthen my <span className="font-bold">full-stack</span> development skills
					</div>
					<div className="flex my-6 space-x-10">
						<div className="flex items-center">
							<div className="flex items-center border-none rounded-4xl px-6 py-2 bg-[#005427] text-white font-semibold cursor-pointer z-10">
								View My Portfolio
							</div>
							<button className="flex items-center justify-end bg-blue-500 rounded-full py-2 px-1 -ml-8 cursor-pointer z-0 shadow-lg w-16">
								<CgPlayButtonO className="text-white text-2xl" />
							</button>
						</div>

						<div className="border-2 rounded-4xl px-3.5 h-10 flex items-center font-bold">
							Get in Touch
						</div>
					</div>
				</div>

				<div className="flex-1 bg-blue-500 ">
					<div className="top-0 left-0 flex w-full items- justify-center">
						<img
							src="/profile.png"
							className="h-[500px] mb-0 "
						/>
					</div>
				</div>
			</div>
			<div className="bg-blue-700 h-12 items-center z-10 relative flex">
				<ol className="flex justify-between w-full mx-8 font-bold text-xl">
					<li>
						<GiStaryu />
					</li>
					<li>HTML</li>
					<li>
						<GiStaryu />
					</li>
					<li>CSS</li>
					<li>
						<GiStaryu />
					</li>
					<li>JavaScript</li>
					<li>
						<GiStaryu />
					</li>
					<li>ReactJS</li>
					<li>
						<GiStaryu />
					</li>
					<li>NodeJS</li>
					<li>
						<GiStaryu />
					</li>
					<li>PostgreSQL</li>
					<li>
						<GiStaryu />
					</li>
				</ol>
			</div>
			<div className="bg-[#005427] -mt-12 h-12 z-0 items-center flex rotate-[-1deg]"></div>
		</>
	);
};

export default HomePage;

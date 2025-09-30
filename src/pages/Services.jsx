import React from "react";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { LuFigma } from "react-icons/lu";
import { RiReactjsLine } from "react-icons/ri";

const Services = () => {
	return (
		<>
			<div className="mx-14 mt-18 flex justify-between">
				<div className="font-bold text-3xl">
					<span className="text-blue-700">Services</span>
					<span>
						<span className="text-[#005427]">|</span>Provide
					</span>
				</div>
				<div className="flex items-center">
					<div className="flex items-center border-none rounded-4xl px-6 py-2 bg-[#005427] text-white font-semibold cursor-pointer z-10">
						View All Services
					</div>
					<button className="flex items-center justify-end bg-blue-500 rounded-full px-2 py-2 -ml-10 cursor-pointer z-0 shadow-lg w-20">
						<FaArrowRight className="text-white text-2xl p-1 rounded-2xl border-2" />
					</button>
				</div>
			</div>
			<div className="mx-44 mt-10 mb-20 flex justify-between">
				<div className="p-4 w-70 h-64 rounded-xl bg-gray-300 shadow-2xl border">
					<div className=" mb-4 text-2xl text-[#005427] bg-white h-10 w-10 flex items-center justify-center rounded-4xl">
						<LuFigma />
					</div>
					<div className="font-bold text-xl">UI/UX Design</div>
					<div className="text-gray-500 my-2.5">
						Translating wireframes and design mockups into clean, functional code with a focus on usability and performance.
					</div>
					<div className="font-bold flex items-center">
						Learn more
						<FaLongArrowAltRight className="ml-2 text-blue-700" />
					</div>
				</div>

				<div className="p-4 w-70 h-64 rounded-xl bg-gray-300 shadow-2xl border">
					<div className=" mb-4 text-2xl text-[#005427] bg-white h-10 w-10 flex items-center justify-center rounded-4xl">
						<RiReactjsLine />
					</div>
					<div className="font-bold text-xl">Frontend Developer</div>
					<div className="text-gray-500">
						Building responsive, interactive and visually appealing web application using React.JS, Tailwind CSS and modern JavaScript.
					</div>
					<div className="font-bold flex items-center">
						Learn more
						<FaLongArrowAltRight className="ml-2 text-blue-700" />
					</div>
				</div>

				<div className="p-4 w-70 h-64 rounded-xl bg-gray-300 shadow-2xl border">
					<div className=" mb-4 text-2xl text-[#005427] bg-white h-10 w-10 flex items-center justify-center rounded-4xl">
						<GiCircuitry />
					</div>
					<div className="font-bold text-xl">Learning PERN Stack</div>
					<div className="text-gray-500 my-2.5">
						Currently exploring backend development with Node.JS, Express.JS and PostreSQL to grow as a full-stack developer.
					</div>
					<div className="font-bold flex items-center">
						Learn more
						<FaLongArrowAltRight className="ml-2 text-blue-700" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;

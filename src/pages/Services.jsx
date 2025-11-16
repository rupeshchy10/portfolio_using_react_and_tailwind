import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { LuFigma } from "react-icons/lu";
import { RiReactjsLine } from "react-icons/ri";

const Services = () => {
	return (
		<>
			<div className="mx-14 mt-18 flex justify-between">
				<div className="font-bold text-3xl text-black dark:text-white">
					Services
					<span>
						{" "}
						<span className="text-[#005427]">|</span>{" "}
						<span className="text-yellow-500 dark:text-blue-700">
							Provide
						</span>
					</span>
				</div>

				{/* Right Button-View all service */}
				<div className="flex items-center">
					<div className="flex border-yellow-500 dark:border-red-700 border-3 rounded-full px-6 py-1.5 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-white font-semibold cursor-pointer z-10">
						View All Services
					</div>
					<button className="flex items-center justify-end bg-yellow-500 dark:bg-red-700  rounded-full py-1.5 px-1 -ml-9 cursor-pointer z-0 shadow-lg w-17 border-3 border-yellow-500 dark:border-red-700">
						<FaArrowRight className="text-black text-2xl p-1 rounded-2xl bg-white" />
					</button>
				</div>
			</div>

			{/* Tech Stack Cards */}
			<div className="mx-44 mt-10 mb-20 flex justify-between">
				<div className="p-4 w-70 h-64 rounded-xl bg-gray-300 dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#1e40af] shadow-2xl border">
					<div className=" mb-4 text-2xl text-[#005427] dark:text-gray-300 bg-yellow-500 dark:bg-red-700 h-10 w-10 flex items-center justify-center rounded-4xl">
						<LuFigma />
					</div>
					<div className="font-bold text-black dark:text-gray-200 text-xl">
						UI/UX Design
					</div>
					<div className="text-gray-500 dark:text-gray-400 my-2.5">
						Translating wireframes and design mockups into clean,
						functional code with a focus on usability and performance.
					</div>
					<div className="font-bold flex items-center text-black dark:text-gray-200">
						Learn more
						<FaLongArrowAltRight className="ml-2 text-yellow-500 dark:text-red-500" />
					</div>
				</div>

				<div className="p-4 w-70 h-64 rounded-xl bg-gray-300 dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#1e40af] shadow-2xl border">
					<div className=" mb-4 text-2xl text-[#005427] dark:text-gray-300 bg-yellow-500 dark:bg-red-700 h-10 w-10 flex items-center justify-center rounded-4xl">
						<RiReactjsLine />
					</div>
					<div className="font-bold text-black dark:text-gray-200 text-xl">Frontend Developer</div>
					<div className="text-gray-500 dark:text-gray-400">
						Building responsive, interactive and visually appealing web
						application using React.JS, Tailwind CSS and modern
						JavaScript.
					</div>
					<div className="font-bold flex items-center text-black dark:text-gray-200">
						Learn more
						<FaLongArrowAltRight className="ml-2 text-yellow-500 dark:text-red-500" />
					</div>
				</div>

				<div className="p-4 w-70 h-64 rounded-xl bg-gray-300 dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#1e40af] shadow-2xl border">
					<div className=" mb-4 text-2xl text-[#005427] dark:text-gray-300 bg-yellow-500 dark:bg-red-700 h-10 w-10 flex items-center justify-center rounded-4xl">
						<GiCircuitry />
					</div>
					<div className="font-bold text-black dark:text-gray-200 text-xl">Learning PERN Stack</div>
					<div className="text-gray-500 dark:text-gray-400 my-2.5">
						Currently exploring backend development with Node.JS,
						Express.JS and PostreSQL to grow as a full-stack developer.
					</div>
					<div className="font-bold flex items-center text-black dark:text-gray-200">
						Learn more
						<FaLongArrowAltRight className="ml-2 text-yellow-500 dark:text-red-500" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;

import { FaArrowRight } from "react-icons/fa";
import { projects } from "../assets/assets";
import { motion } from "motion/react";

const Projects = () => {
	return (
		<div id="projects" className="mt- px-6 sm:px-10 lg:px-14 py-10 ">
			{/* Title & Button Section */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: false }}
					className="font-bold text-4xl dark:text-white"
				>
					My Latest{" "}
					<span className="text-yellow-500 dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:via-[#1e3a8a] dark:to-[#1e40af] dark:bg-clip-text dark:text-transparent  italic">
						Projects
					</span>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 1 }}
					// viewport={{ once: false }}
					className="flex items-center hover:scale-103 transition-all duration-100 cursor-pointer"
				>
					<div className="flex border-yellow-500 dark:border-red-700 border-3 rounded-full px-6 py-1.5 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-white font-semibold cursor-pointer z-10">
						View My Projects
					</div>
					<button className="flex items-center justify-end bg-yellow-500 dark:bg-red-700  rounded-full py-1.5 px-1 -ml-9  z-0 shadow-lg w-17 border-3 border-yellow-500 dark:border-red-700 cursor-pointer">
						<FaArrowRight className="text-black text-2xl p-1 rounded-2xl bg-white" />
					</button>
				</motion.div>
			</div>

			{/* Responsive Grid Section */}
			<section className="grid grid-cols-1 sm:grid-cols-2 md:gap-8 gap-4 lg:mx-24 sm:mx-2 items-stretch">
				{projects.map((project) => (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: project.id * 0.2 }}
						viewport={{ once: false }}
						key={project.id}
						className=" bg-gray-100 shadow-2xl dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f172a] rounded-xl p-4 flex flex-col h-full hover:scale-103 transition-all duration-200 cursor-pointer"
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 1 }}
							// viewport={{ once: false }}
							className="h-[200px] sm:h-[250px] md:h-[300px] rounded-lg"
						>
							<img
								src={project.image}
								alt={project.alt_pic}
								className="object- w-full h-full shadow-md rounded-lg"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 1.3 }}
							// viewport={{ once: false }}
							className="flex gap-2 my-4"
						>
							{project.techs.map((tech, index) => (
								<h2
									key={index}
									className="border rounded-full bg-yellow-500 dark:bg-red-700 dark:text-white border-none p-1 sm:p-1.5 md:text-base text-sm font-semibold shadow-sm"
								>
									{tech}
								</h2>
							))}
						</motion.div>
						<h1 className="md:font-bold font-semibold text-xl dark:text-white">
							{project.title}
						</h1>
						<div className="flex md:justify-between justify-center md:mx-8 my-2 gap-4">
							<motion.a
								href={
									project.view_code
										? project.view_code
										: undefined
								}
								target={
									project.view_code ? "_blank" : undefined
								}
								rel="noopener noreferrer"
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 1 }}
								// viewport={{ once: false }}
								className={`rounded-full  p-1.5 sm:p-2 md:text-base text-sm font-semibold shadow-md text-center ${
									project.view_code
										? "bg-green-700 text-gray-300 cursor-pointer hover:scale-105 transition"
										: "bg-gray-400 text-gray-200 cursor-not-allowed opacity-60 pointer-events-none"
								}`}
							>
								View Code
							</motion.a>
							<motion.a
								href={
									project.live_demo
										? project.live_demo
										: undefined
								}
								target={
									project.live_demo ? "_blank" : undefined
								}
								rel="noopener noreferrer"
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 1 }}
								// viewport={{ once: false }}
								className={`rounded-full  p-1.5 sm:p-2 md:text-base text-sm font-semibold shadow-md text-center ${
									project.live_demo
										? "bg-green-700 text-gray-300 cursor-pointer hover:scale-105 transition"
										: "bg-gray-400 text-gray-200 cursor-not-allowed opacity-60 pointer-events-none"
								}`}
							>
								Live Preview
							</motion.a>
						</div>
					</motion.div>
				))}
			</section>
		</div>
	);
};

export default Projects;

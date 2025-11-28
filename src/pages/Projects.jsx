import { FaArrowRight } from "react-icons/fa";
import { projects } from "../assets/assets";
const Projects = () => {
	return (
		<div className="mt- px-6 sm:px-10 lg:px-14 py-10 ">
			{/* Title & Button Section */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
				<div className="font-bold text-4xl dark:text-white">
					My Latest{" "}
					<span className="text-yellow-500 dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:via-[#1e3a8a] dark:to-[#1e40af] dark:bg-clip-text dark:text-transparent  italic">Projects</span>
				</div>

				<div className="flex items-center">
					<div className="flex border-yellow-500 dark:border-red-700 border-3 rounded-full px-6 py-1.5 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-white font-semibold cursor-pointer z-10">
						View My Projects
					</div>
					<button className="flex items-center justify-end bg-yellow-500 dark:bg-red-700  rounded-full py-1.5 px-1 -ml-9  z-0 shadow-lg w-17 border-3 border-yellow-500 dark:border-red-700 cursor-pointer">
						<FaArrowRight className="text-black text-2xl p-1 rounded-2xl bg-white" />
					</button>
				</div>
			</div>

			{/* Responsive Grid Section */}
			<section className="grid grid-cols-1 sm:grid-cols-2 md:gap-8 gap-4 lg:mx-24 sm:mx-2 items-stretch">
				{projects.map((project) => (
					<div
						key={project.id}
						className=" bg-gray-100 shadow-2xl dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f172a] rounded-xl p-4 flex flex-col h-full"
					>
						<div className="h-[200px] sm:h-[250px] md:h-[300px] rounded-lg">
							<img
								src={project.image}
								alt={project.alt_pic}
								className="object- w-full h-full shadow-md rounded-lg"
							/>
						</div>
						<div className="flex gap-2 my-4">
							{project.techs.map((tech, index) => (
								<h2
									key={index}
									className="border rounded-full bg-yellow-500 dark:bg-red-700 dark:text-white border-none p-1 sm:p-1.5 md:text-base text-sm font-semibold shadow-sm"
								>
									{tech}
								</h2>
							))}
						</div>
						<h1 className="md:font-bold font-semibold text-xl dark:text-white">
							{project.title}
						</h1>
						<div className="flex md:justify-between justify-center md:mx-8 my-2 gap-4">
							<button className="rounded-full bg-green-700 text-gray-300 p-1.5 sm:p-2 md:text-base text-sm font-semibold shadow-md cursor-pointer">
								View Code
							</button>
							<button className="font-semibold rounded-full p-1.5 bg-green-700 text-gray-300 shadow-md cursor-pointer">
								Live Preview
							</button>
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default Projects;

import React from "react";

const AllProjectList = () => {
	return (
		<div className="bg-gray-200 mt-14 px-6 sm:px-10 lg:px-14 py-10">
			{/* Title & Button Section */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
				<div className="font-bold text-4xl">
					My Latest{" "}
					<span className="text-yellow-500 italic">Projects</span>
				</div>

				<div className="flex items-center">
					<div className="flex border-yellow-500 dark:border-red-700 border-3 rounded-full px-6 py-1.5 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-white font-semibold cursor-pointer z-10">
						View My Projects
					</div>
					<button className="flex items-center justify-end bg-yellow-500 dark:bg-red-700  rounded-full py-1.5 px-1 -ml-9 cursor-pointer z-0 shadow-lg w-17 border-3 border-yellow-500 dark:border-red-700">
						<FaArrowRight className="text-black text-2xl p-1 rounded-2xl bg-white" />
					</button>
				</div>
			</div>

			{/* Responsive Grid Section */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:gap-8 gap-4 lg:mx-24 sm:mx-2 items-stretch">
				<div className=" bg-white rounded-xl p-4 flex flex-col h-full">
					<div className="h-[200px] sm:h-[250px] md:h-[300px] rounded-lg">
						<img
							src="./src/assets/project.png"
							alt="BBMS"
							className="object-cover w-full h-full shadow-md rounded-lg"
						/>
					</div>
					<div className="flex gap-2 my-4">
						<h2 className="border rounded-full bg-yellow-500 p-1 sm:p-1.5 md:text-base text-sm font-semibold">
							ReactJS
						</h2>
						<h2 className="border rounded-full bg-yellow-500 p-1 sm:p-1.5 md:text-base text-sm font-semibold">
							TailwindCSS
						</h2>
					</div>
					<h1 className="md:font-bold font-semibold text-xl">
						BBMS - Blood Bank Management System
					</h1>
					<div className="flex md:justify-between justify-center md:mx-8 my-2 gap-4">
						<button className="rounded-full bg-green-700 text-gray-300 p-1.5 sm:p-2 md:text-base text-sm font-semibold ">
							View Code
						</button>
						<button className="font-semibold rounded-full p-1.5 bg-green-700 text-gray-300">
							Live Preview
						</button>
					</div>
				</div>
				<div className=" bg-white rounded-xl p-4 flex flex-col h-full">
					<div className="h-[200px] sm:h-[250px] md:h-[300px] rounded-lg">
						<img
							src="./src/assets/project.png"
							alt="BBMS"
							className="object-cover w-full h-full shadow-md rounded-lg"
						/>
					</div>
					<div className="flex gap-2 my-4">
						<h2 className="border rounded-full bg-yellow-500 p-1 sm:p-1.5 md:text-base text-sm font-semibold">
							ReactJS
						</h2>
						<h2 className="border rounded-full bg-yellow-500 p-1 sm:p-1.5 md:text-base text-sm font-semibold">
							TailwindCSS
						</h2>
					</div>
					<h1 className="md:font-bold font-semibold text-xl">
						BBMS - Blood Bank Management System
					</h1>
					<div className="flex md:justify-between justify-center md:mx-8 my-2 gap-4">
						<button className="rounded-full bg-green-700 text-gray-300 p-1.5 sm:p-2 md:text-base text-sm font-semibold ">
							View Code
						</button>
						<button className="font-semibold rounded-full p-1.5 bg-green-700 text-gray-300">
							Live Preview
						</button>
					</div>
				</div>
				<div className=" bg-white rounded-xl p-4 flex flex-col h-full">
					<div className="h-[200px] sm:h-[250px] md:h-[300px] rounded-lg">
						<img
							src="./src/assets/project.png"
							alt="BBMS"
							className="object-cover w-full h-full shadow-md rounded-lg"
						/>
					</div>
					<div className="flex gap-2 my-4">
						<h2 className="border rounded-full bg-yellow-500 p-1 sm:p-1.5 md:text-base text-sm font-semibold">
							ReactJS
						</h2>
						<h2 className="border rounded-full bg-yellow-500 p-1 sm:p-1.5 md:text-base text-sm font-semibold">
							TailwindCSS
						</h2>
					</div>
					<h1 className="md:font-bold font-semibold text-xl">
						BBMS - Blood Bank Management System
					</h1>
					<div className="flex md:justify-between justify-center md:mx-8 my-2 gap-4">
						<button className="rounded-full bg-green-700 text-gray-300 p-1.5 sm:p-2 md:text-base text-sm font-semibold ">
							View Code
						</button>
						<button className="font-semibold rounded-full p-1.5 bg-green-700 text-gray-300">
							Live Preview
						</button>
					</div>
				</div>
				<div className=" bg-white rounded-xl p-4 flex flex-col h-full">
					<div className="h-[200px] sm:h-[250px] md:h-[300px] rounded-lg">
						<img
							src="./src/assets/project.png"
							alt="BBMS"
							className="object-cover w-full h-full shadow-md rounded-lg"
						/>
					</div>
					<div className="flex gap-2 my-4">
						<h2 className="border rounded-full bg-yellow-500 p-1 sm:p-1.5 md:text-base text-sm font-semibold">
							ReactJS
						</h2>
						<h2 className="border rounded-full bg-yellow-500 p-1 sm:p-1.5 md:text-base text-sm font-semibold">
							TailwindCSS
						</h2>
					</div>
					<h1 className="md:font-bold font-semibold text-xl">
						BBMS - Blood Bank Management System
					</h1>
					<div className="flex md:justify-between justify-center md:mx-8 my-2 gap-4">
						<button className="rounded-full bg-green-700 text-gray-300 p-1.5 sm:p-2 md:text-base text-sm font-semibold ">
							View Code
						</button>
						<button className="font-semibold rounded-full p-1.5 bg-green-700 text-gray-300">
							Live Preview
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllProjectList;

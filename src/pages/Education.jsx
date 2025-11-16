import React from "react";
import { FaTools } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";
import { RiGraduationCapFill } from "react-icons/ri";

const Education = () => {
	return (
		<>
			<div className="flex flex-col items-center">
				<div>
					<h1 className="text-4xl font-bold my-10 w-120 text-center text-black dark:text-white">
						My{" "}
						<span className="text-yellow-500 dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:via-[#1e3a8a] dark:to-[#1e40af] dark:bg-clip-text dark:text-transparent">
							Academic Journey and
						</span>{" "}
						Skills
					</h1>
				</div>
				<div className="flex gap-40">
					{/* My Academic Journey */}
					<div className="border dark:border-none border-gray-300 p-7 rounded-lg bg-gray-200 dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#1e40af]">
						<h1 className="text-2xl font-bold flex gap-2 items-center text-black dark:text-white">
							<RiGraduationCapFill className="rounded-full h-9 w-9 p-1.5 bg-yellow-500 dark:bg-red-700" />
							<span className="mt-1">Education</span>
						</h1>
						<div className="border-t-3 border-gray-300 dark:border-red-600 my-3">
							<div className="my-5 border-l-5 border-gray-400 dark:border-red-700">
								<div className="ml-4">
									<h3 className="dark:text-gray-400">
										2019 − Present
									</h3>
									<h1 className="text-xl font-bold dark:text-gray-200">
										Bachelor in Computer Engineering
									</h1>
									<h3 className="dark:text-gray-400">
										Eastern College of Engineering
									</h3>
								</div>
							</div>
							<div className="my-5 border-l-5 border-gray-400 dark:border-red-700">
								<div className="ml-4">
									<h3 className="dark:text-gray-400">2016 − 2019</h3>
									<h1 className="text-xl font-bold dark:text-gray-200">
										Diploma in Computer Engineering
									</h1>
									<h3 className="dark:text-gray-400">
										Adarsha Secondary School
									</h3>
								</div>
							</div>
						</div>
					</div>
					{/* My Skills */}
					<div className="border dark:border-none border-gray-300 p-7 rounded-lg bg-gray-200 dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#1e40af]">
						<h1 className="text-2xl font-bold flex gap-2 items-center text-black dark:text-white">
							<FaTools className="rounded-full h-9 w-9 p-1.5 bg-yellow-500 dark:bg-red-700" />
							<span className="mt-1">Skills</span>
						</h1>
						<div className="border-t-3 border-gray-300 dark:border-red-600 my-3">
							<div className="my-5 border-l-5 border-gray-400 dark:border-red-700">
								<div className="ml-4">
									<h3 className="dark:text-gray-400">
										2019 − Present
									</h3>
									<h1 className="text-xl font-bold dark:text-gray-200">
										Bachelor in Computer Engineering
									</h1>
									<h3 className="dark:text-gray-400">
										Eastern College of Engineering
									</h3>
								</div>
							</div>
							<div className="my-5 border-l-5 border-gray-400 dark:border-red-700">
								<div className="ml-4">
									<h3 className="dark:text-gray-400">2016 − 2019</h3>
									<h1 className="text-xl font-bold dark:text-gray-200">
										Diploma in Computer Engineering
									</h1>
									<h3 className="dark:text-gray-400">
										Adarsha Secondary School
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Education;

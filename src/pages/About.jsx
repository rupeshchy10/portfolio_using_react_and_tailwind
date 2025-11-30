import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const About = () => {
	return (
		<>
			<div className="lg:h-[600px] bg-[#005427] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f172a] flex items-center justify-center text-white w-full">
				<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 md:px-10 lg:px-20">
					{/* -----------------Image Left Portion------------- */}
					<div className="mt-18 lg:mt-0 flex items-center justify-center">
						<div className="bg-yellow-500 dark:bg-red-700 w-64 h-64 md:w-80 md:h-80  rounded-full flex items-center justify-center ">
							Cirle
						</div>
					</div>

					{/* ----------------Right portion-------------- */}
					<div className="flex items-center mb-18 lg:mb-0">
						<div className="w-full max-w-xl mx-auto lg:mx-0">
							<div className="text-center lg:text-left ">
								<span>--</span> About Me
							</div>

							<div className="text-3xl md:text-4xl font-bold mt-2 text-center lg:text-left">
								Who is{" "}
								<span className="text-yellow-600 dark:text-green-600 italic">
									Rupesh Choudhary?
								</span>
							</div>

							<div className="my-4 space-y-2 text-justify">
								<p>
									A Computer Engineering student from
									Biratnagar, Nepal, passionate about sleek,
									responsive web interfaces using React.js,
									JavaScript, and Tailwind CSS.
								</p>
								<p>
									Currently exploring backend development with
									Node.js, Express, and PostgreSQL (PERN
									stack) to understand full-stack concepts.
								</p>
								<p>
									His goal is to start as a React.js developer
									and gradually evolve into a full-stack
									engineer while working on impactful
									real-world projects.
								</p>
							</div>

							<div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                {/* -------------Button Group---------- */}
								<div className="flex items-center">
									<div className="flex border-yellow-500 dark:border-red-700 border-3 rounded-full px-6 py-1.5 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-white font-semibold cursor-pointer z-10">
										Download CV
									</div>
									<button className="flex items-center justify-end bg-yellow-500 dark:bg-red-700  rounded-full py-1.5 px-1 -ml-9 cursor-pointer z-0 shadow-lg w-17 border-3 border-yellow-500 dark:border-red-700">
										<FaArrowCircleDown className="text-white text-2xl rounded-full bg-black" />
									</button>
								</div>

                                {/* -------------Signature------------ */}
								<div className="flex items-center border-2 mx-8 text-yellow-700 dark:text-red-700">
									Signature
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;

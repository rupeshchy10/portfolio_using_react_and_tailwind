import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const About = () => {
	return (
		<>
			<div className="h-[600px] bg-[#005427] flex items-center justify-center text-white">
				<div className="bg-500 h-[500px] w-[1200px] flex items-center justify-between mx-50">
					<div className="bg-blue-700 w-80 h-80 rounded-full flex items-center justify-center mx-10">
						Cirle
					</div>
					<div className="bg-500 w-170 h-85">
						<div>
							<span>--</span> About Me
						</div>
						<div className="text-4xl font-bold mt-2">
							Who is{" "}
							<span className="text-blue-700">Rupesh Choudhary?</span>
						</div>
						<div className="my-3 space-y-2 text-justify">
							<p>
								A Computer Engineering student from Biratnagar, Nepal,
								passionate about sleek, responsive web interfaces using
								React.js, JavaScript, and Tailwind CSS.
							</p>
							<p>
								Currently exploring backend development with Node.js,
								Express, and PostgreSQL (PERN stack) to understand
								full-stack concepts.
							</p>
							<p>
								His goal is to start as a React.js developer and
								gradually evolve into a full-stack engineer while
								working on impactful real-world projects.
							</p>
						</div>
						<div className="flex">
							<div className="flex items-center">
								<div className="flex border-blue-700 border-2 rounded-4xl px-6 py-1 bg-[#005427] text-white font-semibold cursor-pointer z-10">
									Download CV
								</div>

								<button className="flex items-center justify-end bg-blue-700 rounded-full py-1 px-1 -ml-8 cursor-pointer z-0 shadow-lg w-16 border-blue-700 border-2">
									<FaArrowCircleDown className="text-white text-2xl" />
								</button>
							</div>
							<div className="flex items-center border-2 mx-8 text-blue-700">
								Signature
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;

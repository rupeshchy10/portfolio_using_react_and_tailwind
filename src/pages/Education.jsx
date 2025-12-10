import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../assets/assets";

const Education = () => {
	return (
		<section id="education" className="px-4 md:px-16 py-16 bg-white dark:bg-[#0b0f1a] text-black dark:text-white">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
					🎓 My <span className="text-yellow-500 dark:text-blue-700">Education</span>
				</h2>

				<div className="relative flex gap-10 mx-10 sm:mx-15">
					{/* Vertical Line */}
					<div className="absolute left-2 md:left-10 lg:left-20 top-0 w-1.5 h-full bg-gray-300 dark:bg-gray-500"/>

					{/* Education Cards */}
					<div className="flex flex-col gap-16 ml-10 md:ml-34 lg:ml-54 w-full">
						{educationData.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.2,
								}}
								viewport={{ once: false }}
								className="relative"
							>
								{/* Horizontal Line */}
								<div className="absolute left-[-24px] md:left-[-91px] lg:left-[-132px] top-28 sm:top-22 md:top-22 lg:top-24 xl:top-23 w-6 md:w-23 lg:w-33 h-1.5 bg-gray-300 dark:bg-gray-500"/>

								{/* Dot */}
								<div className="absolute left-[-34px] md:left-[-101px] lg:left-[-141px] top-27 sm:top-21 md:top-21 lg:top-23 xl:top-22 w-4 h-4 md:w-4 md:h-4 rounded-full bg-white border-4 border-gray-300 dark:border-gray-500 dark:bg-[#0b0f1a]"/>

								{/* Card */}
								<div className="border border-gray-300 dark:border-gray-700 rounded-lg p-5 lg:p-7 bg-gray-200 dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#1e40af] shadow-md w-full max-w-xl hover:scale-105 dark:hover:border-gray-500 transition-all duration- cursor-pointer">
									<h3 className="text-sm text-gray-500 border-gray-400 dark:border-gray-400 dark:text-gray-400 mb-1 border-t-3">
										{item.year}
									</h3>
									<h2 className="text-lg md:text-xl font-semibold dark:text-gray-200">
										{item.degree}
									</h2>
									<h3 className="dark:text-gray-400 text-sm md:text-base">
										{item.institute}
									</h3>
									<p className="text-sm mt-3 dark:text-gray-300 border-gray-400 dark:border-gray-400 leading-relaxed border-b-3">
										{item.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;

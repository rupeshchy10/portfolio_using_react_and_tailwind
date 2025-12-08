import { FaArrowRight, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { countries } from "../assets/assets";
import { motion } from "motion/react";

const Contact = () => {
	return (
		<>
			<div id="contact" className="bg-[#005427] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f172a] flex items-center justify-center text-white">
				<div className="flex flex-col lg:flex-row justify-between my-15 lg:gap-20">
					{/* Left Portion */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						// viewport={{ once: false }}
						className="mb-10 max-w-xl px-4 text-center lg:text-left"
					>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
							Let's Talk for{" "}
							<span className="text-yellow-600 dark:text-green-600">
								Your <p>Next Projects</p>
							</span>
						</h1>

						<h3 className="my-6 text-base sm:text-lg lg:text-xl">
							I'm open to internships, collaborations, or
							freelance opportunities.
						</h3>

						<ul className="text-base sm:text-lg space-y-4">
							<li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
								<FaPhoneAlt className="min-w-[32px] min-h-[32px] p-2 rounded-full bg-yellow-500 dark:bg-green-600 text-black" />
								<span className="break-all text-center sm:text-left">
									+977-9862885899
								</span>
							</li>

							<li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
								<MdEmail className="min-w-[32px] min-h-[32px] p-2 rounded-full bg-yellow-500 dark:bg-green-600 text-black" />
								<span className="break-all text-center sm:text-left">
									rupevilary1010@gmail.com
								</span>
							</li>

							<li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
								<FaLinkedinIn className="min-w-[32px] min-h-[32px] p-2 rounded-full bg-yellow-500 dark:bg-green-600 text-black" />
								<span className="text-center sm:text-left">
									LinkedIn
								</span>
							</li>

							<li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
								<FaLocationDot className="min-w-[32px] min-h-[32px] p-2 rounded-full bg-yellow-500 dark:bg-green-600 text-black" />
								<span className="break-words text-center sm:text-left">
									Katahari-4, Morang, Nepal
								</span>
							</li>
						</ul>
					</motion.div>

					{/* ---------------Right Portion------------ */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						// viewport={{ once: false }}
						className="bg-blue- flex flex-col col-span-2"
					>
						{/* -------------NAME + EMAIL--------------- */}
						<div className="flex flex-col md:flex-row m-4 gap-4">
							<div className="flex flex-col md:w-1/2 w-full">
								<label>
									Your Name{" "}
									<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									placeholder="Ex. John Smith"
									className="focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#326232af] dark:bg-blue-900 dark:border-blue-800 dark:border-1 rounded-lg p-2"
								/>
							</div>
							<div className="flex flex-col md:w-1/2 w-full">
								<label>
									Email{" "}
									<span className="text-red-500">*</span>
								</label>
								<input
									type="email"
									placeholder="example123@gmail.com"
									className="focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#326232af] dark:bg-blue-900 dark:border-blue-800 dark:border-1 rounded-lg p-2"
								/>
							</div>
						</div>

						{/* --------------PHONE + COUNTRY------------ */}

						<div className="flex flex-col md:flex-row m-4 gap-4">
							<div className="flex flex-col w-full md:w-1/2">
								<label>
									Phone No.{" "}
									<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									placeholder="Ex. John Smith"
									className="focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#326232af] dark:bg-blue-900 dark:border-blue-800 dark:border rounded-lg p-2"
								/>
							</div>
							<div className="flex flex-col w-full md:w-1/2">
								<label className="">
									Country{" "}
									<span className="text-red-500">*</span>
								</label>

								<select className="focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#326232af] rounded-lg p-2.5 mt- dark:bg-blue-900 dark:border-blue-800 dark:border">
									<option value="">
										Select your country
									</option>
									{countries.map((country) => (
										<option
											key={country}
											value={country.toLowerCase()}
										>
											{country}
										</option>
									))}
								</select>
							</div>
						</div>

						{/* -------------MESSAGE-------------- */}
						<div className="m-4">
							<label>
								Your Message{" "}
								<span className="text-red-500">*</span>
							</label>
							<textarea
								placeholder="Enter here..."
								className="focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#326232af] rounded-lg w-full h-40 p-2 resize-none align-top dark:bg-blue-900 dark:border-blue-800 dark:border"
							/>
						</div>

						{/* ---------------SUBMIT------------- */}
						<div className="flex items-center my-5 mx-4 md:justify-start sm:justify-center">
							<div className="border-yellow-500 dark:border-red-700 border-2 rounded-full px-6 py-1.5 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-white font-semibold cursor-pointer z-10  hover:scale-103 transition">
								Submit
							</div>
							<button className="flex items-center justify-end bg-yellow-500 dark:bg-red-700  rounded-full py-1.5 px-1 -ml-9 cursor-pointer z-0 shadow-lg w-17 border-2 border-yellow-500 dark:border-red-700">
								<FaArrowRight className="text-black text-2xl p-1 rounded-2xl bg-white" />
							</button>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};
export default Contact;

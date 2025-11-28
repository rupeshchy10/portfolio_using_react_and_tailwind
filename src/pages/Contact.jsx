import { FaArrowRight, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
	const countries = [
		"Afghanistan",
		"Albania",
		"Algeria",
		"Andorra",
		"Angola",
		"Antigua and Barbuda",
		"Argentina",
		"Armenia",
		"Australia",
		"Austria",
		"Azerbaijan",
		"Bahamas",
		"Bahrain",
		"Bangladesh",
		"Barbados",
		"Belarus",
		"Belgium",
		"Belize",
		"Benin",
		"Bhutan",
		"Bolivia",
		"Bosnia and Herzegovina",
		"Botswana",
		"Brazil",
		"Brunei",
		"Bulgaria",
		"Burkina Faso",
		"Burundi",
		"Cabo Verde",
		"Cambodia",
		"Cameroon",
		"Canada",
		"Central African Republic",
		"Chad",
		"Chile",
		"China",
		"Colombia",
		"Comoros",
		"Congo (Congo-Brazzaville)",
		"Costa Rica",
		"Croatia",
		"Cuba",
		"Cyprus",
		"Czech Republic (Czechia)",
		"Democratic Republic of the Congo",
		"Denmark",
		"Djibouti",
		"Dominica",
		"Dominican Republic",
		"Ecuador",
		"Egypt",
		"El Salvador",
		"Equatorial Guinea",
		"Eritrea",
		"Estonia",
		"Eswatini (fmr. Swaziland)",
		"Ethiopia",
		"Fiji",
		"Finland",
		"France",
		"Gabon",
		"Gambia",
		"Georgia",
		"Germany",
		"Ghana",
		"Greece",
		"Grenada",
		"Guatemala",
		"Guinea",
		"Guinea-Bissau",
		"Guyana",
		"Haiti",
		"Holy See",
		"Honduras",
		"Hungary",
		"Iceland",
		"India",
		"Indonesia",
		"Iran",
		"Iraq",
		"Ireland",
		"Israel",
		"Italy",
		"Jamaica",
		"Japan",
		"Jordan",
		"Kazakhstan",
		"Kenya",
		"Kiribati",
		"Kuwait",
		"Kyrgyzstan",
		"Laos",
		"Latvia",
		"Lebanon",
		"Lesotho",
		"Liberia",
		"Libya",
		"Liechtenstein",
		"Lithuania",
		"Luxembourg",
		"Madagascar",
		"Malawi",
		"Malaysia",
		"Maldives",
		"Mali",
		"Malta",
		"Marshall Islands",
		"Mauritania",
		"Mauritius",
		"Mexico",
		"Micronesia",
		"Moldova",
		"Monaco",
		"Mongolia",
		"Montenegro",
		"Morocco",
		"Mozambique",
		"Myanmar (formerly Burma)",
		"Namibia",
		"Nauru",
		"Nepal",
		"Netherlands",
		"New Zealand",
		"Nicaragua",
		"Niger",
		"Nigeria",
		"North Korea",
		"North Macedonia",
		"Norway",
		"Oman",
		"Pakistan",
		"Palau",
		"Palestine State",
		"Panama",
		"Papua New Guinea",
		"Paraguay",
		"Peru",
		"Philippines",
		"Poland",
		"Portugal",
		"Qatar",
		"Romania",
		"Russia",
		"Rwanda",
		"Saint Kitts and Nevis",
		"Saint Lucia",
		"Saint Vincent and the Grenadines",
		"Samoa",
		"San Marino",
		"Sao Tome and Principe",
		"Saudi Arabia",
		"Senegal",
		"Serbia",
		"Seychelles",
		"Sierra Leone",
		"Singapore",
		"Slovakia",
		"Slovenia",
		"Solomon Islands",
		"Somalia",
		"South Africa",
		"South Korea",
		"South Sudan",
		"Spain",
		"Sri Lanka",
		"Sudan",
		"Suriname",
		"Sweden",
		"Switzerland",
		"Syria",
		"Tajikistan",
		"Tanzania",
		"Thailand",
		"Timor-Leste",
		"Togo",
		"Tonga",
		"Trinidad and Tobago",
		"Tunisia",
		"Turkey",
		"Turkmenistan",
		"Tuvalu",
		"Uganda",
		"Ukraine",
		"United Arab Emirates",
		"United Kingdom",
		"United States of America",
		"Uruguay",
		"Uzbekistan",
		"Vanuatu",
		"Venezuela",
		"Vietnam",
		"Yemen",
		"Zambia",
		"Zimbabwe",
	];

	return (
		<>
			<div className="h-[600px] bg-[#005427] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f172a] flex items-center justify-center text-white">
				<div className="flex justify-between my-15 mx-20">
					{/* Left Portion */}
					<div className="bg-red-">
						<h1 className="text-5xl font-semibold w-120">
							Let's Talk for{" "}
							<span className="text-yellow-600 dark:text-green-600">Your Next Projects</span>
						</h1>
						<h3 className="my-7 text-xl">
							I'm open to internships, collaborations, or freelance
							opportunities
						</h3>
						<ul className="text-xl">
							<li className="flex my-3 gap-2">
								<FaPhoneAlt className="rounded-full w-8 h-8 p-1.5 bg-yellow-500 dark:bg-green-600 text-black" />
								+977-9862885899
							</li>
							<li className="flex my-3 gap-2">
								<MdEmail className="rounded-full w-8 h-8 p-1.5 bg-yellow-500 dark:bg-green-600 text-black" />
								rupevilary1010@gmail.com
							</li>
							<li className="flex my-3 gap-2">
								<FaLinkedinIn className="rounded-full w-8 h-8 p-1.5 bg-yellow-500 dark:bg-green-600 text-black" />
								LinkedIn
							</li>
							<li className="flex my-3 gap-2">
								<FaLocationDot className="rounded-full w-8 h-8 p-1.5 bg-yellow-500 dark:bg-green-600 text-black" />
								Katahari-4, Morang, Nepal
							</li>
						</ul>
					</div>
					{/* Right Portion */}
					<div className="bg-blue-">
						<div>
							<div className="flex m-4 gap-4">
								<div className="flex flex-col w-75">
									<label>
										Your Name <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										placeholder="Ex. John Smith"
										className="focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#326232af] dark:bg-blue-900 dark:border-blue-800 dark:border-1 rounded-lg p-2"
									/>
								</div>
								<div className="flex flex-col w-75">
									<label>
										Email <span className="text-red-500">*</span>
									</label>
									<input
										type="email"
										placeholder="example123@gmail.com"
										className="focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#326232af] dark:bg-blue-900 dark:border-blue-800 dark:border-1 rounded-lg p-2"
									/>
								</div>
							</div>
							<div className="flex m-4 gap-4">
								<div className="flex flex-col w-75">
									<label>
										Phone No. <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										placeholder="Ex. John Smith"
										className="focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#326232af] dark:bg-blue-900 dark:border-blue-800 dark:border-1 rounded-lg p-2"
									/>
								</div>
								<div className="flex flex-col w-75">
									<label className="font-medium">
										Country <span className="text-red-500">*</span>
									</label>

									<select className="focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#326232af] rounded-lg p-2 mt-1 dark:bg-blue-900 dark:border-blue-800 dark:border-1">
										<option value="">Select your country</option>
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

							<div className="m-4 gap-4">
								<label>
									Your Message <span className="text-red-500">*</span>
								</label>
								<textarea
									placeholder="Enter here..."
									className="focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#326232af] rounded-lg w-full h-40 p-2 resize-none align-top dark:bg-blue-900 dark:border-blue-800 dark:border-1"
								/>
							</div>
							

							<div className="flex items-center my-5 mx-4">
								<div className="flex border-yellow-500 dark:border-red-700 border-2 rounded-full px-6 py-1.5 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-white font-semibold cursor-pointer z-10">
									Submit
								</div>
								<button className="flex items-center justify-end bg-yellow-500 dark:bg-red-700  rounded-full py-1.5 px-1 -ml-9 cursor-pointer z-0 shadow-lg w-17 border-2 border-yellow-500 dark:border-red-700">
									<FaArrowRight className="text-black text-2xl p-1 rounded-2xl bg-white" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;

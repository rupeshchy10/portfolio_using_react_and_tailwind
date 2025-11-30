import React from "react";
import { CgPlayButtonO } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { GiStaryu } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import { PiCursorClickBold } from "react-icons/pi";

const MarqueeItems = () => {
	return (
		<>
			<li className="text-lg md:text-xl">
				<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
			</li>

			<li className="text-sm sm:text-base md:text-xl">HTML</li>
			<li className="text-lg md:text-xl">
				<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
			</li>
			<li className="text-sm sm:text-base md:text-xl">CSS</li>
			<li className="text-lg md:text-xl">
				<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
			</li>
			<li className="text-sm sm:text-base md:text-xl">JavaScript</li>
			<li className="text-lg md:text-xl">
				<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
			</li>
			<li className="text-sm sm:text-base md:text-xl">ReactJS</li>
			<li className="text-lg md:text-xl">
				<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
			</li>
			<li className="text-sm sm:text-base md:text-xl">NodeJS</li>
			<li className="text-lg md:text-xl">
				<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
			</li>
			<li className="text-sm sm:text-base md:text-xl">PostgreSQL</li>
			<li className="text-lg md:text-xl">
				<GiStaryu className="dark:text-[#ff4d4d] dark:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)] transition-all duration-300" />
			</li>
		</>
	);
};

export default MarqueeItems;

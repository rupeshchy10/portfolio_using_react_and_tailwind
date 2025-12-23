import { useEffect, useRef, useState } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { FaPhone } from "react-icons/fa6";

const NavBar = ({ theme, setTheme, scrollRef }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [showNav, setShowNav] = useState(true);

	// NavBar links
	const menus = [
		{ label: "Home", href: "#home" },
		{ label: "Features", href: "#features" },
		{ label: "About", href: "#about" },
		{ label: "Education", href: "#education" },
		{ label: "Projects", href: "#projects" },
	];

	const lastScrollY = useRef(0);

	//Scroll Logic
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = scrollRef.current.scrollTop;

			if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
				setShowNav(false); // scrolling down -> hide
			} else {
				setShowNav(true); // scrolling up -> show
			}

			lastScrollY.current = currentScrollY;
		};

		const container = scrollRef.current;
		if (!container) return;
		container.addEventListener("scroll", handleScroll);

		return () => container.removeEventListener("scroll", handleScroll);
	}, [scrollRef]);

	return (
		<>
			{/* Wrapper */}
			<div
				className={`fixed top-6 left-0 w-full z-50 transition-transform duration-800 ${
					showNav ? "translate-y-0" : "-translate-y-20"
				}`}
			>
				{/* Navbar */}
				<div className="mx-6 sm:mx-4 md:mx-10 lg:mx-14 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#1e40af] text-white flex justify-between items-center  h-[3.25rem] rounded-full shadow-[0_0_25px_rgba(30,64,175,0.4)] backdrop-blur-sm border border-transparent dark:border-[#1e3a8a]/40">
					{/* Logo */}
					<a href="#home">
						<div className="text-xl sm:text-2xl font-bold m-2 flex justify-center items-center">
							<span className="bg-yellow-500 dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:via-[#1e3a8a] dark:to-[#25282b] rounded-full w-10 h-10 flex justify-center items-center text-black dark:text-white shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:shadow-[0_0_25px_rgba(59,130,246,0.9)]  mr-2 border-[#ED1C24] dark:border-2 hover:scale-105 transition-all duration-100">
								<img
									src="./Rup_logo.png"
									alt="logo_pic"
									className=""
								/>
							</span>
							Rupesh
							<span className="text-yellow-500 dark:text-[#3b82f6] dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] ml-1">
								.dev
							</span>
						</div>
					</a>

					{/* Desktop Links */}
					<ul className="hidden md:flex space-x-8 font-medium text-base">
						{menus.map((menu) => (
							<li key={menu.label}>
								<a
									href={menu.href}
									className="nav-link hover:text-yellow-500 dark:hover:text-[#60a5fa] hover:scale-105"
								>
									{menu.label}
								</a>
							</li>
						))}
					</ul>

					{/* Buttons */}
					<div className="flex items-center space-x-2">
						{/* Mobile Menu Button */}
						<button
							className="md:hidden text-xl"
							onClick={() => setIsOpen(!isOpen)}
						>
							☰
						</button>

						<ThemeToggleBtn theme={theme} setTheme={setTheme} />
						<a href="#contact">
							<button className="hidden lg:block rounded-full bg-white dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-black dark:text-white font-semibold h-10 px-8 mr-2 shadow-[0_5px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] hover:scale-105 transition-all duration-300 cursor-pointer">
								Contact Me
							</button>
						</a>

						{/* Icon for Contact Button */}
						<a href="#contact">
							<button
								className="block lg:hidden text-xl rounded-full bg-white dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-black dark:text-white font-semibold h-8 w-8 p-1.5 mr-2 shadow-[0_5px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] hover:scale-105 transition-all duration-300 cursor-pointer"
								onClick={() => setIsOpen(false)}
							>
								<FaPhone />
							</button>
						</a>
					</div>
				</div>

				{/* Mobile Nav Links */}
				{isOpen && (
					<ul className="md:hidden flex flex-col items-center space-y-4 -mt-5 mx-6 sm:mx-4 font-medium bg-[#005427] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f172a] p-6 rounded-b-3xl text-white dark:text-white shadow-[0_0_25px_rgba(30,64,175,0.4)]">
						{menus.map((menu) => (
							<li key={menu.label}>
								<a
									href={menu.href}
									onClick={() => setIsOpen(false)}
									className="hover:text-yellow-500 dark:hover:text-[#60a5fa] cursor-pointer mt-14"
								>
									{menu.label}
								</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};

export default NavBar;

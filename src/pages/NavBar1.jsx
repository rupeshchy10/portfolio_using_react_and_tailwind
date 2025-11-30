import { useState } from "react";
import ThemeToggleBtn from "../component/ThemeToggleBtn";

const NavBar = ({ theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className=" sticky z-50 top-6">
                {/* Navbar */}

                <div className="bg-[#005427] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#1e40af] text-white flex justify-between items-center mt- mx-14 h-13 rounded-4xl w- shadow-[0_0_25px_rgba(30,64,175,0.4)] backdrop-blur-sm border border-transparent dark:border-[#1e3a8a]/40">
                    
                    {/* Logo */}
                    <div className="text-2xl font-bold m-2 flex justify-center items-center">
                        <span className="bg-yellow-500 dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] rounded-full w-10 h-10 flex justify-center items-center text-black dark:text-white shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] transition-all duration-300 mr-2">
                            R
                        </span>
                        Rupesh
                        <span className="text-yellow-500 dark:text-[#3b82f6] dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] ml-1">
                            .dev
                        </span>
                    </div>

                    {/* Nav Links */}
                    <ol className="hidden md:flex space-x-8 font-medium">
                        <li className="hover:text-yellow-500 dark:hover:text-[#60a5fa] transition-colors cursor-pointer">
                            Home
                        </li>
                        <li className="hover:text-yellow-500 dark:hover:text-[#60a5fa] transition-colors cursor-pointer">
                            Features
                        </li>
                        <li className="hover:text-yellow-500 dark:hover:text-[#60a5fa] transition-colors cursor-pointer">
                            About
                        </li>
                        <li className="hover:text-yellow-500 dark:hover:text-[#60a5fa] transition-colors cursor-pointer">
                            Skills
                        </li>
                        <li className="hover:text-yellow-500 dark:hover:text-[#60a5fa] transition-colors cursor-pointer">
                            Projects
                        </li>
                    </ol>

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
                        <button className="hidden sm:block rounded-4xl bg-white dark:bg-gradient-to-r dark:from-[#0c0fb3] dark:to-[#25282b] text-black dark:text-white font-semibold h-10 px-8 mr-2 shadow-[0_5px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] hover:scale-105 transition-all duration-300 cursor-pointer">
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Links */}
                {isOpen && (
                    <ol className="md:hidden flex flex-col items-center space-y-4 mt-4 font-medium bg-[#005427] dark:bg-[#0f172a] p-4 rounded-lg">
                        <li className="hover:text-yellow-500 dark:hover:text-[#60a5fa] cursor-pointer">
                            Home
                        </li>
                        <li className="hover:text-yellow-500 dark:hover:text-[#60a5fa] cursor-pointer">
                            Services
                        </li>
                        <li className="hover:text-yellow-500 dark:hover:text-[#60a5fa] cursor-pointer">
                            About
                        </li>
                        <li className="hover:text-yellow-500 dark:hover:text-[#60a5fa] cursor-pointer">
                            Projects
                        </li>
                        <li className="hover:text-yellow-500 dark:hover:text-[#60a5fa] cursor-pointer">
                            Blogs
                        </li>
                    </ol>
                )}
            </div>
        </>
    );
};

export default NavBar;

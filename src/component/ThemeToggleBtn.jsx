import { useEffect } from "react";
import {themeIcons} from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
	useEffect(() => {
		const prefersDarkMode = window.matchMedia(
			"(prefers-color-scheme:dark)"
		).matches;
		setTheme(theme || (prefersDarkMode ? "dark" : "light"));
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<>
			<button className="hover:scale-105">
				{theme === "dark" ? (
					<img
						onClick={() => setTheme("light")}
						src={themeIcons.sun_icon}
						className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer"
						alt=""
					/>
				) : (
					<img
						onClick={() => setTheme("dark")}
						src={themeIcons.moon_icon}
						className="size-8.5 p-1.5 border border-gray-500 rounded-full bg-yellow-500 cursor-pointer"
						alt=""
					/>
				)}
			</button>
		</>
	);
};
export default ThemeToggleBtn;
import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import HomePage from "./pages/HomePage";
import NavBar from "./pages/NavBar";
import Projects from "./pages/Projects";
import Features from "./pages/Features";

const App = () => {
		const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
	);
	return (
		<>
			<div className="bg-white dark:bg-[#0a0f0d]">
				<NavBar theme={theme} setTheme={setTheme}  />
				<HomePage />
				<Features />
				<About />
				<Education />
				<Projects />
				<Contact />
			</div>
		</>
	);
};

export default App;

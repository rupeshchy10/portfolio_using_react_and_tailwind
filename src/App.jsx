import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import HomePage from "./pages/HomePage";
import NavBar from "./pages/NavBar";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Example from "./pages/Example";

const App = () => {
		const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
	);
	return (
		<>
			<div className="bg-white dark:bg-[#0a0f0d]">
				<NavBar theme={theme} setTheme={setTheme}  />
				{/* <Example/> */}
				<HomePage />
				<Services />
				<About />
				<Education />
				<Projects />
				<Contact />
			</div>
		</>
	);
};

export default App;

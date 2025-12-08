import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Features from "./pages/Features";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import MarqueeIcons from "./component/MarqueeIcons";

const App = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
	);

	// const dotRef = useRef(null);
	const outlineRef = useRef(null);

	// Refs for custom cursor position tracking
	const mouse = useRef({ x: 0, y: 0 });
	const position = useRef({ x: 0, y: 0 });

	useEffect(() => {
		if (window.innerWidth < 1024) return; // lg = 1024px

		const handleMouseMove = (e) => {
			mouse.current.x = e.clientX;
			mouse.current.y = e.clientY;
		};

		document.addEventListener("mousemove", handleMouseMove);

		let animationFrameId;

		const animate = () => {
			position.current.x += (mouse.current.x - position.current.x) * 0.1;
			position.current.y += (mouse.current.y - position.current.y) * 0.1;

			// if (dotRef.current && outlineRef.current) {
			// 	dotRef.current.style.transform = `translate3d(${
			// 		mouse.current.x - 6
			// 	}px, ${mouse.current.y - 6}px, 0)`;

			// 	outlineRef.current.style.transform = `translate3d(${
			// 		position.current.x - 20
			// 	}px, ${position.current.y - 20}px, 0)`;
			// }

			if (outlineRef.current) {
				outlineRef.current.style.transform = `translate3d(${
					position.current.x - 17
				}px, ${position.current.y - 17}px, 0)`;
			}

			animationFrameId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	const scrollRef = useRef(null);

	return (
		<>
			<div
				ref={scrollRef}
				className="bg-white dark:bg-[#0a0f0d] overflow-x-hidden no-scrollbar overflow-y-scroll h-screen"
			>
				<NavBar
					theme={theme}
					setTheme={setTheme}
					scrollRef={scrollRef}
				/>
				<HomePage />
				<Features />
                <MarqueeIcons/>
				<About theme={theme} />
				<Education />
				<Projects />
				<Contact />
				<Footer />

				{/* Custom Cursor Ring */}
				<div className="hidden lg:block">
					<div
						ref={outlineRef}
						className="fixed top-0 left-0 h-9 w-9 rounded-full border-2 border-blue-500 pointer-events-none z-[9999]"
						style={{ transition: "transform 0.1s ease-out" }}
					></div>

					{/* <div
						ref={dotRef}
						className="fixed top-0 left-0 h-3 w-3 rounded-full bg-blue-700 pointer-events-none z-[9999]"
					></div> */}
				</div>
			</div>
		</>
	);
};

export default App;

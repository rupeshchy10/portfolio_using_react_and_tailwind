import NavBar from "../component/NavBar";
import HomePage from "../component/HomePage";
import Services from "../component/Services";
import About from "../component/About";
import Contact from "../component/Contact";
import Education from "../component/Education";
const MainPage = () => {
	return (
		<>
			<div>
				<NavBar />
				<HomePage />
				<Services />
				<About />
				<Education />
				<Contact />
			</div>
		</>
	);
};

export default MainPage;

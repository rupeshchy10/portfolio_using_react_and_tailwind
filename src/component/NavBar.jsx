import React from "react";

const NavBar = () => {
	return (
		<>
			{/* <div className="bg-[#2e4da7] text-white flex justify-between items-center mx-14 mt-6 h-15 rounded-4xl"> */}
			<div className="bg-[#005427] text-white flex justify-between items-center  mt-6 mx-14 h-15 rounded-4xl">
				<div className="text-2xl font-bold mx-2">
					<span className="bg-blue-500 rounded-4xl p-2 m-1 text-black">
						R
					</span>
					Rupesh<span className="text-blue-500">.</span>
				</div>
				<div>
					<ol className="flex space-x-8">
						<li>Home</li>
						<li>Services</li>
						<li>About</li>
						<li>Projects</li>
						<li>Blogs</li>
						<li>Testimonials</li>
					</ol>
				</div>
				<button className="rounded-4xl bg-white text-black mx-2 h-10 px-8">
					Contact Me
				</button>
			</div>
		</>
	);
};

export default NavBar;

import React from "react";

const Education = () => {
	return (
		<>
			<div className="flex flex-col items-center">
				<div>
					<h3 className="my-3 text-xl">
						<span className="text-blue-500">--</span>Education
					</h3>
					<h1 className="text-4xl font-bold my-6">My <span className="text-blue-500">Academic</span> Journey</h1>
				</div>
				<div>
					<h1 className="text-2xl font-bold">Education</h1>
					<div>
						<h3>2019-Present</h3>
						<h1 className="text-xl font-bold">
							Bachelor in Computer Engineering
						</h1>
						<h3 className="">Eastern College of Engineering</h3>
					</div>
					<div>
						<h3>2016-2019</h3>
						<h1 className="text-xl font-bold">
							Diploma in Computer Engineering
						</h1>
						<h3 className="">Adarsha Secondary School</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default Education;

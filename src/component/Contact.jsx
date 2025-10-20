import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
	return (
		<>
			<div className="flex justify-between my-15 mx-20">
				<div className="bg-red-400">
					<h3 className="my-3 text-xl">
						<span className="text-blue-500">--</span> Contact Me
					</h3>
					<h1 className="text-5xl font-semibold w-120">
						Let's Talk for{" "}
						<span className="text-blue-500">Your Next Projects</span>
					</h1>
					<h3 className="my-7 text-xl">
						I'm open to internships, collaborations, or freelance
						opportunities
					</h3>
					<ul className="text-xl">
						<li className="flex my-3 gap-2">
							<FaPhoneAlt className="rounded-full w-8 h-8 p-1 bg-blue-500" />
							+977-9862885899
						</li>
						<li className="flex my-3 gap-2">
							<MdEmail className="rounded-full w-8 h-8 p-1 bg-blue-500" />
							rupevilary1010@gmail.com
						</li>
						<li className="flex my-3 gap-2">
							<FaLinkedinIn className="rounded-full w-8 h-8 p-1 bg-blue-500" />
							LinkedIn
						</li>
						<li className="flex my-3 gap-2">
							<FaLocationDot className="rounded-full w-8 h-8 p-1 bg-blue-500" />
							Katahari-4, Morang, Nepal
						</li>
					</ul>
				</div>
				<div className="bg-blue-400">
					<div>
						<div className="flex m-4 gap-4">
							<div className="flex flex-col">
								<label>Your Name *</label>
								<input
									type="text"
									placeholder="Ex. John Smith"
									className="border rounded-lg p-2"
								/>
							</div>
							<div className="flex flex-col">
								<label>Email *</label>
								<input
									type="email"
									placeholder="example123@gmail.com"
									className="border rounded-lg p-2"
								/>
							</div>
						</div>
						<div className="flex m-4 gap-4">
							<div className="flex flex-col">
								<label>Your Name *</label>
								<input
									type="text"
									placeholder="Ex. John Smith"
									className="border rounded-lg p-2"
								/>
							</div>
							<div className="flex flex-col">
								<label>Email *</label>
								<input
									type="email"
									placeholder="example123@gmail.com"
									className="border rounded-lg p-2"
								/>
							</div>
						</div>
						<div className="flex m-4 gap-4">
							<div className="flex flex-col">
								<label>Your Name *</label>
								<input
									type="text"
									placeholder="Ex. John Smith"
									className="border rounded-lg p-2"
								/>
							</div>
							<div className="flex flex-col">
								<label>Email *</label>
								<input
									type="email"
									placeholder="example123@gmail.com"
									className="border rounded-lg p-2"
								/>
							</div>
						</div>
						<div className="m-4 gap-4">
							<label>Your Message *</label>
							<input className="border rounded-lg w-full h-40" placeholder="Enter here..."/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;

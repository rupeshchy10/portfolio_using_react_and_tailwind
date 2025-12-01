// import { motion } from "framer-motion";
import { motion } from "motion/react"
import { FaMobileAlt, FaCode, FaRocket, FaBookOpen } from "react-icons/fa";

const Features = () => {
	const features = [
		{
			icon: <FaMobileAlt />,
			title: "Responsive Design",
			desc: "Mobile‑first, fully responsive layouts using React and Tailwind CSS.",
		},
		{
			icon: <FaCode />,
			title: "Clean Code",
			desc: "Component‑based structure with reusable and maintainable code.",
		},
		{
			icon: <FaRocket />,
			title: "Performance",
			desc: "Optimized React apps with fast loading and smooth experience.",
		},
		{
			icon: <FaBookOpen />,
			title: "Always Learning",
			desc: "Currently learning PERN stack to become a future full‑stack dev.",
		},
	];

	const frontendSkills = [
		"React.js",
		"JavaScript (ES6+)",
		"HTML5",
		"CSS3",
		"Tailwind CSS",
		"Framer Motion",
	];

	const tools = [
		"Git & GitHub",
		"VS Code",
		"Vite",
		"NPM",
		"Netlify / Vercel",
	];

	const learning = ["Node.js", "Express.js", "PostgreSQL", "Redux Toolkit"];

	return (
		<section className="bg-white dark:bg-[#0b0f1a] text-black dark:text-white px-6 md:px-12 py-16">
			{/* FEATURES */}
			<div className="max-w-6xl mx-auto mb-20">
				<h2 className="text-3xl font-bold text-center mb-10">
					🚀 Features
				</h2>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((item, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
                            			viewport={{ once: false }}

							className="bg-gray-100 dark:bg-[#111827] p-6 rounded-2xl shadow-md text-center flex flex-col items-center gap-4"
						>
							<div className="text-3xl text-blue-600 dark:text-blue-400">
								{item.icon}
							</div>
							<h3 className="font-semibold text-lg">
								{item.title}
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								{item.desc}
							</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* SKILLS */}
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-10">
					💻 Skills
				</h2>

				<div className="grid md:grid-cols-3 gap-10">
					<SkillBlock title="Frontend" data={frontendSkills} />
					<SkillBlock title="Tools" data={tools} />
					<SkillBlock title="Currently Learning" data={learning} />
				</div>
			</div>
		</section>
	);
};
export default Features;


function SkillBlock({ title, data }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false }}
			transition={{ duration: 0.5 }}
			className="bg-gray-100 dark:bg-[#111827] p-6 rounded-2xl shadow-md"
		>
			<h3 className="text-xl font-semibold mb-4">{title}</h3>
			<ul className="space-y-2">
				{data.map((skill, index) => (
					<li
						key={index}
						className="text-gray-700 dark:text-gray-300"
					>
						• {skill}
					</li>
				))}
			</ul>
		</motion.div>
	);
}


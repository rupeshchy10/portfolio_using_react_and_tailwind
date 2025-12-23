import React from "react";
import {
	SiReact,
	SiJavascript,
	SiHtml5,
	SiTailwindcss,
	SiFramer,
	SiGit,
	SiGithub,
	SiVite,
	SiNpm,
	SiVercel,
	SiNodedotjs,
	SiExpress,
	SiPostgresql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function MarqueeIcons({ speed = 30, iconSize = 40 }) {
	const icons = [
		<SiReact key="react" size={iconSize} color="#61DBFB" title="React" />,
		<SiJavascript
			key="js"
			size={iconSize}
			color="#F7DF1E"
			title="JavaScript"
		/>,
		<SiHtml5 key="html" size={iconSize} color="#E34F26" title="HTML5" />,
		<SiTailwindcss
			key="tailwind"
			size={iconSize}
			color="#38B2AC"
			title="Tailwind CSS"
		/>,
		<SiFramer
			key="framer"
			size={iconSize}
			color="#0055FF"
			title="Framer Motion"
		/>,
		<SiGit key="git" size={iconSize} color="#F05032" title="Git" />,
		<SiGithub
			key="github"
			size={iconSize}
			color="#181717"
			title="GitHub"
		/>,
		<VscVscode
			key="vscode"
			size={iconSize}
			color="#0078D7"
			title="VS Code"
		/>,
		<SiVite key="vite" size={iconSize} color="#646CFF" title="Vite" />,
		<SiNpm key="npm" size={iconSize} color="#CB3837" title="npm" />,
		<SiVercel
			key="vercel"
			size={iconSize}
			color="#000000"
			title="Vercel"
		/>,
		<SiNodedotjs
			key="node"
			size={iconSize}
			color="#339933"
			title="Node.js"
		/>,
		<SiExpress
			key="express"
			size={iconSize}
			color="#000000"
			title="Express"
		/>,
		<SiPostgresql
			key="postgres"
			size={iconSize}
			color="#336791"
			title="PostgreSQL"
		/>,
	];

	// Duplicate multiple times to ensure continuous loop without empty spaces
	const repeatedIcons = [...icons, ...icons, ...icons, ...icons];

	return (
		<div>
			<div
				className="w-full overflow-hidden flex flex-col my-8 -mt-6 py-4 bg-[#005427] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#1e40af] z-10 relative"
				aria-hidden={false}
			>
				{/* Top marquee: left to right */}
				<div
					className="marquee-wrapper relative whitespace-nowrap flex items-center"
					style={{ ["--marquee-duration"]: `${speed}s` }}
				>
					<div className="marquee flex gap-8 items-center">
						{repeatedIcons.map((Icon, i) => (
							<div
								key={i}
								className="flex items-center justify-center p-2.5 opacity-90 hover:opacity-100 rounded-full dark:border-blue-400 border-gray-800 border-2 mb-2"
								style={{
									width: iconSize + 16,
									height: iconSize + 16,
								}}
							>
								{Icon}
							</div>
						))}
					</div>
				</div>

				{/* Bottom marquee: right to left */}
				<div
					className="marquee-wrapper relative whitespace-nowrap flex items-center"
					style={{ ["--marquee-duration"]: `${speed}s` }}
				>
					<div className="marquee marquee-reverse flex gap-8 items-center">
						{repeatedIcons.map((Icon, i) => (
							<div
								key={i}
								className="flex items-center justify-center p-2.5 opacity-90 hover:opacity-100 rounded-full dark:border-blue-400 border-gray-800 border-2"
								style={{
									width: iconSize + 16,
									height: iconSize + 16,
								}}
							>
								{Icon}
							</div>
						))}
					</div>
				</div>

				<style>{`
        .marquee-wrapper { --marquee-duration: ${speed}s; }
        .marquee {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          transform: translateX(-50%);
          animation: marquee var(--marquee-duration) linear infinite;
        }
        .marquee-reverse {
          transform: translateX(0%);
          animation: marquee-reverse var(--marquee-duration) linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee, .marquee-reverse { animation: none; }
        }
        .marquee-wrapper:hover .marquee, .marquee-wrapper:hover .marquee-reverse { animation-play-state: paused; }
        .marquee svg { display: block; }
      `}</style>
			</div>
			<div className="bg-yellow-500 dark:bg-red-700 -mt-46 h-38 z-0 items-center flex rotate-[-1deg] mb-10"></div>
		</div>
	);
}

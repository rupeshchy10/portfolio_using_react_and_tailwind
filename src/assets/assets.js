import sun_icon from "./images/sun_icon.svg";
import moon_icon from "./images/moon_icon.svg";
import Dish from "./images/Portfolio.png";
import Imaginet from "./images/PickZy.png";
import PickZy from "./images/PickZy.png";
import Portfolio from "./images/Portfolio.png";

const themeIcons = {
	sun_icon,
	moon_icon,
};

const projects = [
	{
		id: 1,
		title: "Dish Picker",
		image: Dish,
        alt_pic:"Dish_Pic",
		techs: ["HTML", "JavaScript", "CSS"],
		description: "A disk picker website",
	},
	{
		id: 2,
		title: "Imaginet - Digital Agency Website",
		image: Imaginet,
        alt_pic:"Imaginet_Pic",
		techs: ["React", "Tailwind CSS", "JavaScript"],
		description: "Your Imagination, Our Creation.",
	},
	{
		id: 3,
		title: "PickZy - E-Commerce Website",
		image: PickZy,
        alt_pic:"PickZy_Pic",
		techs: ["React", "Tailwind CSS", "JavaScript"],
		description: "An easy to pick anything website.",
	},
	{
		id: 4,
		title: "Portfolio Website",
		image: Portfolio,
        alt_pic:"Portfolio_Pic",
		techs: ["React", "Tailwind CSS", "JavaScript"],
		description:
			"A portfolio reflecting my skills and journey to improvement",
	},
];

const educationData = [
		{
			year: "2019 - Present",
			degree: "Bachelor in Computer Engineering",
			institute: "Eastern College of Engineering",
			desc: "Studying core computer engineering subjects with a focus on software development and problem solving.",
		},
		{
			year: "2016 - 2019",
			degree: "Diploma in Computer Engineering",
			institute: "Adarsha Secondary School",
			desc: "Learned programming fundamentals, web development basics, and system concepts.",
		},
	];

export { themeIcons, projects,educationData };

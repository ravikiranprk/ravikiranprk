import {
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava,
    FaGit, FaGithub
} from "react-icons/fa";
import {
    SiJavascript, SiNextdotjs, SiPython, SiSpringboot, SiDjango,
    SiTailwindcss, SiRedux, SiReact, SiVite, SiTypescript,
    SiNpm, SiYarn, SiPypi, SiJson, SiMysql, SiMongodb,
    SiPostgresql, SiFigma,
    SiGreensock, SiC, SiCplusplus, SiShopify, SiExpress
} from "react-icons/si";

const skills = [
    // Frontend
    { name: "HTML", icon: <FaHtml5 size={24} />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt size={24} />, level: 95 },
    { name: "JavaScript", icon: <SiJavascript size={24} />, level: 90 },
    { name: "TypeScript", icon: <SiTypescript size={24} />, level: 80 },
    { name: "React", icon: <FaReact size={24} />, level: 95 },
    { name: "Next.js", icon: <SiNextdotjs size={24} />, level: 95 },
    { name: "React Native", icon: <SiReact size={24} />, level: 70 },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} />, level: 90 },
    { name: "Redux", icon: <SiRedux size={24} />, level: 60 },
    { name: "Vite", icon: <SiVite size={24} />, level: 80 },
    { name: "GSAP", icon: <SiGreensock size={24} />, level: 70 },
    { name: "Liquid", icon: <SiShopify size={24} />, level: 60 },

    // Backend
    { name: "Node.js", icon: <FaNodeJs size={24} />, level: 95 },
    { name: "Express.js", icon: <SiExpress size={24} />, level: 90 },
    { name: "Java", icon: <FaJava size={24} />, level: 95 },
    { name: "Spring Boot", icon: <SiSpringboot size={24} />, level: 80 },
    { name: "Python", icon: <SiPython size={24} />, level: 95 },
    { name: "Django", icon: <SiDjango size={24} />, level: 80 },

    // Databases
    { name: "MySQL", icon: <SiMysql size={24} />, level: 90 },
    { name: "MongoDB", icon: <SiMongodb size={24} />, level: 90 },
    { name: "PostgreSQL", icon: <SiPostgresql size={24} />, level: 85 },

    // Dev Tools
    { name: "Git", icon: <FaGit size={24} />, level: 90 },
    { name: "GitHub", icon: <FaGithub size={24} />, level: 95 },
    { name: "npm", icon: <SiNpm size={24} />, level: 90 },
    { name: "yarn", icon: <SiYarn size={24} />, level: 80 },
    { name: "pip", icon: <SiPypi size={24} />, level: 75 },
    { name: "JSON", icon: <SiJson size={24} />, level: 90 },

    // Others
    { name: "C", icon: <SiC size={24} />, level: 80 },
    { name: "C++", icon: <SiCplusplus size={24} />, level: 85 },
    { name: "Figma", icon: <SiFigma size={24} />, level: 80 },
];

export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-[#fff7ef] p-6 flex justify-center items-center mt-6">
            <div className="container bg-[#fff7ef] rounded-2xl p-10">
                <h1 className="text-4xl font-bold bg-linear-to-r from-blue-500 via-indigo-600 to-indigo-800 bg-clip-text text-transparent mb-4">Skills</h1>
                <p className="text-lg text-gray-700 mb-10">My Technical Skills</p>

                <div className="grid gap-6 md:grid-cols-2">
                    {skills.map((skill) => (
                        <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-3 text-gray-900 font-medium">
                                    {skill.icon} {skill.name}
                                </div>
                                <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                            </div>

                            <div className="w-full h-3 bg-[#e9dfcf] rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gray-800 rounded-full transition-all duration-700"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
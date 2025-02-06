import {
    FaGit,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPhp,
    FaLaravel,
    FaBootstrap,
    FaNodeJs,
    FaReact,
    FaJava,
    FaPython,
    FaVuejs,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, SiPostman, SiNextdotjs } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
    { name: "Git", icon: FaGit },
    { name: "GitHub", icon: FaGithub },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "PHP", icon: FaPhp },
    { name: "Laravel", icon: FaLaravel },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "Postman", icon: SiPostman },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Vue", icon: FaVuejs },
    { name: "VS Code", icon: BiLogoVisualStudio },
];

function SkillCard({ name, icon: Icon }) {
    return (
        <div className="flex flex-col items-center gap-2 p-4 text-center transition-transform duration-300 rounded-lg hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Icon className="size-10 text-red-500" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</span>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skill" className="py-16 bg-gray-50 dark:bg-zinc-900 flex items-center justify-center min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 sm:text-4xl dark:text-white">
                    Habilidades
                </h2>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
}
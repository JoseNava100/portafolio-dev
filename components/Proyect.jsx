import {
    FaLaravel,
    FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const TAGS = {
    LARAVEL: {
        name: "Laravel",
        class: "bg-red-600 text-white",
        icon: <FaLaravel className="size-4" />,
    },
    NEXT: {
        name: "Next.js",
        class: "bg-black text-white",
        icon: <SiNextdotjs className="size-4" />,
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-blue-500 text-white",
        icon: <SiTailwindcss className="size-4" />,
    },
};

const PROJECTS = [
    {
        title: "Laravel API RESTful",
        subtitle: "Gestion de carros",
        description:
            "Una API REST hecha en Laravel para la gestión de carros, con autenticación mediante Laravel Sanctum. Permite integrarse con frameworks frontend como React o Next.js.",
        link: "https://github.com/JoseNava100/laravel-sanctum-api-rest",
        tags: [TAGS.LARAVEL],
    },
    {
        title: "Laravel API RESTful",
        subtitle: "Gestion de tareas",
        description:
            "Una API REST hecha en Laravel para la gestión de tareas, con autenticación mediante Laravel Sanctum. Permite integrarse con frameworks frontend como React o Next.js.",
        link: "https://github.com/JoseNava100/laravel-api-rest-to-do-list",
        tags: [TAGS.LARAVEL],
    },
    {
        title: "Aplicacion web",
        subtitle: "Gestión de carros",
        description:
            "Aplicación frontend con Next.js conectada a la API RESTful de Laravel para la gestión de carros.",
        link: "https://github.com/JoseNava100/nextjs-authentication-api-rest",
        tags: [TAGS.NEXT, TAGS.TAILWIND],
    },
    {
        title: "Aplicacion web",
        subtitle: "Gestion de tareas",
        description:
            "Aplicación en Next.js conectada a una API RESTful en Laravel para la gestión de tareas.",
        link: "https://github.com/JoseNava100/nextjs-api-rest-list-to-do",
        tags: [TAGS.NEXT, TAGS.TAILWIND],
    },
];

function LinkButton({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
        >
            {children}
        </a>
    );
}

export default function Projects() {
    return (
        <section id="proyect" className="flex flex-col items-center justify-center min-h-screen p-8">
            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 sm:text-4xl dark:text-white">
                Proyectos
            </h2>

            <div className="flex flex-col gap-8 w-full max-w-3xl">
                {PROJECTS.map((project, index) => (
                    <article
                        key={index}
                        className="flex flex-col p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md w-full text-center"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                            {project.subtitle}
                        </p>

                        <ul className="flex justify-center mt-3 gap-x-2">
                            {project.tags.map((tag, tagIndex) => (
                                <li key={tagIndex}>
                                    <span
                                        className={`flex gap-x-2 items-center rounded-full text-xs ${tag.class} py-1 px-2`}
                                    >
                                        {tag.icon}
                                        {tag.name}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-4 text-gray-700 dark:text-gray-400">
                            {project.description}
                        </p>

                        <footer className="flex items-center justify-center mt-4 gap-x-4">
                            {project.link && (
                                <LinkButton href={project.link}>
                                    <FaGithub className="size-6" />
                                    Code
                                </LinkButton>
                            )}
                        </footer>
                    </article>
                ))}
            </div>
        </section>
    );
}

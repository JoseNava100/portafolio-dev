import {
    FaLaravel,
    FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiBootstrap, SiHtml5, SiCss3, SiPhp, SiJavascript } from "react-icons/si";

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
    BOOTSTRAP: {
        name: "Bootstrap 5",
        class: "bg-purple-500 text-white",
        icon: <SiBootstrap className="size-4" />,
    },
    HTML: {
        name: "HTML 5",
        class: "bg-orange-500 text-white",
        icon: <SiHtml5 className="size-4" />,
    },
    CSS: {
        name: "CSS",
        class: "bg-blue-500 text-white",
        icon: <SiCss3 className="size-4" />,
    },
    PHP: {
        name: "PHP",
        class: "bg-purple-400 text-white",
        icon: <SiPhp className="size-4" />,
    },
    JS: {
        name: "JavaScript",
        class: "bg-yellow-500 text-white",
        icon: <SiJavascript className="size-4" />,
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
        title: "Laravel API RESTful",
        subtitle: "Gestion de contraseñas y generador de contraseñas",
        description:
            "Una API REST hecha en Laravel para la gestión de contraseñas, como generación de contraseñas, con autenticación mediante Laravel Sanctum. Permite integrarse con frameworks frontend como React o Next.js.",
        link: "https://github.com/JoseNava100/laravel-api-password-manager",
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
    {
        title: "Aplicacion web",
        subtitle: "Gestion de contraseña y generador de contraseñas",
        description:
            "Aplicación en Next.js conectada a una API RESTful en Laravel para la gestión de contraseñas.",
        link: "https://github.com/JoseNava100/password-app",
        tags: [TAGS.NEXT, TAGS.TAILWIND],
    },
    {
        title: "Aplicacion web",
        subtitle: "Gestion del proceso de titulacion",
        description:
            "Contribución al desarrollo de una aplicación web para la gestión del proceso de titulación en el TECNM Campus Cd. Juárez.",
        tags: [TAGS.BOOTSTRAP, TAGS.HTML, TAGS.PHP, TAGS.JS],
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

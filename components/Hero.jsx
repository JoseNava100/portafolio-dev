import { Mail, Linkedin } from "lucide-react";

const name = "José Nava";
const personalImageAlt = "José Nava";

function Badge({ children }) {
    return (
        <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-full">
            {children}
        </span>
    );
}

function SocialPill({ href, icon: Icon, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 bg-gray-100 rounded-full hover:bg-gray-200 dark:text-gray-200 dark:bg-zinc-800 dark:hover:bg-gray-700"
        >
            <Icon className="size-4" />
            {children}
        </a>
    );
}

export default function Hero() {
    return (
        <section className="flex items-center justify-center h-screen text-gray-600 dark:text-gray-200 body-font">
            <div className="max-w-xl mx-auto text-center">
                <div className="flex gap-4 mb-4 justify-center">
                    <img
                        className="rounded-full shadow-lg size-16"
                        src="https://avatars.githubusercontent.com/u/144180812?v=4"
                        alt={personalImageAlt}
                    />
                    <a
                        href="https://www.linkedin.com/in/jos%C3%A9-nava-668a24315/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center transition md:justify-center md:hover:scale-105"
                    >
                        <Badge>Disponible para trabajar</Badge>
                    </a>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
                    Hey, soy {name.split(" ")[1]}
                </h1>

                <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-red-400 [&>strong]:text-red-500 [&>strong]:font-semibold dark:text-red-100">
                    +3 años de experiencia.{" "}
                    <strong>
                        Ingeniero en Sistemas Computacionales de Chihuahua, México 🇲🇽.
                    </strong>{" "}
                    Especializado en el desarrollo de aplicaciones avanzadas, enfocado más
                    al desarrollo web moderno.
                </p>

                <nav className="flex flex-wrap gap-4 mt-8 justify-center">
                    <SocialPill href="mailto:josenavaemanuel@outlook.es" icon={Mail}>
                        Contáctame
                    </SocialPill>
                    <SocialPill href="https://www.linkedin.com/in/jos%C3%A9-nava-668a24315/" icon={Linkedin}>
                        LinkedIn
                    </SocialPill>
                </nav>
            </div>
        </section>
    );
}
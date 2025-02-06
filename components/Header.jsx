import ThemeToggle from "./themeToggle";

const navItems = [
    {
        title: "Habilidades",
        label: "habilidades",
        url: "#skill",
    },
    {
        title: "Proyectos",
        label: "proyectos",
        url: "#proyect",
    },
    {
        title: "Sobre mi",
        label: "sobre-mi",
        url: "#about-me",
    },
    {
        title: "Contacto",
        label: "contacto",
        url: "mailto:josenavaemanuel@outlook.es",
    },
];

export default function Header() {
    return (
        <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
            <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
                {navItems.map((item) => (
                    <a
                        key={item.label} 
                        className="relative block px-2 py-2 transition hover:text-red-500 dark:hover:text-red-500"
                        aria-label={item.label}
                        href={item.url}
                    >
                        {item.title}
                    </a>
                ))}
                <ThemeToggle />
            </nav>
        </header>
    );
}
export default function AboutMe() {
    return (
        <section id="about-me" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 p-6">
            <div className="max-w-2xl w-full space-y-6 text-center">
                <h1 className="mb-8 text-3xl font-bold text-center text-gray-800 sm:text-4xl dark:text-white">
                    Sobre mí
                </h1>

                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                    <p>
                        Me llamo <strong className="text-red-500">José Emanuel Nava Nava</strong>, pero mis amigos me dicen Nava. Soy
                        un <strong className="text-red-500">programador independiente</strong> y egresado de Ingeniería en Sistemas Computacionales.
                    </p>
                    <p>
                        Mi pasión por la programación me ha llevado a desarrollar diversas aplicaciones, enfocándome en optimización
                        de procesos y soluciones eficientes.
                    </p>
                    <p>
                        Mi objetivo es <strong className="text-red-500">convertirme en un programador exitoso</strong>, contribuyendo con mi talento
                        y conocimientos al crecimiento de grandes empresas en México y globalmente. Creo en el aprendizaje continuo y el impacto
                        de la tecnología.
                    </p>
                </div>
            </div>
        </section>
    );
}
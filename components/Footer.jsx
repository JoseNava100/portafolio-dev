'use client';

import { FaFilePdf, FaLinkedin, FaGithub } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const handleDownloadCV = () => {
    const pdfUrl = './cv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV JOSÉ NAVA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font bg-white dark:bg-zinc-900">
            <div className="container px-5 py-8 mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        José Nava
                    </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center">
                    <p className="text-sm text-gray-500 dark:text-zinc-400 sm:mr-6">
                        © {currentYear}{' '}
                        <a href="#" className="hover:underline">
                            José Nava
                        </a>
                        . Algunos derechos reservados.
                    </p>

                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-zinc-400 sm:mt-0">
                        <li>
                            <button
                                onClick={handleDownloadCV}
                                className="flex items-center hover:underline mr-4"
                            >
                                CV <FaFilePdf className="ml-1" />
                            </button>
                        </li>
                        <li>
                            <a
                                href="mailto:josenavaemanuel@outlook.es"
                                className="hover:underline mr-4"
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a
                        href="https://www.linkedin.com/in/jos%C3%A9-nava-668a24315/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="https://github.com/JoseNava100"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        <FaGithub size={20} />
                    </a>
                    
                </div>
            </div>
        </footer>
    );
}
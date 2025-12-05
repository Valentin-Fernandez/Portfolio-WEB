import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

const About = () => {
    return (
        <div className="container mx-auto mb-32">
            <div className="flex flex-col-reverse md:flex-row md:justify-end justify-center items-center p-4">
                <div className="space-y-4 flex md:flex-col my-4 space-x-4">
                    <a className="w-18 h-18 bg-text-primary rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300" href="https://github.com/Valentin-Fernandez">
                        <FaGithub className="text-text-secundary text-4xl" />
                    </a>
                    <a
                        className="w-18 h-18 bg-text-primary rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300"
                        href="https://www.linkedin.com/in/valentin-f-098368292/"
                    >
                        <FaLinkedin className="text-text-secundary text-4xl" />
                    </a>
                    <a
                        className="w-18 h-18 bg-text-primary rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300"
                        href="mailto:dev.valentinfernandez@gmail.com"
                    >
                        <CgMail className="text-text-secundary text-4xl" />
                    </a>
                </div>
                <div className="max-w-2xl md:ml-8 ml-0 p-12 bg-text-primary rounded-xl text-text-secundary">
                    <h2 className="text-2xl font-semibold text-center">Sobre mi</h2>
                    <p className="text-base max-w-lg mt-4">
                        Soy Desarrollador Full Stack con experiencia construyendo aplicaciones web para negocios y proyectos reales. Me enfoco en crear interfaces claras, funcionales y fáciles de
                        usar, conectadas a backends sólidos y bien estructurados. Busco seguir creciendo profesionalmente y trabajar en proyectos donde pueda aportar valor real.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;

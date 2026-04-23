import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

const Contact = () => {
    return (
        <section className="container mx-auto px-4 py-20 md:px-0" id="contact">
            <div className="grid gap-8 rounded-lg border border-line bg-surface p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-10">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">Contacto</p>
                    <h2 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">Tenes una oportunidad o proyecto?</h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                        Estoy abierto a proyectos freelance, oportunidades full stack y colaboraciones donde pueda construir soluciones web utiles, prolijas y pensadas para usuarios reales.
                    </p>
                </div>

                <div className="flex min-w-0 flex-col gap-3">
                    <a
                        className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-accent px-4 py-3 text-center font-semibold text-surface transition-colors duration-300 hover:bg-accent-dark sm:px-5"
                        href="mailto:dev.valentinfernandez@gmail.com"
                    >
                        <CgMail className="shrink-0 text-2xl" />
                        <span className="min-w-0 break-all text-sm leading-5 sm:text-base">dev.valentinfernandez@gmail.com</span>
                    </a>
                    <a
                        className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-line bg-background px-4 py-3 text-center font-semibold text-foreground transition-colors duration-300 hover:border-accent hover:text-accent-dark sm:px-5"
                        href="https://www.linkedin.com/in/valentin-f-098368292/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-xl" />
                        LinkedIn
                    </a>
                    <a
                        className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-line bg-background px-4 py-3 text-center font-semibold text-foreground transition-colors duration-300 hover:border-accent hover:text-accent-dark sm:px-5"
                        href="https://github.com/Valentin-Fernandez"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-xl" />
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;

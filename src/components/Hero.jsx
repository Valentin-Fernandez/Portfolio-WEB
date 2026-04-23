import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { MdArrowForward } from 'react-icons/md';

const stats = [
    { value: '3+', label: 'productos web' },
    { value: 'Full Stack', label: 'frontend + backend' },
    { value: 'React / Node', label: 'stack principal' },
];

const Hero = () => {
    return (
        <section className="container mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-10 px-4 py-20 md:grid-cols-[1.08fr_0.92fr] md:px-0" id="home">
            <div>
                <p className="mb-5 inline-flex rounded-full border border-accent/30 bg-surface/80 px-4 py-2 text-sm font-semibold text-accent-dark shadow-sm">
                    Full Stack Web Developer
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-normal text-foreground md:text-7xl">Valentin Fernandez</h1>
                <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted md:text-2xl">
                    Desarrollo aplicaciones web claras, escalables y pensadas para operaciones reales: pedidos, inventario, torneos, paneles administrativos y flujos donde la experiencia importa.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="#projects"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-surface shadow-sm transition-colors duration-300 hover:bg-accent-dark"
                    >
                        Ver proyectos
                        <MdArrowForward className="text-xl" />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex min-h-12 items-center justify-center rounded-lg border border-foreground/20 bg-surface px-6 py-3 font-semibold text-foreground shadow-sm transition-colors duration-300 hover:border-accent hover:text-accent-dark"
                    >
                        Contactarme
                    </a>
                </div>

                <div className="mt-8 flex gap-4">
                    <a
                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-surface text-foreground shadow-sm transition-colors duration-300 hover:border-accent hover:text-accent-dark"
                        href="https://github.com/Valentin-Fernandez"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub de Valentin Fernandez"
                    >
                        <FaGithub className="text-2xl" />
                    </a>
                    <a
                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-surface text-foreground shadow-sm transition-colors duration-300 hover:border-accent hover:text-accent-dark"
                        href="https://www.linkedin.com/in/valentin-f-098368292/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn de Valentin Fernandez"
                    >
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-surface text-foreground shadow-sm transition-colors duration-300 hover:border-accent hover:text-accent-dark"
                        href="mailto:dev.valentinfernandez@gmail.com"
                        aria-label="Enviar email a Valentin Fernandez"
                    >
                        <CgMail className="text-3xl" />
                    </a>
                </div>
            </div>

            <aside className="rounded-lg border border-line bg-surface p-5 shadow-sm md:p-6">
                <div className="flex items-center justify-between border-b border-line pb-4">
                    <div>
                        <p className="text-sm font-semibold text-foreground">Perfil tecnico</p>
                        <p className="text-sm text-muted">Aplicaciones web para negocios reales</p>
                    </div>
                    <span className="h-3 w-3 rounded-full bg-accent" />
                </div>

                <div className="grid gap-3 py-5">
                    {stats.map(stat => (
                        <div key={stat.label} className="rounded-lg bg-background px-4 py-4">
                            <p className="text-xl font-semibold text-foreground">{stat.value}</p>
                            <p className="mt-1 text-sm text-muted">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="rounded-lg bg-foreground p-5 font-mono text-sm leading-7 text-surface">
                    <p>
                        <span className="text-accent">const</span> foco = [
                    </p>
                    <p className="pl-4">'interfaces claras',</p>
                    <p className="pl-4">'backends ordenados',</p>
                    <p className="pl-4">'productos mantenibles'</p>
                    <p>];</p>
                </div>
            </aside>
        </section>
    );
};

export default Hero;

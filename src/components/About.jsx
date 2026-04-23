import React from 'react';

const About = () => {
    return (
        <section className="container mx-auto px-4 py-20 md:px-0" id="about">
            <div className="grid overflow-hidden rounded-lg border border-line bg-foreground text-surface shadow-sm md:grid-cols-[0.85fr_1.15fr]">
                <div className="border-b border-surface/10 p-8 md:border-b-0 md:border-r md:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Sobre mi</p>
                    <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Construyo productos web con foco en utilidad real.</h2>
                </div>

                <div className="grid gap-6 p-8 text-base leading-8 text-surface/80 md:p-10">
                    <p>
                        Soy desarrollador Full Stack y me especializo en aplicaciones para negocios y procesos operativos: catalogos, pedidos, paneles administrativos, gestion de datos y experiencias
                        responsivas. Me gusta transformar necesidades concretas en interfaces simples, backends ordenados y flujos que se puedan usar todos los dias.
                    </p>
                    <p>
                        Trabajo con React, Next.js, Node.js, Express, MongoDB, MySQL y Tailwind CSS. Busco proyectos donde pueda aportar criterio tecnico, claridad visual y una implementacion
                        mantenible desde el primer dia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

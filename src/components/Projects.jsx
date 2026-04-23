import { FaGithub } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import { findSkills } from '@/data/Skills';

const proyectos = [
    {
        id: 3,
        titulo: 'Fernandez Refrigeracion',
        subtitulo: 'Aplicacion para gestion de negocio y taller de refrigeracion',
        estado: 'Proyecto full stack',
        problema:
            'Fernandez Refrigeracion manejaba areas importantes del negocio con procesos separados y poco integrados: ventas, inventario, clientes, cuenta corriente y el taller de reparaciones. Ademas, el sistema anterior del taller estaba desactualizado y dependia de datos historicos en CSV, lo que dificultaba consultar ordenes de servicio, organizar visitas, imprimir comprobantes y tener una vision clara del trabajo diario.',
        solucion:
            'Desarrolle una plataforma web full stack para unificar la gestion del negocio y del taller en un solo sistema. La aplicacion permite administrar productos, clientes, ventas, cuenta corriente, ordenes de servicio, agenda diaria del taller, estados de reparacion, comprobantes e impresiones personalizadas. Tambien incorpore una migracion de datos desde CSV hacia MongoDB para conservar el historial del sistema anterior y seguir operando desde la web.',
        aporte: [
            'Gestion de inventario, ventas, clientes y cuenta corriente.',
            'Modulo de taller con CRUD completo de ordenes de servicio.',
            'Agenda diaria para organizar visitas tecnicas.',
            'Estados de reparacion e historial de cambios por orden.',
            'Impresion de comprobantes de venta, ordenes de servicio y agenda diaria.',
            'Landing page publica con informacion del negocio, horarios, contacto y ubicacion.',
            'Panel administrativo responsive con navegacion separada entre negocio y taller.',
        ],
        cards: ['React', 'Next.js', 'NodeJS', 'MongoDB', 'Tailwind CSS'],
        images: [
            { src: '/images/dashboard.png', alt: 'Dashboard empresarial' },
            { src: '/images/home.png', alt: 'Pagina principal' },
            { src: '/images/inventario.png', alt: 'Inventario gestor' },
        ],
        links: { demo: '', repo: '' },
    },
    {
        id: 1,
        titulo: 'Copa Punilla',
        subtitulo: 'Gestion de torneos de futbol amateur',
        estado: 'Proyecto full stack',
        problema: 'Los torneos necesitaban centralizar equipos, jugadores, fixture, resultados y tablas en una experiencia simple para administradores y participantes.',
        solucion: 'Construi una plataforma para organizar torneos amateur con panel de administracion, carga de resultados, tablas automaticas, goleadores y soporte para fases eliminatorias.',
        aporte: [
            'Gestion de equipos, jugadores y fixture completo.',
            'Carga de resultados desde panel administrativo.',
            'Tablas de posiciones y goleadores generadas automaticamente.',
            'Fases eliminatorias con clasificacion automatica.',
            'Diseno responsivo pensado para consultas desde el celular.',
        ],
        cards: ['React', 'NodeJS', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
        images: [
            { src: '/images/tablaposiciones.png', alt: 'Tabla de posiciones de Copa Punilla' },
            { src: '/images/partidos.png', alt: 'Vista de partidos de Copa Punilla' },
            { src: '/images/torneodetails.png', alt: 'Detalle de torneo de Copa Punilla' },
        ],
        links: { demo: '', repo: '' },
    },
    {
        id: 2,
        titulo: 'Sistema de pedidos',
        subtitulo: 'Aplicacion para una distribuidora mayorista',
        estado: 'Proyecto full stack',
        problema: 'La distribuidora necesitaba ordenar el catalogo, simplificar pedidos desde dispositivos moviles y centralizar el seguimiento de estados.',
        solucion: 'Desarrolle una aplicacion web con catalogo filtrable, carrito, autenticacion de clientes y panel para visualizar pedidos pendientes, completados o cancelados.',
        aporte: [
            'Catalogo de productos con busqueda y filtros.',
            'Carrito con calculo automatico de totales.',
            'Registro y autenticacion de usuarios con JWT.',
            'Panel de pedidos segmentado por estado.',
            'Interfaz responsive para clientes que compran desde el celular.',
        ],
        cards: ['React', 'NodeJS', 'Express', 'MySQL', 'Tailwind CSS', 'JWT'],
        images: [
            { src: '/images/catalogo.png', alt: 'Catalogo de productos de la distribuidora' },
            { src: '/images/carrito.png', alt: 'Vista de carrito de pedidos' },
            { src: '/images/pedidos.png', alt: 'Panel de administracion de pedidos' },
        ],
        links: { demo: '', repo: '' },
    },
];

const ProjectLink = ({ href, icon, children }) => {
    const classes = 'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300';

    if (!href) {
        return (
            <span className={`${classes} border border-line bg-background text-muted`}>
                {icon}
                {children}
            </span>
        );
    }

    return (
        <a className={`${classes} bg-accent text-surface hover:bg-accent-dark`} href={href} target="_blank" rel="noopener noreferrer">
            {icon}
            {children}
        </a>
    );
};

const Projects = () => {
    return (
        <section className="container mx-auto px-4 py-20 md:px-0" id="projects">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">Proyectos destacados</p>
                <h2 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">Aplicaciones para problemas reales</h2>
                <p className="mt-4 text-base leading-7 text-muted">
                    Estos proyectos muestran como trabajo de punta a punta: interfaz, logica de negocio, autenticacion, base de datos y paneles administrativos.
                </p>
            </div>

            <div className="mt-12 grid gap-8">
                {proyectos.map(proyecto => (
                    <article key={proyecto.id} className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
                        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                            <div className="p-6 md:p-8">
                                <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">{proyecto.estado}</span>
                                <h3 className="mt-5 text-3xl font-semibold text-foreground md:text-4xl">{proyecto.titulo}</h3>
                                <p className="mt-2 text-base font-semibold text-muted">{proyecto.subtitulo}</p>

                                <div className="mt-7 grid gap-5 text-base leading-8 text-muted">
                                    <div>
                                        <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Problema</h4>
                                        <p className="mt-2">{proyecto.problema}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Solucion</h4>
                                        <p className="mt-2">{proyecto.solucion}</p>
                                    </div>
                                </div>

                                <ul className="mt-6 grid gap-2 text-sm leading-6 text-foreground">
                                    {proyecto.aporte.map(item => (
                                        <li key={item} className="flex gap-2">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {proyecto.cards.map(card => {
                                        const skill = findSkills(card);
                                        if (!skill) return null;
                                        const Icon = skill.icon;

                                        return (
                                            <span key={card} className="flex items-center gap-2 rounded-lg border border-line bg-background px-3 py-2 text-xs font-semibold text-foreground">
                                                <Icon className="text-accent-dark text-sm" />
                                                {skill.name}
                                            </span>
                                        );
                                    })}
                                </div>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <ProjectLink href={proyecto.links.demo} icon={<MdOpenInNew className="text-lg" />}>
                                        Demo pendiente
                                    </ProjectLink>
                                    <ProjectLink href={proyecto.links.repo} icon={<FaGithub className="text-base" />}>
                                        Codigo privado
                                    </ProjectLink>
                                </div>
                            </div>

                            <div className="border-t border-line bg-background p-4 lg:border-l lg:border-t-0">
                                {proyecto.images.length > 0 ? (
                                    <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2">
                                        {proyecto.images.map((image, imageIndex) => (
                                            <div
                                                key={image.src}
                                                className={`overflow-hidden rounded-lg border border-line bg-surface shadow-sm ${imageIndex === 0 ? 'md:col-span-2' : ''}`}
                                            >
                                                <img src={image.src} alt={image.alt} className="h-full min-h-48 w-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex h-full min-h-80 items-center justify-center rounded-lg border border-dashed border-line bg-surface p-8 text-center text-muted">
                                        Capturas y demo disponibles cuando el proyecto llegue a una version presentable.
                                    </div>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;

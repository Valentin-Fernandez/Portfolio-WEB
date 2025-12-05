'use client';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { findSkills } from '@/data/Skills';

const Projects = () => {
    const proyectos = [
        {
            id: 1,
            titulo: 'Copa Punilla – Gestión de torneos de fútbol',
            descripcion: 'Plataforma web para administrar torneos de fútbol amateur: fixture, resultados y tablas',
            detalles:
                'Plataforma web Full Stack para organizar torneos de fútbol amateur. Permite gestionar equipos y jugadores, armar el fixture, cargar resultados en tiempo real y visualizar tablas de posiciones y goleadores. Incluye un panel de administración para configurar torneos, fases eliminatorias y clasificación automática',
            images: [
                { src: '/images/tablaposiciones.png', alt: 'Tabla posiciones liga' },
                { src: '/images/partidos.png', alt: 'Partidos' },
                { src: '/images/torneodetails.png', alt: 'Detalles torneo' },
            ],
            bullets: [
                'Gestión de equipos, jugadores y fixture completo.',
                'Carga de resultados en tiempo real desde el panel de administración.',
                'Tablas de posiciones y goleadores generadas automáticamente.',
                'Fases eliminatorias con clasificación automática.',
                'Diseño responsivo pensado para uso desde el celular.',
            ],
            cards: ['React', 'NodeJS', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
        },
        {
            id: 2,
            titulo: 'Sistema de pedidos – Distribuidora mayorista',
            descripcion: 'Aplicación web para gestionar pedidos y catálogo de productos de una distribuidora.',
            detalles:
                'Aplicación web Full Stack para una distribuidora mayorista. Permite a los clientes navegar el catálogo de productos, realizar pedidos desde cualquier dispositivo y a la empresa gestionar estados de pedido y registro de usuarios desde un panel centralizado.',
            bullets: [
                'Catálogo de productos con búsqueda y filtrado por nombre, categoría u otros criterios.',
                'Carrito de compras con cálculo automático de totales.',
                'Registro y autenticación de usuarios para clientes de la distribuidora.',
                'Visualización de pedidos por estado (pendiente, completado, cancelado).',
                'Diseño responsive pensado para uso desde celulares por parte de los clientes.',
            ],
            cards: ['React', 'NodeJS', 'Express', 'MySQL', 'Tailwind CSS', 'JWT'],
            images: [
                { src: '/images/catalogo.png', alt: 'Catálogo de productos de la distribuidora' },
                { src: '/images/carrito.png', alt: 'Vista de carrito de pedidos' },
                { src: '/images/pedidos.png', alt: 'Panel de administración de pedidos' },
            ],
        },
        {
            id: 3,
            titulo: 'Gestor de inventario',
            descripcion: 'Nuevos proyectos en desarrollo.',
            detalles: 'Actualmente trabajando en este proyecto emocionantes. Próximamente más detalles y demos.',
            cards: [],
        },
    ];

    const [proyectId, setProyectId] = useState(null);

    const handleClick = id => {
        setProyectId(prev => (prev === id ? null : id));
    };

    return (
        <section className="container mx-auto mb-40 px-4" id="projects">
            <h2 className="text-5xl font-semibold mb-8 text-center">Proyectos</h2>

            <div className="text-text-secundary">
                {proyectos.map(proyecto => {
                    const isOpen = proyectId === proyecto.id;

                    return (
                        <div key={proyecto.id} className="bg-text-primary my-10 p-4 md:p-8 rounded-xl">
                            {/* Header del acordeón */}
                            <button type="button" className="flex w-full items-center justify-between cursor-pointer" onClick={() => handleClick(proyecto.id)}>
                                <h3 className="hover:scale-105 transition-transform duration-300 font-semibold text-lg md:text-xl">{proyecto.titulo}</h3>
                                <span className={`text-2xl transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                                    <MdKeyboardArrowDown />
                                </span>
                            </button>

                            {/* Contenido colapsable */}
                            <div
                                className={`
                transition-all duration-300 ease-out
                overflow-hidden
                ${isOpen ? 'mt-4 max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
              `}
                            >
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Columna texto */}
                                    <div className="mt-2 md:mt-4 md:flex-1 md:max-w-xl">
                                        <p className="text-base">{proyecto.detalles}</p>

                                        {proyecto.bullets && proyecto.bullets.length > 0 && (
                                            <ul className="list-disc list-inside mt-6 space-y-2">
                                                {proyecto.bullets.map((bullet, index) => (
                                                    <li key={index}>{bullet}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {proyecto.cards && proyecto.cards.length > 0 && (
                                            <div className="mt-6">
                                                <div className="flex flex-wrap gap-3 max-w-md justify-center">
                                                    {proyecto.cards.map(card => {
                                                        const skill = findSkills(card);
                                                        if (!skill) return null;
                                                        const Icon = skill.icon;

                                                        return (
                                                            <div
                                                                key={card}
                                                                className="text-text-primary bg-text-secundary px-3 py-1 rounded-xl text-xs shadow flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                                                            >
                                                                <Icon className="text-text-primary text-xs" />
                                                                {skill.name}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Columna imágenes */}
                                    {proyecto.images && proyecto.images.length > 0 && (
                                        <div className="mt-4 md:mt-2 md:flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                            {proyecto.images.map((image, index) => (
                                                <div
                                                    key={image.src}
                                                    className={`
                          overflow-hidden rounded-lg shadow-lg hover:scale-[1.01] transition-transform duration-300
                          ${index === 0 ? 'md:col-span-2' : ''}
                        `}
                                                >
                                                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;

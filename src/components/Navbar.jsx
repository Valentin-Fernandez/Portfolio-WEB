import React from 'react';

const links = [
    { href: '#projects', label: 'Proyectos' },
    { href: '#skills', label: 'Stack' },
    { href: '#about', label: 'Sobre mi' },
    { href: '#contact', label: 'Contacto' },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-line/80 bg-background/85 px-4 backdrop-blur">
            <nav className="container mx-auto flex min-h-16 items-center justify-between gap-4">
                <a href="#home" className="font-semibold tracking-tight text-foreground" aria-label="Ir al inicio">
                    Valentin Fernandez
                </a>

                <div className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
                    {links.map(link => (
                        <a key={link.href} href={link.href} className="transition-colors duration-200 hover:text-accent-dark">
                            {link.label}
                        </a>
                    ))}
                </div>

                <a
                    href="mailto:dev.valentinfernandez@gmail.com"
                    className="inline-flex min-h-10 items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-surface transition-colors duration-200 hover:bg-accent-dark"
                >
                    Escribime
                </a>
            </nav>
        </header>
    );
};

export default Navbar;

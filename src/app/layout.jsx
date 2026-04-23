import './globals.css';

export const metadata = {
    title: 'Valentin Fernandez | Full Stack Developer',
    description: 'Portfolio de Valentin Fernandez, desarrollador Full Stack especializado en aplicaciones web para negocios, paneles administrativos y productos digitales.',
    keywords: ['Valentin Fernandez', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Portfolio'],
    authors: [{ name: 'Valentin Fernandez' }],
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="min-h-screen flex flex-col">{children}</body>
        </html>
    );
}

import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiBootstrap, SiTailwindcss, SiSass, SiNextdotjs, SiJsonwebtokens } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'NodeJS', icon: <FaNodeJs /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'SASS', icon: <SiSass /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'JWT', icon: <SiJsonwebtokens /> },
];

const Skills = () => (
    <section className="container mx-auto px-4 py-20 md:px-0" id="skills">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">Stack</p>
                <h2 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">Tecnologias que uso</h2>
                <p className="mt-4 text-base leading-7 text-muted">
                    Herramientas con las que construyo frontends, APIs, autenticacion, bases de datos y despliegues para productos web.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skills.map(skill => (
                    <span
                        key={skill.name}
                        className="flex min-h-20 items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3 font-semibold text-foreground shadow-sm transition-colors duration-300 hover:border-accent hover:text-accent-dark"
                    >
                        <span className="text-2xl text-accent-dark">{skill.icon}</span>
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;

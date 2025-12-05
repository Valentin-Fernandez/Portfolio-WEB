import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiBootstrap, SiTailwindcss, SiSass, SiNextdotjs, SiJsonwebtokens } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact className="text-background" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-background" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-background" /> },
    { name: 'MySQL', icon: <SiMysql className="text-background" /> },
    { name: 'Express', icon: <SiExpress className="text-background" /> },
    { name: 'NodeJS', icon: <FaNodeJs className="text-background" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-background" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-background" /> },
    { name: 'SASS', icon: <SiSass className="text-background" /> },
    { name: 'Git', icon: <FaGitAlt className="text-background" /> },
    { name: 'GitHub', icon: <FaGithub className="text-background" /> },
    { name: 'Docker', icon: <FaDocker className="text-background" /> },
    { name: 'JWT', icon: <SiJsonwebtokens className="text-background" /> },
];

const Skills = () => (
    <section className="container mx-auto my-20 px-4">
        <h2 className="text-5xl font-semibold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
            {skills.map(skill => (
                <span
                    key={skill.name}
                    className="bg-text-primary text-text-secundary px-4 py-2 rounded-xl font-semibold shadow flex items-center gap-2 hover:scale-110 transition-transform duration-300"
                >
                    {skill.icon}
                    {skill.name}
                </span>
            ))}
        </div>
    </section>
);

export default Skills;

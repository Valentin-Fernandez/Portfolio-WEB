import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiBootstrap, SiTailwindcss, SiSass, SiNextdotjs, SiJsonwebtokens } from 'react-icons/si';

export const skills = [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Express', icon: SiExpress },
    { name: 'NodeJS', icon: FaNodeJs },
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'SASS', icon: SiSass },
    { name: 'Git', icon: FaGitAlt },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Docker', icon: FaDocker },
    { name: 'JWT', icon: SiJsonwebtokens },
];

export const findSkills = name => {
    return skills.find(skill => skill.name === name);
};

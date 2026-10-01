import React from 'react';
import useTitle from '../../MyHooks/useTitle';

const groups = [
    {
        label: 'frontend',
        skills: [
            { name: 'React.js', level: 95 },
            { name: 'TypeScript', level: 85 },
            { name: 'JavaScript (ES6+)', level: 92 },
            { name: 'HTML5 / CSS3', level: 90 },
        ],
    },
    {
        label: 'styling & state',
        skills: [
            { name: 'Tailwind CSS', level: 90 },
            { name: 'Redux / Context API', level: 82 },
            { name: 'Bootstrap', level: 75 },
            { name: 'React Query', level: 78 },
        ],
    },
    {
        label: 'backend',
        skills: [
            { name: 'Node.js / Express', level: 80 },
            { name: 'MongoDB', level: 78 },
            { name: 'REST APIs', level: 88 },
        ],
    },
    {
        label: 'workflow',
        skills: [
            { name: 'Git', level: 88 },
            { name: 'Agile methodology', level: 84 },
        ],
    },
];

const Skills = () => {
    useTitle('Skills');

    return (
        <div className="w-[92%] max-w-[1100px] mx-auto pt-16 pb-24">
            <div className="text-[12px] text-[color:var(--text-faint)] mb-3">
                <span className="text-[color:var(--green)]">$</span> ./scan --skills
            </div>
            <h2 className="text-[color:var(--green-bright)] font-semibold text-[clamp(1.5rem,3vw,2rem)] mb-9">Toolkit</h2>

            <div className="grid md:grid-cols-2 gap-9">
                {groups.map(group => (
                    <div key={group.label}>
                        <div className="text-[12px] text-[color:var(--amber)] mb-4">## {group.label}</div>
                        {group.skills.map(skill => (
                            <div key={skill.name} className="mb-3.5">
                                <div className="flex justify-between text-[12.5px] text-[color:var(--text)] mb-1.5">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="bar-track">
                                    <div className="bar-fill" style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
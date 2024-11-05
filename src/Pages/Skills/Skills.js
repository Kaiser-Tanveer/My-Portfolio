import React from 'react';
import useTitle from '../../MyHooks/useTitle';
// import './Skills.css';
import Zoom from 'react-reveal';

const Skills = () => {
    useTitle('Skills');

    // Skill Set Object 
    const mySkills = [
        {
            id: 1,
            icon: "https://i.ibb.co/w0nnFJ1/html-5.png",
            title: "HTML",
            experience: "90%"
        },
        {
            id: 2,
            icon: "https://i.ibb.co/nBsgZtL/css-3.png",
            title: "CSS",
            experience: "80%"
        },
        {
            id: 3,
            icon: "https://i.ibb.co/QCgRmm4/kindpng-1636552.png",
            title: "BootStrap",
            experience: "90%"
        },
        {
            id: 4,
            icon: "https://i.ibb.co/6cMQVCf/tailwind-css-icon.png",
            title: "TailwindCSS",
            experience: "95%"
        },
        {
            id: 5,
            icon: "https://i.ibb.co/dpTdxmf/js.png",
            title: "JavaScript",
            experience: "90%"
        },
        {
            id: 6,
            icon: "https://i.ibb.co/Cb8hyCX/typescript.png",
            title: "TypeScript",
            experience: "70%"
        },
        {
            id: 7,
            icon: "https://i.ibb.co/Fqc5ymR/Daco-5903330.png",
            title: "ReactJS",
            experience: "98%"
        },
        {
            id: 8,
            icon: "https://i.ibb.co.com/G0qRnq9/nextjs-1024x1024.png",
            title: "NextJS",
            experience: "60%"
        },
        {
            id: 9,
            icon: "https://i.ibb.co/611STf5/pngwing-com-4.png",
            title: "NodeJS",
            experience: "70%"
        },
        {
            id: 10,
            icon: "https://i.ibb.co/NFTYfwY/pngwing-com-5.png",
            title: "ExpressJS",
            experience: "75%"
        },
        {
            id: 11,
            icon: "https://i.ibb.co/SVxwf9x/pngwing-com-6.png",
            title: "MongoDB",
            experience: "85%"
        },
        {
            id: 12,
            icon: "https://i.ibb.co/dbCJ9G9/github-logo.png",
            title: "GitHub",
            experience: "88%"
        },
    ]
    return (
        <Zoom>
            <div className="container w-5/6 mx-auto mb-24">
                <h1 className="text-5xl text-gray-100 font-bold tracking-wider uppercase pb-6">Skills</h1>
                <div className="border-2 border-emerald-500 rounded-lg shadow-lg shadow-emerald-500 py-10 px-6">
                    <div className='w-full mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                        {
                            mySkills.map(skill => <div
                                key={skill.id}
                                className='mx-auto'
                            >
                                <div title={skill.experience} className='w-28 h-28 border-2 border-gray-100 rounded-lg flex items-center bg-gray-200 shadow-inner shadow-gray-900'>
                                    <img src={skill.icon} alt="skillIcon" className='p-4' />
                                </div>
                                <h4 className='text-xl text-gray-100 font-semibold text-center'>{skill.title}</h4>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default Skills;
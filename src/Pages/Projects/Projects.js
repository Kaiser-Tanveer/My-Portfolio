import React from 'react';
import lastBook from '../../Assets/Projects/lastBook.png';
import foodMart from '../../Assets/Projects/foodMart.png';
import devLearn from '../../Assets/Projects/devLearner.png';
import ProjectsCard from './ProjectsCard';


const Projects = () => {

    const projects = [
        {
            id: 1,
            img: lastBook,
            title: 'LastBook',
        },
        {
            id: 2,
            img: foodMart,
            title: 'FoodMart',
        },
        {
            id: 3,
            img: devLearn,
            title: 'DevLearner',
        },
    ]

    return (
        <div className='my-32 mt-40'>
            <h1 className='py-10 text-emerald-500 text-5xl font-bold'>PROJECTS</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project => <ProjectsCard
                        key={project.id}
                        project={project}
                    />)
                }
            </div>
        </div>
    );
};

export default Projects;
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
            client: 'https://github.com/Kaiser-Tanveer/Used-Books-Client-Complete-Project-.git',
            live: 'https://last-books.web.app/',
        },
        {
            id: 2,
            img: foodMart,
            title: 'FoodMart',
            client: 'https://github.com/Kaiser-Tanveer/FoodMart-Client-BackEnd-DataBaseIntegretion-.git',
            live: 'https://food-mart-client.web.app/',
        },
        {
            id: 3,
            img: devLearn,
            title: 'DevLearner',
            client: 'https://github.com/Kaiser-Tanveer/DevLearner-Client-React-Authentication-.git',
            live: 'https://dev-learner.firebaseapp.com/',
        },
    ]

    return (
        <div className='my-32 mt-40 w-4/5 mx-auto'>
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
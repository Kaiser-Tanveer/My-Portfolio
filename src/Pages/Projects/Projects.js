import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import Spinner from '../Spinner/Spinner';
import useTitle from '../../MyHooks/useTitle';
import Zoom from 'react-reveal';
import axios from 'axios';

//------- BASE_URL based on the environment (production or development) --------//
const BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://portfolio-server-bay-seven.vercel.app/'
    : 'http://localhost:3003/';

const Projects = () => {
    useTitle('Projects');

    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${BASE_URL}api/projects`);
                setProjects(response.data);
            } catch (err) {
                console.error('Error fetching projects:', err.response ? err.response.data : err.message);
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='mb-32 w-5/6 mx-auto'>
            <Zoom>
                <h1 className='pb-10 text-white text-5xl text-left font-bold'>PROJECTS</h1>
            </Zoom>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project => (
                        <ProjectsCard
                            key={project._id}
                            project={project}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;

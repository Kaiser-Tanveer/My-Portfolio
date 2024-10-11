import ProjectsCard from './ProjectsCard';
import Spinner from '../Spinner/Spinner';
import useTitle from '../../MyHooks/useTitle';
import Zoom from 'react-reveal';
import { useQuery } from '@tanstack/react-query';

const Projects = () => {
    useTitle('Projects');

    const { isLoading, isError, error, data: projects = [] } = useQuery({
        queryKey: ["/projects"],
        queryFn: async () => {
            const res = await fetch('https://portfolio-server-sooty-omega.vercel.app/projects');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            return data;
        },
        staleTime: 5000, // Data is fresh for 5 seconds
        cacheTime: 10000 // Cache lasts for 10 seconds
    });

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='mb-32 w-5/6 mx-auto'>
            <Zoom>
                <h1 className='pb-10 text-white text-5xl text-center lg:text-left font-bold'>PROJECTS</h1>
            </Zoom>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project => (
                        <ProjectsCard
                            key={project.id}
                            project={project}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;

import ProjectsCard from './ProjectsCard';
import Spinner from '../Spinner/Spinner';
import useTitle from '../../MyHooks/useTitle';
import Zoom from 'react-reveal';
import { useQuery } from '@tanstack/react-query';


const Projects = () => {
    useTitle('Projects');
    const { isLoading, data: projects = [] } = useQuery({
        queryKey: ["/projects"],
        queryFn: async () => {
            const res = await fetch('https://my-portfolio-server-sand.vercel.app/projects');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Spinner />;
    }
    return (
        <div className='mb-32 w-5/6 mx-auto'>
            <Zoom>
                <h1 className='pb-10 text-white text-5xl text-center lg:text-left font-bold'>PROJECTS</h1>
            </Zoom>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    projects &&
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
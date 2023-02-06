import ProjectsCard from './ProjectsCard';
import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import useTitle from '../../MyHooks/useTitle';
import Zoom from 'react-reveal';


const Projects = () => {
    useTitle('Projects');
    const [projects, setProjects] = useState("");
    const navigation = useNavigation();

    fetch('https://my-portfolio-server-sand.vercel.app/projects')
        .then(res => res.json())
        .then(data => setProjects(data))

    if (navigation.state === "loading") {
        return <Spinner />;
    }

    return (
        <div className='mb-32 w-4/5 mx-auto'>
            <Zoom>
                <h1 className='pb-10 text-white text-5xl text-center lg:text-left font-bold'>PROJECTS</h1>
            </Zoom>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 group'>
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
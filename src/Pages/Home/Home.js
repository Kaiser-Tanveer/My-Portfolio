import React from 'react';
import useTitle from '../../MyHooks/useTitle';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Banner from './Banner';
import Contact from './Contact/Contact';
import Experiences from './Experiences/Experiences';

const Home = () => {
    useTitle('Home');
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Banner />
            <Projects />
            <Contact />
            <Skills />
            <Experiences />
        </div>
    );
};

export default Home;
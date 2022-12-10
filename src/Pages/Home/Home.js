import React from 'react';
import Projects from '../Projects/Projects';
import Banner from './Banner';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Banner />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
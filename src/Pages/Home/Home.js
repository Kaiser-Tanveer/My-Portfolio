import React from 'react';
import Projects from '../Projects/Projects';
import Banner from './Banner';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
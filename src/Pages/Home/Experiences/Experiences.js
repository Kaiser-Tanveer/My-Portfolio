import React from 'react';
import Zoom from 'react-reveal';

const Experiences = () => {
    return (
        <div className='w-5/6 grid md:grid-cols-2 gap-10 mx-auto mb-32'>
            <Zoom>
                <div className='mx-auto py-10 w-full text-center bg-emerald-500 border rounded-lg' style={{ boxShadow: '2px 3px 12px gray' }}>
                    <h2 className='text-6xl font-bold text-white'>1 Year+</h2>
                    <p className='text-gray-200'>experience</p>
                </div>
            </Zoom>
            <Zoom>
                <div className='mx-auto py-10 w-full text-center bg-emerald-500 border rounded-lg' style={{ boxShadow: '2px 3px 12px gray' }}>
                    <h2 className='text-6xl font-bold text-white'>25+</h2>
                    <p className='text-gray-200'>projects</p>
                </div>
            </Zoom>
        </div>
    );
};

export default Experiences;
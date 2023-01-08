import React from 'react';
import useTitle from '../../MyHooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='w-4/5 mx-auto pb-32'>
            <h2 className='text-5xl text-emerald-500 font-bold'>Coming Soon...</h2>
        </div>
    );
};

export default Blog;
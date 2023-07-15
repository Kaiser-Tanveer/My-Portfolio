import React from 'react';
import { useState } from 'react';
import { FaCheckCircle, FaHandPointRight } from 'react-icons/fa';

const SingleBlog = ({ blog }) => {
    const [more, setMore] = useState(false);
    return (
        <div>
            <div className='flex hover:pl-2 hover:ease-in-out hover:border hover:border-gray-100 rounded-lg duration-500 items-start my-4 text-gray-50'>
                <FaCheckCircle className='text-emerald-500 mr-2 text-xl' />
                {
                    more ?
                        <p className='group-hover:scale-90 hover:scale-100 duration-500'>{blog?.details}<br />
                            <span><a href={blog.link} target='_blank'
                                className='link link-info flex items-center'
                            >
                                <FaHandPointRight className='text-xl text-emerald-500 mr-1' />visit experience
                            </a></span><br />
                            {
                                blog?.details.length > 70 &&
                                <>
                                    <button onClick={() => setMore(!more)} className='text-left font-bold link-hover link-success flex justify-end'>read less</button>
                                </>
                            }
                        </p>
                        :
                        <p>
                            {
                                blog?.details.length > 70 ?
                                    <>
                                        {blog?.details.slice(0, 70)} ...<button
                                            onClick={() => setMore(!more)}
                                            className='font-bold link-hover link-success'>read more</button>
                                    </>
                                    :
                                    <>{blog?.details}</>
                            }
                        </p>
                }
            </div>
        </div>
    );
};

export default SingleBlog;
import React, { useState } from 'react';
import { FaCheckCircle, FaHandPointRight } from 'react-icons/fa';

const SingleBlog = ({ blog }) => {
    const [more, setMore] = useState(false);
    const details = blog?.details || "";

    return (
        <div className="my-4">
            <div className="flex items-start text-gray-50 rounded-lg hover:border hover:border-gray-100 duration-500">
                <FaCheckCircle className="text-emerald-500 mr-2 text-xl flex-shrink-0" style={{ minWidth: '1.25rem', minHeight: '1.25rem' }} />
                <p className='hover:pl-2 duration-500 text-justify pr-2'>
                    {more ? details : `${details.slice(0, 70)}${details.length > 70 ? "..." : ""}`}
                    {details.length > 70 && (
                        <button onClick={() => setMore(!more)} className="font-bold link-hover link-success">
                            {more ? "read less" : "read more"}
                        </button>
                    )}
                    {more && (
                        <span className="block mt-2">
                            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="link link-info flex items-center">
                                <FaHandPointRight className="text-xl text-emerald-500 mr-1" />Visit experience
                            </a>
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default SingleBlog;

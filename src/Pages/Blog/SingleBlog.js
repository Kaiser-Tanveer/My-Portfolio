import React, { useState } from 'react';
import { FaCheckCircle, FaHandPointRight } from 'react-icons/fa';

const SingleBlog = ({ blog }) => {
    const [more, setMore] = useState(false);
    const details = blog?.details || "";

    return (
        <div className="mb-5 pb-5 border-b border-dashed border-[color:var(--line-soft)] last:border-none last:mb-0 last:pb-0">
            <div className="flex items-start text-[color:var(--text-dim)]">
                <FaCheckCircle className="text-[color:var(--green)] mr-2.5 text-lg flex-shrink-0 mt-0.5" />
                <p className="text-[13.5px] leading-relaxed">
                    {more ? details : `${details.slice(0, 70)}${details.length > 70 ? "..." : ""}`}
                    {details.length > 70 && (
                        <button onClick={() => setMore(!more)} className="font-semibold text-[color:var(--green)] ml-1 hover:underline">
                            {more ? "read less" : "read more"}
                        </button>
                    )}
                    {more && (
                        <span className="block mt-2">
                            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-[color:var(--green)]">
                                <FaHandPointRight className="text-lg mr-1.5" />Visit experience
                            </a>
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default SingleBlog;
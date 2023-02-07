import React, { useState } from 'react';
import useTitle from '../../MyHooks/useTitle';
import blogBg from '../../Assets/Banners/myPortfolioBlog.png';
import { FaCheckCircle } from 'react-icons/fa';

const Blog = () => {
    const [more, setMore] = useState(false);
    useTitle('Blog');
    const blogs = [
        {
            details: "I am much comfortable of UI designing. Click here to see the result."
        },
        {
            details: "I am a full stack developer. I work with MERN Stack. Here is my full stack project."
        },
        {
            details: "Web application experiences are shown here. Review my experiences."
        }
    ]
    return (
        <article className='w-4/5 mx-auto pb-32'>
            <h2 className='text-5xl text-emerald-500 font-bold lf'>My Blog</h2>
            <div className='grid lg:grid-cols-2 gap-5 my-10 items-center border-2 border-emerald-500 shadow-lg shadow-emerald-300 rounded-lg p-6'>
                <div><img src={blogBg} alt="Banner-Background" className='rounded-md' /></div>
                <div className='lg:ml-10'>
                    <p>
                        {
                            blogs.map(blog => <>
                                <div className='flex items-start my-4'>
                                    <FaCheckCircle className='text-emerald-500 mr-2 text-xl' />
                                    {
                                        more ?
                                            <p>{blog?.details}
                                                {
                                                    blog?.details.length > 70 &&
                                                    <>
                                                        ..<button onClick={() => setMore(!more)} className='text-left font-bold link-hover link-info'>read less</button>
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
                                                                className='font-bold link-hover link-info'>read more</button>
                                                        </>
                                                        :
                                                        <>{blog?.details}</>
                                                }
                                            </p>
                                    }
                                </div>
                            </>)
                        }
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Blog;
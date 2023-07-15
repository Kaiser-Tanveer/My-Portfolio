import React from 'react';
import useTitle from '../../MyHooks/useTitle';
import blogBg from '../../Assets/Banners/myPortfolioBlog.png';
import SingleBlog from './SingleBlog';

const Blog = () => {
    useTitle('Blog');
    const blogs = [
        {
            id: 1,
            details: "I am much comfortable of UI designing. I am passionate most to design the UI. Check the experiences:",
            link: "https://edu-shop-kaiser.web.app/"
        },
        {
            id: 2,
            details: "I have created a full stack resell website using stripe payment method. Review the application:",
            link: "https://last-books.web.app/"
        },
        {
            id: 3,
            details: "I have experiences on team projects. I have led a team to complete a full stack project. I managed the Github, handled the UI, code on Front-end a little bit on the Back-end. Here is the project:",
            link: "https://bravo-bank.web.app/"
        }
    ]
    return (
        <article className='w-5/6 mx-auto pb-32'>
            <h2 className='text-5xl text-emerald-500 font-bold lf'>My Blog</h2>
            <div className='grid lg:grid-cols-2 gap-5 my-10 items-center border-2 border-emerald-500 shadow-lg shadow-emerald-300 rounded-lg p-6'>
                <div><img src={blogBg} alt="Banner-Background" className='rounded-md' /></div>
                <div className='lg:ml-10 group'>
                    <p>
                        {
                            blogs.map(blog => <SingleBlog
                                key={blog.id}
                                blog={blog}
                            />)
                        }
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Blog;
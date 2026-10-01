import React from 'react';
import useTitle from '../../MyHooks/useTitle';
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
    ];

    return (
        <article className="w-[92%] max-w-[1100px] mx-auto pt-16 pb-24">
            <div className="text-[12px] text-[color:var(--text-faint)] mb-3">
                <span className="text-[color:var(--green)]">$</span> cat blog.log
            </div>
            <h2 className="text-[color:var(--green-bright)] font-semibold text-[clamp(1.5rem,3vw,2rem)] mb-8">My Blog</h2>

            <div className="win">
                <div className="win-bar"><i></i><i></i><i></i><div className="win-title">blog.log</div></div>
                <div className="p-6 md:p-8">
                    {blogs.map(blog => <SingleBlog key={blog.id} blog={blog} />)}
                </div>
            </div>
        </article>
    );
};

export default Blog;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";
import NotFound from "../Pages/NotFount/NotFound";

const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/api/projects',
                element: <Projects />,
            },
            {
                path: '/api/project/:id',
                element: <ProjectDetails />,
                loader: async ({ params }) => {
                    const response = await fetch(`https://portfolio-server-bay-seven.vercel.app/api/projects/${params.id}`, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    if (!response.ok) throw new Error(`Failed to load project data: ${response.status}`);
                    return response.json();
                },
            },
            {
                path: '/contacts',
                element: <Contact />,
            },
            {
                path: '/skills',
                element: <Skills />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
        ]
    }
]);

export default router;

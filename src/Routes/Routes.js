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

// Determine the base URL based on environment (local or production)
const BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://portfolio-server-nchp36izs-kaisertanveers-projects.vercel.app'
    : 'http://localhost:3000';

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
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/project/:id',
                element: <ProjectDetails />,
                loader: async ({ params }) => {
                    const response = await fetch(`${BASE_URL}/projects/${params.id}`, {
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
])

export default router;

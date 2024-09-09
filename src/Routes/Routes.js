import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFount/NotFound";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";

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
                loader: async ({ params }) => await fetch(`https://portfolio-server-sooty-omega.vercel.app/project/${params.id}`),
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
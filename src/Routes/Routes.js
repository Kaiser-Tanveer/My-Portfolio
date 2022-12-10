import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";

const router = createBrowserRouter([
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
                path: '/contacts',
                element: <Contact />,
            }
        ]
    }
])

export default router;
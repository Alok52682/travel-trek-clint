import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Allservices from "../Pages/AllServices/Allservices";
import ServiceDetails from "../Pages/AllServices/ServiceDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Shared/ErrorPage";

const router = createBrowserRouter([{
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/services',
            element: <Allservices />
        },
        {
            path: '/service/:id',
            loader: async ({ params }) => fetch(`http://localhost:4000/service/${params.id}`),
            element: <ServiceDetails />
        },
        {
            path: '/addservice',
            element: <AddService />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }
    ]
}])

export default router;
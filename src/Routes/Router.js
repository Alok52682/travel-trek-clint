import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Allservices from "../Pages/AllServices/Allservices";
import Home from "../Pages/Home/Home/Home";
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
        }
    ]
}])

export default router;
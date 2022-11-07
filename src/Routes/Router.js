import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Shared/ErrorPage";

const router = createBrowserRouter([{
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [

    ]
}])

export default router;
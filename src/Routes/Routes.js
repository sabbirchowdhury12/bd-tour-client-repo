import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Register from "../Pages/Register/Register";
import ServiceDeatails from "../Pages/ServiceDeatails/ServiceDeatails";
import UpdateMyReview from "../Pages/UpdateMyReview/UpdateMyReview";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('https://my-assaignment-11-server-side.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDeatails></ServiceDeatails>,
                loader: ({ params }) => fetch(`https://my-assaignment-11-server-side.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myreview',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/update/:id',
                element: <UpdateMyReview />,
                loader: ({ params }) => fetch(`https://my-assaignment-11-server-side.vercel.app/review/${params.id}`)
            },

            {
                path: '/addService',
                element: <PrivateRoutes><AddService /></PrivateRoutes>
            }
        ]
    }
]);
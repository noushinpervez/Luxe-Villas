import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Home/Home";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import UserProfile from "../components/UserProfile/UserProfile";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup"
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/properties.json'),
            },
            {
                path: "/updateprofile",
                element: <UpdateProfile></UpdateProfile>,
            },
            {
                path: "/userprofile",
                element: <UserProfile></UserProfile>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
            {
                path: "/:id",
                loader: () => fetch('/properties.json'),
                element: <PrivateRoute>
                    <PropertyDetails></PropertyDetails>
                </PrivateRoute>,
            },
        ],
    },
]);
import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import CollageDetails from "../Page/CollageDetails/CollageDetails";
import College from "../Page/College/College";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                    path: '/',
                   element: <Home></Home>
                  
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
                path: '/college',
                element: <College></College>
              },

              {
                path: '/collegeDetails/:id',
                element: <PrivateRoute><CollageDetails></CollageDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://collage-booking-facilities-server-side.vercel.app/allCollection/${params.id}`)
              },
        ]
    },
]);
export default router;
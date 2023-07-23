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
                element: <CollageDetails></CollageDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/allCollection/${params.id}`)
              },
        ]
    },
]);
export default router;
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Details from "../pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/data.json"),
         },
         {
            path: "/data/:id",
            element: (
               <PrivateRoute>
                  <Details></Details>
               </PrivateRoute>
            ),
            loader: () => fetch("/data.json"),
         },
         {
            path: "/profile",
            element: (
               <PrivateRoute>
                  <Profile></Profile>
               </PrivateRoute>
            ),
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/notFound",
            element: <NotFound></NotFound>,
         },
      ],
   },
]);
export default router;

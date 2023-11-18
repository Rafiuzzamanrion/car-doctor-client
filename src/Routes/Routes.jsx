import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/Checkout/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";
import Services from "../Pages/Home/Services/Services";

import About from "../Pages/Home/About/About";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'checkout/:id',
          element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
          loader:({params})=> fetch(`https://car-doctor-server-murex-iota.vercel.app/services/${params.id}`)
        
        },
        {
          path:'bookings',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
        },
        {path:'/services',
        element:<Services></Services>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },

      {
        path:'/about',
        element:<About></About>
      }
      ]
    },
  ]);

  export default router;
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import Auth from './Providers/Auth';





ReactDOM.createRoot(document.getElementById('root')).render(
 <div className=' mx-2'>
   <React.StrictMode>
 <Auth> <RouterProvider router={router} /></Auth>
  </React.StrictMode>,
 </div>
)

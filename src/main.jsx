import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Appliedjobs from './Components/AppliedJobs/Appliedjobs';
import Errorpage from './Components/ErrorPage/Errorpage';
import JobDetails from './Components/JobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Errorpage></Errorpage>,
    children :[
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/applied',
        element : <Appliedjobs></Appliedjobs>,
        loader : () => fetch('jobs.json')
      },
      {
        path :'/job/:id',
        element : <JobDetails></JobDetails>,
        loader : ()=>fetch('jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)

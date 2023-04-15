import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Components/Main/Main';
import Phones from './Components/Phones/Phones';
import Phone from './Components/Phone/Phone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "phones",
        element: <Phones></Phones>,
        loader:()=>fetch('http://localhost:4110/phones')
      },
      {
        path: "phone/:phoneid",
        element:<Phone></Phone>,
        loader:({params})=>fetch(`http://localhost:4110/phones/${params.phoneid}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

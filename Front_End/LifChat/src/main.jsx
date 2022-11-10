import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Register from '../component/Register'
import Chat from '../component/Chat'
import {createBrowserRouter,RouterProvider,Route,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/Chat",
    element: <Chat/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)

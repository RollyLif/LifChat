import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-perfect-scrollbar/dist/css/styles.css';
import Register from '../component/Register'
import Message from '../component/message'
import {createBrowserRouter,RouterProvider,Route,} from "react-router-dom";
import Discussion from '../component/Discussion'

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
    path: "/Message",
    element: <Message/>,
  },
  {
    path: "/Discussion",
    element : <Discussion/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)

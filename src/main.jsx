import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddUser from './components/AddUser.jsx';
import UpdateUser from './components/UpdateUser.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader : () => fetch("https://user-managment-server-dusky.vercel.app/users/")
  },
  {
    path: "/adduser",
    element: <AddUser></AddUser>,
  },
  {
    path: "/updateuser/:id",
    element: <UpdateUser></UpdateUser>,
    loader : ({params})=> fetch(`https://user-managment-server-dusky.vercel.app/users/${params.id}`)
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

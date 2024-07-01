import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Top from './pages/Top.jsx'
import NotFound from './pages/NotFoud.jsx'

const router=createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <NotFound/>,
  },
  {
    path:"/Top",
    element:<Top/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
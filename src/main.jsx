import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css"

import App from './App'

import Home from './pages/Home'
import Login from './pages/Login'
import Ticket from './pages/Ticket.jsx'
import Modelos from './pages/Modelos.jsx'
import Nyck from './pages/Nyck.jsx'
import Edoardo from './pages/Edoardo.jsx'
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/ticket", element: <Ticket /> },
      { path: "/modelos", element: <Modelos /> },
      { path: "/nyck", element: <Nyck /> },
      { path: "/edoardo", element: <Edoardo /> },
      {path:"*",
        element: <NotFound />
      }
    ]
  }]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

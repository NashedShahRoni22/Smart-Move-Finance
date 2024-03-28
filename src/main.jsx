import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layouts/Main.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Testimonial from './pages/Testimonial.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact_us',
        element: <Contact />,
      },
      {
        path: '/testimonial',
        element: <Testimonial />,
      },
      {
        path: '/about_us',
        element: <AboutUs />,
      },
      {
        path: '/service',
        element: <Services/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

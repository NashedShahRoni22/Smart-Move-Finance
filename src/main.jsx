import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import Admin from "./layouts/Admin.jsx";
import AdminAddService from "./pages/AdminAddService.jsx";
import GetService from "./pages/GetService.jsx";
import UpdateService from "./pages/UpdateService.jsx";
import Appointment from "./pages/Appointment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact_us",
        element: <Contact />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
      {
        path: "/about_us",
        element: <AboutUs />,
      },
      {
        path: "/service",
        element: <Services />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin",
        element: <Appointment />,
      },
      {
        path: "/admin/add_service",
        element: <AdminAddService />,
      },
      {
        path: "/admin/manage_service",
        element: <GetService />,
      },
      {
        path: "/admin/update_service/:slug/:id",
        element: <UpdateService />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

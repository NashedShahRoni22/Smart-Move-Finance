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
import ServiceDetails from "./components/ServiceDetails.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ContactMessage from "./pages/ContactMessage.jsx";

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
      {
        path: "/service/:slug",
        element: <ServiceDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
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
        path: "/admin/update_service/:slug",
        element: <UpdateService />,
      },
      {
        path: "/admin/contact_message",
        element: <ContactMessage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Bottombar from "../components/Bottombar";
import { useEffect } from "react";

export default function Main() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <main>
      <Topbar />
      <Navbar />
      <Outlet />
      <Bottombar />
    </main>
  );
}

import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Bottombar from "../components/Bottombar";

export default function Main() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <Outlet />
      <Bottombar />
    </main>
  );
}

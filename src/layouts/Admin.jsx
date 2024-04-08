import  { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LeftBar from "../components/LeftBar";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Admin() {
  const [show, setShow] = useState(false);
  return (
    <section>
      <div className="flex justify-between md:hidden p-5 bg-primary text-white">
        <Link to="/">Home</Link>
        <button onClick={() => setShow(!show)}>
          {show ? (
            <IoMdClose className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>
      {show && <LeftBar />}
      <div className="flex mx-5 md:mx-0">
        <div className="hidden md:block md:w-1/3 lg:w-1/6">
          <LeftBar />
        </div>
        <div className="md:w-2/3 lg:w-5/6">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

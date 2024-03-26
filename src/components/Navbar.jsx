import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/contact_us",
    },
  ];
  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto p-2.5 md:py-5 flex justify-between items-center">
        <div>Logo</div>
        {/* tablet and desktop view */}
        <div className="hidden md:flex gap-8">
          {menus.map((m, i) => (
            <Link key={i}>{m.name}</Link>
          ))}
        </div>
        {/* mobile view */}
        {showNav && (
          <div className="absolute left-0 top-0 py-5 min-w-full min-h-screen flex flex-col items-center justify-center bg-black/90 md:hidden gap-8 z-50">
            {menus.map((m, i) => (
              <Link to={m.link} key={i} className="text-3xl">
                {m.name}
              </Link>
            ))}
          </div>
        )}

        <div className="flex gap-5">
          <button className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm bg-[#3069E3] hover:shadow-xl rounded-xl">
            Get In Touch
          </button>
          <button onClick={() => setShowNav(!showNav)} className="md:hidden">
            {showNav ? (
              <MdClose className="text-3xl absolute top-5 right-5 z-50" />
            ) : (
              <HiMiniBars3BottomLeft className="text-3xl" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import {
  Dialog,
} from "@material-tailwind/react";
import BookingForm from "./BookingForm";
import logo from "../assets/smfp_logo.jpg"

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Services",
      link: "/service",
    },
    {
      name: "About Us",
      link: "/about_us",
    },
    // {
    //   name: 'Blogs & Articles',
    //   link: '/',
    // },
    {
      name: "Contact Us",
      link: "/contact_us",
    },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <nav className="bg-primary text-white sticky top-0 z-50">
      <div className="mx-5 md:container md:mx-auto py-4 md:py-6 flex justify-between items-center">
        {/* <p className="font-bold text-secondary">SMFP</p> */}
        <img src={logo} alt="" className="w-[100px] md:w-[150px]" />
        {/* tablet and desktop view */}
        <div className="hidden lg:flex gap-8">
          {menus.map((m, i) => (
            <Link to={m.link} key={i}>
              {m.name}
            </Link>
          ))}
        </div>
        {/* mobile view */}
        {showNav && (
          <div className="absolute left-0 top-0 py-5 min-w-full min-h-screen flex flex-col items-center justify-center bg-black/90 lg:hidden gap-8 z-50">
            {menus.map((m, i) => (
              <Link
                to={m.link}
                key={i}
                className="text-3xl"
                onClick={() => setShowNav(!showNav)}
              >
                {m.name}
              </Link>
            ))}
          </div>
        )}

        <div className="flex gap-5">
          <div className="flex gap-5">
            <button
              onClick={handleOpen}
              className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-secondary hover:bg-white text-primary font-semibold duration-300 ease-linear rounded-full"
            >
              Get In Touch
            </button>
            <button onClick={() => setShowNav(!showNav)} className="lg:hidden">
              {showNav ? (
                <MdClose className="text-3xl absolute top-5 right-5 z-50" />
              ) : (
                <HiMiniBars3CenterLeft className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <BookingForm handleOpen={handleOpen}/>
      </Dialog>
    </nav>
  );
}

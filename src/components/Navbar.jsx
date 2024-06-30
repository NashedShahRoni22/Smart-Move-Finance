import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import BookingForm from "./BookingForm";
import logo from "../assets/smfp_logo.jpg";
import { CgChevronRight } from "react-icons/cg";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showChild, setShowChild] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [services, setServices] = useState([]);

  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Services",
      link: "/service",
      child: services,
    },
    {
      name: "About Us",
      link: "/about_us",
    },
    {
      name: "Contact Us",
      link: "/contact_us",
    },
  ];
  //get services
  useEffect(() => {
    fetch("https://api.smartmovefinancial.com.au/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setServices(data.data);
        }
      });
  }, []);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50">
      <div className="mx-5 md:container md:mx-auto py-4 md:py-6 flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="Smart Move Finance is a best mortgage broker in sydney" className="w-[100px] md:w-[150px]" loading="lazy" />
        </Link>
        {/* tablet and desktop view */}
        <div className="hidden lg:flex gap-8">
          {menus.map((m, i) => (
            <div key={i} className="relative group">
              <Link to={m?.link}>{m?.name}</Link>
              {m?.child && (
                <div className="hidden group-hover:grid grid-cols-2 gap-2.5 p-4 absolute z-50 bg-white text-primary min-w-[500px] shadow rounded">
                  {m?.child?.map((mc) => (
                    <div key={mc?.id}>
                      <a
                        className="hover:translate-x-2.5 ease-linear duration-300 flex gap-2 items-center"
                        href={`/service_details/${mc?.slug}/${mc?.id}`}
                      >
                        <CgChevronRight /> {mc?.title}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* mobile view */}
        {showNav && (
          <div className="absolute left-0 top-0 p-5 min-w-full min-h-screen bg-black/90 lg:hidden gap-8 z-50 flex flex-col">
            {menus.map((m, i) => (
              <div key={i} className="">
                <div className="flex justify-between items-center">
                  <Link
                    to={m?.link}
                    className="text-xl md:text-3xl"
                    onClick={() => setShowNav(!showNav)}
                  >
                    {m?.name}
                  </Link>
                  {m?.child && (
                    <>
                    {
                      showChild ?
                      <BiChevronUp className="text-3xl" onClick={() => setShowChild(!showChild)} />
                      :
                      <BiChevronDown className="text-3xl" onClick={() => setShowChild(!showChild)} />
                    }
                    </>
                  )}
                </div>
                {m?.child &&
                  (showChild === true && (
                    <div className="flex flex-col gap-2.5 ml-2.5 mt-2.5">
                      {m?.child?.map((mc) => (
                        <a
                          href={`/service_details/${mc?.slug}/${mc?.id}`}
                          className="hover:translate-x-2.5 ease-linear duration-300 flex gap-2 items-center md:text-xl"
                        >
                          {mc?.title}
                        </a>
                      ))}
                    </div>
                  ))}
              </div>
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
        <BookingForm handleOpen={handleOpen} />
      </Dialog>
    </nav>
  );
}

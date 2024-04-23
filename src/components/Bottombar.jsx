import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Bottombar() {
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
    {
      name: "Contact Us",
      link: "/contact_us",
    },
  ];
  return (
    <footer className="bg-primary text-white">
      <section className="mx-5 md:container md:mx-auto py-5 md:py-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
          {/* tablet and desktop view */}
          <div className="flex flex-wrap gap-5 justify-center">
            {menus.map((m, i) => (
              <Link to={m.link} key={i}>
                {m.name}
              </Link>
            ))}
          </div>

          <form className="flex justify-center">
            <input
              className="px-4 py-2 rounded-l-full focus:outline-none text-primary"
              type="Email"
              placeholder="Your Email"
            />
            <button className="px-4 py-2 border rounded-r-full">
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-5 md:justify-between mt-5 md:mt-10">
          <p className="flex items-center justify-center gap-2">
            Copyright Reserved by Smart Move Finance 2024
          </p>
          <div className="flex justify-center gap-5">
            <FaFacebook className="text-xl md:text-3xl" />
            <FaTwitter className="text-xl md:text-3xl" />
            <FaInstagram className="text-xl md:text-3xl" />
          </div>
        </div>
      </section>
    </footer>
  );
}

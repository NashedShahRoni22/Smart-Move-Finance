import React from "react";
import { Link } from "react-router-dom";
import { FaRegAddressBook } from "react-icons/fa";
import { MdDesignServices, MdAddCircle } from "react-icons/md";
export default function LeftBar() {
  const menus = [
    {
      name: "Appointments",
      link: "/admin",
      icon: <FaRegAddressBook />,
    },
    {
      name: "Add Service",
      link: "/admin",
      icon: <MdAddCircle />,
    },
    {
      name: "Manage Service",
      link: "/admin/all_services",
      icon: <MdDesignServices />,
    },
  ];
  return (
    <div className="p-5 bg-primary text-white min-h-screen">
      <h5 className="text-secondary text-xl font-semibold">Smart Move Finance</h5>
      <div className="mt-5 md:mt-10 flex flex-col gap-5 md:gap-5">
        {menus.map((m) => (
          <Link to={m.link} className="min-w-full flex gap-2.5 items-center">
            <span className="text-xl">{m.icon}</span>
            {m.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

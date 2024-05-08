import { Link } from "react-router-dom";
import { MdEmail, MdLocalPhone } from "react-icons/md";

export default function Topbar() {
  return (
    <div className="bg-white text-primary p-2.5 hidden md:block">
      <div className="container mx-auto flex justify-between">
        <div className="flex gap-8 lg:gap-16">
          <Link className="flex items-center gap-1.5">
            {" "}
            <MdEmail className="text-xl" /> info@smartmovefinancial.com.au
          </Link>
          <Link className="flex items-center gap-1.5">
            {" "}
            <MdLocalPhone className="text-xl" /> +61 424 252 118
          </Link>
        </div>
        <p>Make your dream true</p>
      </div>
    </div>
  );
}

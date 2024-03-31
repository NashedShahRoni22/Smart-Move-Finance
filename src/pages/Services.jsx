import { useState } from "react";
import yellowLine from "../assets/lines/yellow_line.png";
import { Link } from "react-router-dom";
const Services = () => {
  const [showNum, setShowNum] = useState(8);
  const services = [
    {
      id: 1,
      img: "https://i.ibb.co/7pcxXMK/icons8-home-50.png",
      name: "Home Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 2,
      img: "https://i.ibb.co/B3yFhT4/icons8-car-50.png",
      name: "Car Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 3,
      img: "https://i.ibb.co/wBxD01c/icons8-user-64.png",
      name: "Personal Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 4,
      img: "https://i.ibb.co/dK1Vn65/icons8-briefcase-50.png",
      name: "Business Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 5,
      img: "https://i.ibb.co/xGLgf4Y/icons8-dollar-50.png",
      name: "Refinance Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 6,
      img: "https://i.ibb.co/RQD1N4s/foreign.png",
      name: "Foreign Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 7,
      img: "https://i.ibb.co/PrgC3SF/fixed.png",
      name: "Fixed Rate Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 8,
      img: "https://i.ibb.co/3zjdNm7/private.png",
      name: "Private Equity Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 9,
      img: "https://i.ibb.co/cD26C3x/icons8-general-ledger-50.png",
      name: "General Insurances Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 10,
      img: "https://i.ibb.co/KWx21rm/self.png",
      name: "Self Managed Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 11,
      img: "https://i.ibb.co/6NGbMsR/credit.png",
      name: "Line of Credit Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 12,
      img: "https://i.ibb.co/LvmQ4B1/construction.png",
      name: "Construction Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
    {
      id: 13,
      img: "https://i.ibb.co/w0JjMGr/basic.png",
      name: "Basic Variable Loan",
      description:
        "Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.",
    },
  ];

  return (
    <section className="mx-5 md:container md:mx-auto py-5 md:py-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-primary text-3xl lg:text-6xl font-semibold">
          Our Services
        </h1>
        <img src={yellowLine} alt="" className="" />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {services.slice(0, showNum).map((loan, i) => (
          <Link key={i}>
            <div className="text-primary hover:shadow hover:shadow-primary  flex  flex-col gap-5  justify-between items-center p-10 rounded-3xl duration-300 ease-linear">
              <div>
                <img src={loan.img} alt="" className="size-12 md:size-18" />
              </div>
              <p className="text-xl md:text-2xl font-bold">{loan.name}</p>
              <p className="md:text-xl text-center">{loan.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10 md:mt-20">
        {showNum === 8 ? (
          <button
            onClick={() => setShowNum(services.length)}
            className="px-4 py-2 border border-primary rounded-full"
          >
            Explore More
          </button>
        ) : (
          <button
            onClick={() => setShowNum(8)}
            className="px-4 py-2 border border-primary rounded-full"
          >
            View Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Services;

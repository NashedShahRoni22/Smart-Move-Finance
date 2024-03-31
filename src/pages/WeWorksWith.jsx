import React from "react";
import yellowLine from "../assets/lines/yellow_line.png";

export default function WeWorksWith() {
  const images = [
    { img: "https://i.ibb.co/T4z534y/nab.png" },
    { img: "https://i.ibb.co/jJhvcck/mebank.png" },
    { img: "https://i.ibb.co/F6r8hBd/latrobe-Financial.png" },
    { img: "https://i.ibb.co/7XHjJSd/anz.png" },
    { img: "https://i.ibb.co/3c6jKNd/connective.png" },
    { img: "https://i.ibb.co/Lvj3Ph3/citi-Bank-new.png" },
    { img: "https://i.ibb.co/xLwCG9C/bankWest.png" },
    { img: "https://i.ibb.co/MDbsm7R/redrock.png" },
    { img: "https://i.ibb.co/SRsCwmt/mkmcapital.png" },
    { img: "https://i.ibb.co/MSwrz1K/Bank-Australia-logo-e1609164649610.png" },
    { img: "https://i.ibb.co/9N8Mzf3/592px-Allianz-svg.png" },
    { img: "https://i.ibb.co/zrq55Hy/ABA.png" },
    { img: "https://i.ibb.co/f8HXmJq/adelaide-bank.png" },
    { img: "https://i.ibb.co/CBkmhPn/afm-e1609164715580.png" },
    { img: "https://i.ibb.co/VYQcJHF/amp-bank-e1609164669294.jpg" },
    { img: "https://i.ibb.co/Ln2qmCt/bank-of-syney.png" },
    { img: "https://i.ibb.co/QdcY6ZN/westpac.png" },
    { img: "https://i.ibb.co/W3Qt1Mj/sunCorp.png" },
  ];
  return (
    <section className="mx-5 md:container md:mx-auto py-5 md:py-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary text-3xl lg:text-6xl font-semibold">
          We Works With
        </h1>
        <img src={yellowLine} alt="" className="" />
      </div>
      <div className="mt-5 md:mt-10 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 md:gap-10 place-items-center">
        {images.map((i) => (
          <img key={i} src={i.img} alt="" />
        ))}
      </div>
    </section>
  );
}

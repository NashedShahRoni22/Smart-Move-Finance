import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { id, slug } = useParams();
  const [service, setService] = useState({});
  const [loader, setLoader] = useState(false);

  //get service
  useEffect(() => {
    setLoader(true);
    fetch(`https://smartmovefinancial.com.au/api/service-details/${slug}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setService(data.data);
          setLoader(false);
        }
      });
  }, []);
  return (
    <section className="mx-5 md:container md:mx-auto py-5 md:py-10 flex flex-col gap-2.5 md:gap-5">
      <div className="flex justify-center">
        {/* <img src={service?.thumbnail} alt="" className="w-full h-[60vh]" /> */}
        <img src={service?.icon} alt="" className="" />
      </div>
      <h1 className="text-center text-xl md:text-3xl font-semibold text-primary">
        {service?.title}
      </h1>
      <p className="text-center md:text-xl text-secondary">{service?.slogan}</p>
      <div dangerouslySetInnerHTML={{ __html: service?.content }} />
    </section>
  );
}

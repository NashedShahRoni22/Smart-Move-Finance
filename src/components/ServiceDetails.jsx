import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderPage from "./LoaderPage";

export default function ServiceDetails() {
  const { id, slug } = useParams();
  const [service, setService] = useState({});
  const [loader, setLoader] = useState(false);

  //get service
  useEffect(() => {
    setLoader(true);
    fetch(`https://api.smartmovefinancial.com.au/api/service-details/${slug}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setService(data.data);
          setLoader(false);
        }
      });
  }, []);
  return (
    <>
      {loader ? (
        <LoaderPage />
      ) : (
        <section className="mx-5 md:container lg:w-[50%] md:mx-auto py-5 md:py-10 flex flex-col gap-2.5 md:gap-5">
          <div className="flex flex-col gap-2.5 md:gap-5">
            <div className="flex justify-center">
              <img src={service?.icon} alt="" className="" />
            </div>
            <h1 className="text-center text-xl md:text-3xl font-semibold text-primary">
              {service?.title}
            </h1>
            <p className="text-center md:text-xl text-orange-800 font-semibold">
              {service?.slogan}
            </p>
            <div dangerouslySetInnerHTML={{ __html: service?.content }} />
          </div>
          {/* <div className="hidden md:block">
        <img src={service?.thumbnail} alt="" className="size-72" />
      </div> */}
        </section>
      )}
    </>
  );
}

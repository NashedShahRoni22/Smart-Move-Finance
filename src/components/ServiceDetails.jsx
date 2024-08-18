import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderPage from "./LoaderPage";

export default function ServiceDetails() {
  const { slug } = useParams();
  const [service, setService] = useState({});
  console.log(service);

  const [loader, setLoader] = useState(false);

  //get service
  useEffect(() => {
    setLoader(true);
    fetch(`https://api.smartmovefinancial.com.au/api/service-details/${slug}`)
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
              <img
                src={service?.thumbnail}
                alt=""
                className="w-full h-[250px] md:h-[400px]"
                loading="lazy"
              />
            </div>

            <h1 className="text-xl md:text-3xl text-orange-800 font-semibold">
              {service?.slogan}
            </h1>
            <p className="md:text-xl font-semibold text-primary">
              {service?.title}
            </p>
            <div dangerouslySetInnerHTML={{ __html: service?.content }} />
          </div>
        </section>
      )}
    </>
  );
}

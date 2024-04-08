import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GetService() {
  const [services, setServices] = useState([]);
  console.log(services);

  //get services
  useEffect(() => {
    fetch("https://api.nsrdev.com/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setServices(data.data);
        }
      });
  }, []);
  return (
    <section className="mt-5 md:mt-0 md:p-5 lg:p-10">
      <h5>Total Servuces: {services.length}</h5>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {services?.map((s, i) => (
          
            <div key={i} className="text-primary hover:shadow hover:shadow-primary  flex  flex-col gap-5  justify-between items-center p-10 rounded-3xl duration-300 ease-linear">
              <div>
                <img src={s?.icon} alt="" className="size-12 md:size-18" />
              </div>
              <p className="text-xl md:text-2xl font-bold">{s?.title}</p>
              <p className="md:text-xl text-center">{s?.slogan}</p>
              <div className="flex gap-2">
                <Link to={`/admin/update_service/${s?.slug}/${s?.id}`} className="bg-primary text-white px-2.5 py-1.5 shadow rounded">Update</Link>
                <Link className="bg-red-400 text-white px-2.5 py-1.5 shadow rounded">Delete</Link>
              </div>
            </div>
          
        ))}
      </div>
    </section>
  );
}

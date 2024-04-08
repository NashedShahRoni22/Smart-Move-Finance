import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateService() {
  const { id, slug} = useParams();
  const [service, setService] = useState({});
  console.log(service);
  useEffect(() => {
    fetch(`https://api.nsrdev.com/api/service-details/${slug}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setService(data.data);
        }
      });
  }, []);
  return <div>Update Service: {id}</div>;
}

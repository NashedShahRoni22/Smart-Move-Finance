import { Button, Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import LoaderPage from "../components/LoaderPage";

export default function UpdateService() {
  const { id, slug } = useParams();
  const [service, setService] = useState({});

  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [updateLoader, setUpdateLoader] = useState(false);
  const [value, setValue] = useState();
  const [icon, setIcon] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [slogan, setSlogan] = useState("");

  //get service
  useEffect(() => {
    setLoader(true);
    fetch(`https://api.nsrdev.com/api/service-details/${slug}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setService(data.data);
          setTitle(data.data.title);
          setSlogan(data.data.slogan);
          setValue(data.data.content);
          setLoader(false);
        }
      });
  }, []);

  // update service
  const updateService = async (id) => {
    setUpdateLoader(true);

    // console.log(icon, title, thumbnail, slogan, value);

    const formData = new FormData();
    formData.append("icon", icon);
    formData.append("title", title);
    formData.append("thumbnail", thumbnail);
    formData.append("slogan", slogan);
    formData.append("content", value);

    try {
      const response = await fetch(
        `https://api.nsrdev.com/api/service/update/${id}`,
        {
          method: "POST",
          body: formData,
          headers: {
            // Add any necessary headers, such as authorization
          },
        }
      );
      const data = await response.json();
      if (data.status === true) {
        window.alert(data.msg);
        setUpdateLoader(false);
        navigate("/admin/all_services");
      }
      // Handle response data as needed
    } catch (error) {
      console.error("Error:", error);
      setUpdateLoader(false);
    }
  };
  return (
    <section className="mt-5 md:mt-0 md:p-5 lg:p-10 flex flex-col gap-2.5">
      {loader ? (
        <LoaderPage />
      ) : (
        <>
          <label className="font-semibold">Update thumbnail</label>
          <img src={service?.thumbnail} alt="" className="w-full h-64" />
          <input
            type="file"
            className=""
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
          <label className="font-semibold">Update icon</label>
          <img className="size-24" src={service?.icon} alt="" />
          <input
            type="file"
            className=""
            onChange={(e) => setIcon(e.target.files[0])}
          />
          <label className="font-semibold">Title</label>
          <input
            className="px-4 py-2 border w-full"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <label className="font-semibold">Slogan</label>
          <input
            className="px-4 py-2 border w-full"
            defaultValue={slogan}
            onChange={(e) => setSlogan(e.target.value)}
            type="text"
          />
          {/* <div dangerouslySetInnerHTML={{ __html: service?.content }} /> */}
          <ReactQuill theme="snow" value={value} onChange={setValue} />
          <Button
            onClick={() => updateService(service?.id)}
            className="bg-primary mt-2.5 flex gap-2 items-center w-fit"
          >
            Update
            {updateLoader && <Spinner className="h-4 w-4" />}
          </Button>
        </>
      )}
    </section>
  );
}

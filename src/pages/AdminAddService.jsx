import { Button, Spinner } from "@material-tailwind/react";
import  { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

export default function AdminAddService() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState("");
  const [icon, setIcon] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const addService = async (e) => {
    setLoader(true);
    e.preventDefault();
    const title = e.target.title.value;
    const slogan = e.target.slogan.value;

    console.log(icon, title, thumbnail, slogan, value);

    const formData = new FormData();
    formData.append("icon", icon);
    formData.append("title", title);
    formData.append("thumbnail", thumbnail);
    formData.append("slogan", slogan);
    formData.append("content", value);

    try {
      const response = await fetch("https://api.nsrdev.com/api/service/store", {
        method: "POST",
        body: formData,
        headers: {
          // Add any necessary headers, such as authorization
        },
      });
      const data = await response.json();
      if(data.status === true){
        window.alert(data.msg);
        setLoader(false);
        navigate("/admin/all_services")
      }
      // Handle response data as needed
    } catch (error) {
      console.error("Error:", error);
      setLoader(false);
    }
  };
  return (
    <form className="mt-5 md:mt-0 md:p-5 lg:p-10" onSubmit={addService}>
      <h5 className="text-xl md:text-3xl text-primary font-semibold">
        Add Service
      </h5>
      <div className='grid md:grid-cols-2 gap-2.5 md:gap-5 mt-5 md:mt-10'>
        <div className='flex flex-col gap-2.5'>
          <label>Select Icon</label>
          <input
            type="file"
            className=""
            onChange={(e) => setIcon(e.target.files[0])}
          />
        </div>
        <div className='flex flex-col gap-2.5'>
          <label>Select Thumbnail</label>
          <input
            type="file"
            className=""
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </div>
        <div className='flex flex-col gap-2.5'>
          <label>Enter Title</label>
          <input
            type="text"
            name="title"
            className="px-4 py-2 outline-none border border-primary rounded"
            placeholder="Enter Title"
          />
        </div>
        <div className='flex flex-col gap-2.5'>
          <label>Enter Slogan</label>
          <input
            type="text"
            name="slogan"
            className="px-4 py-2 outline-none border border-primary rounded"
            placeholder="Enter Slogan"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2.5">
        <label className="">Enter Content</label>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
      {/* <div className="mt-5 flex flex-col gap-2.5">
        <label className="">Preview Content</label>
        <div
          className="preview-container"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            minHeight: "100px",
          }}
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div> */}
      <Button type="submit" className="bg-primary mt-2.5 flex gap-2 items-center">
        Submit
        {
          loader && <Spinner className="h-4 w-4" />
        }
      </Button>
    </form>
  );
}

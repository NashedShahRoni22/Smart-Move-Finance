import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function BookingForm({ handleOpen }) {
  const [loader, setLoader] = useState(false);
  const [firstName, setFirstname] = useState("");
  const [loanType, setLoanType] = useState("");
  const [lastName, setLastname] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const [services, setServices] = useState([]);
  // console.log(services);

  //get services
  useEffect(() => {
    fetch("https://smartmovefinancial.com.au/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setServices(data.data);
        }
      });
  }, []);

  //post appointment
  const addAppointment = async (e) => {
    setLoader(true);
    e.preventDefault();

    console.log(
      firstName,
      loanType,
      lastName,
      phoneNumber,
      email,
      address,
      message
    );

    const formData = new FormData();

    formData.append("service_id", loanType);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("phone", phoneNumber);
    formData.append("email", email);
    formData.append("location", address);
    formData.append("message", message);
    try {
      const response = await fetch(
        "https://smartmovefinancial.com.au/api/appointment/store",
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
        handleOpen();
        console.log(data);
        setLoader(false);
      }
    } catch (error) {
      console.log("Error:", error);
      setLoader(false);
    }
  };

  return (
    <form className="p-5">
      <h5 className="text-xl lg:text-3xl text-primary font-semibold">
        Book Appointment
      </h5>
      <div className="mt-5 md:mt-10">
        {/* <Input
          label="Loan Type"
          required
          onChange={(e) => setLoanType(e.target.value)}
        /> */}
        <Select onChange={value => setLoanType(value)} label="Select Service">
          {services?.map((s,i) => (
            <Option key={i} value={s?.id}>
              {s?.title}
            </Option>
          ))}
        </Select>
      </div>
      <div className="grid md:grid-cols-2 gap-2.5 md:gap-5 mt-2.5 md:mt-5">
        <Input
          label="First Name"
          required
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Input
          label="Last Name"
          required
          onChange={(e) => setLastname(e.target.value)}
        />
        <Input
          label="Phone Number"
          type="number"
          required
          onChange={(e) => setphoneNumber(e.target.value)}
        />
        <Input label="Email" onChange={(e) => setEmail(e.target.value)} />
        <Textarea
          label="Enter Address"
          type="email"
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <Textarea
          label="Enter Message"
          required
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="mt-5 md:mt-10">
        <button
          onClick={handleOpen}
          className="px-4 py-1.5 bg-secondary text-white rounded-full shadow"
        >
          <span>Cancel</span>
        </button>
        <button
          onClick={addAppointment}
          className="ml-2.5 px-4 py-1.5 bg-primary text-white rounded-full shadow"
          disabled={
            (firstName === "") |
            (lastName === "") |
            (phoneNumber === "") |
            (email === "") |
            (address === "") |
            (message === "")
          }
        >
          {loader ? <span>Loading...</span> : <span>Book Now</span>}
        </button>
      </div>
    </form>
  );
}

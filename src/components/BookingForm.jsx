import { Button, Input, Textarea } from "@material-tailwind/react";
import React from "react";

export default function BookingForm({ handleOpen }) {
  return (
    <form className="p-5 flex flex-col gap-5  md:gap-10">
      <h5 className="text-xl lg:text-3xl text-primary font-semibold">Book Appointment</h5>
      <div className="grid md:grid-cols-2 gap-2.5 md:gap-5">
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Phone Number" />
        <Input label="Email" />
        <Textarea label="Enter Address" />
        <Textarea label="Enter Message" />
      </div>
      <div>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <button
          onClick={handleOpen}
          className="px-4 py-1.5 bg-primary text-white rounded shadow"
        >
          <span>Confirm</span>
        </button>
      </div>
    </form>
  );
}

import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import yellowLine from "../assets/lines/yellow_line.png";

export default function Contact() {
  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20 min-h-[80vh] flex justify-center items-center">
      {/* <h1 className="text-primary  text-xl md:text-3xl font-semibold">
        Contact us
      </h1> */}
      <div className="lg:flex gap-16 flex-1">
        <div className="lg:w-1/2">
          {/* <div className="flex justify-between">
            <p>Address</p>
            <p className="flex items-center">
              {" "}
              <MdLocationCity /> 178 West 27th Street, Australia.
            </p>
          </div>
          <div className="mt-5 flex justify-between">
            <p>Get in Touch</p>
            <div>
              <p className="flex items-center">
                {" "}
                <MdPhone /> +650012455
              </p>
              <p className="flex items-center">
                {" "}
                <MdEmail /> infohjb123@gmail.com
              </p>
            </div>
          </div> */}
          <div className="">
            <p className="text-primary  text-xl md:text-3xl font-semibold">
              Leave a message
            </p>
            <img src={yellowLine} alt="" />
            <form action="" className="mt-5">
              <div className="my-4">
                <Input
                  color="indigo"
                  size="lg"
                  label="Name"
                  className="text-xl "
                />
              </div>
              <div className="my-4">
                <Input
                  color="indigo"
                  size="lg"
                  label="Email"
                  className="text-xl "
                />
              </div>
              <div className="my-4">
                <Input
                  color="indigo"
                  size="lg"
                  label="Phone"
                  className="text-xl "
                />
              </div>
              <div className="my-4">
                <Input
                  color="indigo"
                  size="lg"
                  label="Address"
                  className="text-xl "
                />
              </div>
              <div className="my-4">
                <Textarea
                  color="indigo"
                  size="lg"
                  label="Your Message"
                  className="text-xl "
                />
              </div>
              <button
                type="submit"
                className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base bg-primary border border-primary hover:bg-white text-white hover:text-primary duration-300 ease-linear rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-5 md:mt-10 lg:mt-0 lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402590.51605416456!2d144.72350179230108!3d-37.971565214613975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1711541154303!5m2!1sen!2sbd"
            allowfullscreen=""
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

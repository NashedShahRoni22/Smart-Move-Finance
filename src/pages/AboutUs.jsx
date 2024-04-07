import React from "react";
import yellowLine from "../assets/lines/yellow_line.png";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
export default function AboutUs() {
  return (
    <>
      <section className="mx-5 md:container md:mx-auto py-5 md:py-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-primary text-3xl lg:text-6xl font-semibold">
            About Us
          </h1>
          <img src={yellowLine} alt="" className="" />
        </div>
        <div className="mt-5 md:mt-10 flex flex-col gap-5 md:flex-row-reverse md:items-center md:gap-10">
          <div className="md:w-1/2 lg:w-1/3">
            <img
              src="https://i.ibb.co/HzFT8FT/Whats-App-Image-2024-03-28-at-23-27-40-cdaf51a4.jpg"
              alt="Nawshad Ahmed"
              className="rounded-3xl w-full h-[400px] md:h-[500px]"
            />
          </div>
          <div className="md:w-1/2 lg:w-2/3 flex flex-col gap-2.5 md:gap-5 justify-between">
            <RiDoubleQuotesL className="text-3xl text-secondary" />
            <p className="text-justify md:text-xl">
              Nawshad Ahmed brings over 5 years of expertise in mortgage
              services to the forefront, embodying a commitment to excellence
              and personalized client care. With a deep-rooted passion for
              assisting individuals and families in realizing their
              homeownership dreams, Nawshad's approach combines empathy,
              integrity, and unparalleled industry knowledge. As the founder of{" "}
              <span className="text-primary font-semibold">
                Smart Move Finance PTY Ltd
              </span>
              , Nawshad's dedication to staying abreast of market dynamics
              ensures that clients receive tailored solutions that align
              seamlessly with their financial objectives.{" "}
              <span className="text-primary font-semibold">
                Credit representative 555898, Nawshad Ahmed, is authorized under
                Australian credit license 234945 and is a proud member of FBAA &
                AFCA.
              </span>{" "}
              Through a network of trusted lenders and a focus on transparency,
              Nawshad Ahmed provides a streamlined mortgage experience,
              empowering clients to make informed decisions with confidence.
            </p>
            <h5 className="text-xl md:text-3xl font-bold text-secondary">
              Nawshad Ahmed
              <br />
              <span className="text-base text-primary">Director</span>
            </h5>
            <p className="text-justify md:text-xl">
              Nawshad's reputation as a trusted advisor is built upon a
              foundation of integrity, expertise, and unwavering commitment to
              client satisfaction. Whether you're a first-time homebuyer, a
              seasoned investor, or seeking to refinance, Nawshad's personalized
              guidance navigates the complexities of the mortgage landscape,
              delivering optimal outcomes tailored to your unique needs. With
              Nawshad Ahmed by your side, embark on your mortgage journey with
              assurance, knowing you have a dedicated ally who prioritizes your
              financial well-being and strives to turn your homeownership dreams
              into reality.
            </p>
            <div className="flex justify-end">
              <RiDoubleQuotesR className="text-3xl text-secondary" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

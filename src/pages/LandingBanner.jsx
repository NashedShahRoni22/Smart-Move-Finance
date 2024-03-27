
import { Carousel, Typography } from "@material-tailwind/react";
import sliderImage1 from "../assets/banner/loan_slider_image (1).jpg";
import sliderImage2 from "../assets/banner/loan_slider_image (2).jpg";
import sliderImage3 from "../assets/banner/loan_slider_image (3).jpg";

export default function LandingBanner() {
  // sliders content
  const sliders = [
    {
      Banner: sliderImage1,
      Title: "Unlock Your Dream Home",
      Description:
        "Our home loan services cater to first-time buyers, seasoned homeowners, and property investors alike. With a variety of options including basic variable, fixed-rate, and standard variable loans, we ensure you find the perfect fit for your dream home.",
    },

    {
      Banner: sliderImage2,
      Title: "Maximize Your Business",
      Description:
        "Empower your business ventures with our tailored business loan solutions. Whether you're starting a new venture, expanding operations, or need capital for investments, our business loan options provide the financial support you need to thrive.",
    },

    {
      Banner: sliderImage3,
      Title: "Invest Wisely, Grow Securely",
      Description:
        "Achieve your personal goals with our flexible personal loan services. From funding your education, managing unexpected expenses, to planning your dream vacation, we offer personalized loan solutions to suit your lifestyle and financial requirements.",
    },
  ];
  return (
    <Carousel className="lg:h-[80vh]" navigation={false}>
      {sliders.map((s, i) => (
        <div key={i} className="relative h-full w-full">
          <img
            src={s.Banner}
            alt="Hero_Image"
            className="h-full w-full object-cover "
          />
          <div className="absolute inset-0 h-full w-full flex flex-col justify-center items-center  bg-black/75">
            <div className="md:text-center w-3/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-2.5 md:mb-8 text-xl md:text-3xl lg:text-8xl"
              >
                {s.Title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-2.5 md:mb-8 opacity-80 text-sm md:text-xl"
              >
                {s.Description}
              </Typography>
              <button className="px-2 md:px-4 py-1 md:py-2 text-xs bg-white rounded shadow">
                Explore
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

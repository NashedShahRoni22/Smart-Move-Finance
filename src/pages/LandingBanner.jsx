
import { Carousel, Typography } from "@material-tailwind/react";
import sliderImage1 from "../assets/banner/loan_slider_image (1).jpg";
import sliderImage2 from "../assets/banner/loan_slider_image (2).jpg";
import sliderImage3 from "../assets/banner/loan_slider_image (3).jpg";

export default function LandingBanner() {
  // sliders content
  const sliders = [
    {
      banner: sliderImage1,
      title: "Unlock Your Dream Home",
      description:
        "Explore flexible loan options tailored to your needs, turning your dream of homeownership into reality.",
    },

    {
      banner: sliderImage2,
      title: "Maximize Your Business",
      description:
        "Discover competitive rates and refinancing solutions to optimize your finances and save big on your mortgage.",
    },

    {
      banner: sliderImage3,
      title: "Invest Wisely, Grow Securely",
      description:
        "Explore investment property loans designed to help you build wealth and secure your financial future with confidence.",
    },
  ];
  return (
    <Carousel className="lg:h-[80vh]" navigation={false}>
      {sliders.map((s, i) => (
        <div key={i} className="relative h-full w-full">
          <img
            src={s.banner}
            alt="Hero_Image"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full flex justify-center items-center  bg-black/80">
            <div className="text-center w-3/4 lg:w-3/5">
              <Typography
                variant="h1"
                color="white"
                className="mb-2.5 md:mb-8 lg:mb-12 text-3xl md:text-5xl lg:text-8xl"
              >
                {s.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-2.5 md:mb-8 lg:mb-12 text-sm md:text-xl lg:text-3xl"
              >
                {s.description}
              </Typography>
              <button className="px-3 md:px-6 py-1.5 md:py-3 text-xs md:text-base bg-secondary hover:bg-white text-primary font-semibold rounded-full shadow">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

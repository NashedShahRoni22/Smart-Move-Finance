import { Carousel, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function LandingBanner() {
  // sliders content
  const sliders = [
    {
      image: "https://i.ibb.co/DVL8xLp/home-loan-mortgage-broker-sydney.webp",
      alt: "Smart Move Finance offer best home loan mortgage broker services in sydney",
      title: "Your Homeownership Starts Here",
      description:
        "At Smart Move Finance, we make your dream of owning a home a reality. Our expert mortgage brokers in Sydney are dedicated to finding you the best home loan options, according to your unique needs. Let us guide you every step by our home loan expert.",
    },
    {
      image: "https://i.ibb.co/4mt04Mz/small-business-loan-deal.webp",
      alt: "Smart Move Finance offer best business loan in sydney",
      title: "Your Business Growth with the Right Loan",
      description:
        "Expand your business with Smart Move Finance’s business loan solutions. Our experienced mortgage brokers in Sydney work with you to secure the financing you need to take your business to the next level. Trust us to support your entrepreneurial journey.",
    },
    {
      image: "https://i.ibb.co/H2kXD57/personal-loan-deal.webp",
      alt: "Smart Move Finance offer best personal loan in sydney",
      title: "Achieve Personal Goals with Flexible Loans",
      description:
        "Smart Move Finance offers personalized loan solutions, Whether for a vacation, home renovation, or unexpected expenses. Our expert finance brokers in Sydney ensure you get the best personal loan to fit your lifestyle and needs. Ensure your financial freedom with us. ",
    },
    {
      image: "https://i.ibb.co/m41Kv03/car-loan-services-sydney.webp",
      alt: "Smart Move Finance mortgage broker in Sydney provide expert car loan solutions",
      title: "Your Dream Car with Our Car Loans",
      description:
        "Get behind the wheel of your dream car with Smart Move Finance’s affordable car loan options. Our mortgage brokers in Sydney provide expert advice and loan solutions to help you secure the best deal on your new vehicle. ",
    },
    {
      image: "https://i.ibb.co/C5yb0dM/refinance-home-and-car-loan-offer.webp",
      alt: "Refinance home and car loan offer in Smart Move Finance",
      title: "Refinance Your Loan for Better Rates",
      description:
        "Smart Move Finance helps you refinance your existing loan to benefit from better rates and terms. Our Sydney mortgage brokers are here to assist you in reducing your monthly payments and saving money. Let our finance expert find the perfect refinance solution for you.",
    },
  ];
  return (
    <Carousel navigation={false}>
      {sliders.map((s, i) => (
        <section
          key={i}
          className={`bg-gradient-to-r min-h-[50vh] lg:min-h-[80vh] flex justify-center items-center ${
            i % 2 !== 0
              ? "from-primary via-[#34327D] to-primary"
              : "from-blue-900 via-blue-400 to-blue-900"
          }`}
        >
          <div className="mx-5 md:container md:mx-auto lg:flex lg:justify-center lg:items-center lg:gap-10 h-full">
            <div className="flex flex-col justify-center items-center lg:w-1/2 lg:items-start">
              <Typography
                variant="h1"
                color="white"
                className="text-2xl md:text-4xl text-center lg:text-left"
              >
                {s.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="my-5 md:my-10 text-sm md:text-xl text-center lg:text-justify"
              >
                {s.description}
              </Typography>
              <Link
                to={"/service"}
                className={`px-4 py-2 text-xs md:text-base ${
                  i % 2 !== 0
                    ? "bg-secondary text-primary"
                    : "bg-primary text-white hover:text-primary"
                } hover:bg-white font-semibold rounded-full shadow`}
              >
                Explore Our Services
              </Link>
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <img src={s.image} alt={s.alt} className="rounded-xl shadow-xl" loading="lazy" />
            </div>
          </div>
        </section>
      ))}
    </Carousel>
  );
}

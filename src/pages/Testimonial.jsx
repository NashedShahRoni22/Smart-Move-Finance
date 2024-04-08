import { FaQuoteLeft } from "react-icons/fa";
import yellowLine from "../assets/lines/yellow_line.png";
const Testimonial = () => {
  const testimonials = [
    {
      img: 'https://i.ibb.co/fS1B3YT/amy-hirschi-b3-AYk8-HKCl0-unsplash.jpg" alt="amy-hirschi-b3-AYk8-HKCl0-unsplash',
      name: "Emily Roberts",
      designation: "Homeowner",
      description:
        "I can’t thank the team enough for their support in helping me secure my first home loan. They made the process easy to understand and were with me every step of the way. Highly recommend!",
    },
    {
      img: 'https://i.ibb.co/MD02Pft/luis-villasmil-Z4rqv-Rp-Rj38-unsplash.jpg" alt="luis-villasmil-Z4rqv-Rp-Rj38-unsplash',
      name: "Mark Thompson",
      designation: "Business Owner",
      description:
        "Securing a business loan was a daunting task, but with the expert guidance from this team, I was able to navigate through the complexities and find a solution that perfectly fit my needs. Truly grateful for their assistance!",
    },
    {
      img: 'https://i.ibb.co/n1rYJHW/juan-encalada-WC7-KIHo13-Fc-unsplash.jpg" alt="juan-encalada-WC7-KIHo13-Fc-unsplash',
      name: "Sarah Williams",
      designation: "Car Enthusiast",
      description:
        "Getting a car loan seemed like a distant dream until I stumbled upon this website. They not only helped me find a competitive rate but also provided invaluable advice on choosing the right vehicle. Thank you for making my dream car a reality!",
    },
    {
      img: 'https://i.ibb.co/hgSkJPg/oguz-yagiz-kara-MZf0m-I14-RI0-unsplash.jpg" alt="oguz-yagiz-kara-MZf0m-I14-RI0-unsplash',
      name: "Jason Lee",
      designation: "Personal Loan Applicant",
      description:
        "When unexpected expenses arose, I turned to this team for a personal loan. Their efficient service and quick approval process gave me the financial relief I needed without any hassle. Highly recommended for anyone in need of quick funds!",
    },
    {
      img: "https://i.ibb.co/7jJJmnR/edward-cisneros-H6wpor9mjs-unsplash.jpg",
      name: "Sophie Adams",
      designation: "Property Investor",
      description:
        "As a property investor, finding the right financing is crucial. Thanks to this team, I was able to secure a competitive loan for my investment property. Their expertise and dedication exceeded my expectations!",
    },
    {
      img: 'https://i.ibb.co/9cB3XTy/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg" alt="christopher-campbell-r-DEOVt-E7v-Os-unsplash',
      name: "David Smith",
      designation: "Satisfied Customer",
      description:
        "From start to finish, the experience of working with this team for my mortgage needs was exceptional. Their professionalism, attention to detail, and personalized approach truly set them apart. Highly satisfied and would definitely return for future financial needs!",
    },
  ];

  return (
    <section className="mx-5 md:container md:mx-auto py-5 md:py-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary text-3xl lg:text-6xl font-semibold">
          Client Reviews
        </h1>
        <img src={yellowLine} alt="" className="" />
      </div>
      <div className="mt-5 md:mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="p-6 md:p-12 rounded-xl shadow-xl flex flex-col gap-5 lg:gap-10 justify-between"
          >
            <FaQuoteLeft className="text-secondary text-3xl  md:text-5xl" />
            <p className="text-primary md:text-xl">{testimonial.description}</p>
            <div className="flex items-center gap-5">
              {" "}
              <img
                src={testimonial.img}
                alt=""
                className="object-cover size-[40px] md:size-[60px] rounded-full"
              />
              <div>
                {" "}
                <p className="text-secondary font-bold md:text-xl">{testimonial.name}</p>
                <p className="text-primary">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

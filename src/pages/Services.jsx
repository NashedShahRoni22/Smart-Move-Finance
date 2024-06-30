import { useEffect, useState } from "react";
import yellowLine from "../assets/lines/yellow_line.png";
import { Link } from "react-router-dom";
import LoaderPage from "../components/LoaderPage";
const Services = () => {
  const [loading, setLoading] = useState(false);
  const [showNum, setShowNum] = useState(8);
  const [services, setServices] = useState([]);
  //get services
  useEffect(() => {
    setLoading(true);
    fetch("https://api.smartmovefinancial.com.au/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setServices(data.data);
          setLoading(false);
        }
      });
  }, []);

  return (
    <section className="mx-5 md:container md:mx-auto py-5 md:py-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-primary text-3xl lg:text-6xl font-semibold">
          Our Services
        </h1>
        <img src={yellowLine} alt="" className="" />
      </div>
      {loading ? (
        <LoaderPage />
      ) : (
        <>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {services.slice(0, showNum).map((loan, i) => (
              <Link key={i} to={`/service_details/${loan?.slug}/${loan?.id}`}>
                <div className="min-h-full text-primary shadow hover:shadow-primary  flex  flex-col gap-5  justify-between items-center p-10 rounded-3xl duration-300 ease-linear">
                  <div>
                    <img
                      src={loan?.icon}
                      alt=""
                      className="size-12 md:size-18"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xl md:text-2xl font-bold">{loan?.title}</p>
                  <p className="md:text-xl text-center">
                    {loan?.slogan?.slice(0, 60)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
          {services?.length > 8 && (
            <div className="flex justify-center mt-10 md:mt-20">
              {showNum === 8 ? (
                <button
                  onClick={() => setShowNum(services.length)}
                  className="px-4 py-2 border border-primary rounded-full"
                >
                  Explore More
                </button>
              ) : (
                <button
                  onClick={() => setShowNum(8)}
                  className="px-4 py-2 border border-primary rounded-full"
                >
                  View Less
                </button>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Services;

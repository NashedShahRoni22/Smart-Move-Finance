import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
  const testimonials = [
    {
      img: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
      name: 'KBM Tahmiduzzaman',
      designation: 'Designer, NSRDev Team',
      Description:
        'Our home loan services cater to first-time buyers, seasoned homeowners, and property investors alike. With a variety of options.',
    },
    {
      img: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
      name: 'KBM Tahmiduzzaman',
      designation: 'Designer, NSRDev Team',
      Description:
        'Our home loan services cater to first-time buyers, seasoned homeowners, and property investors alike. With a variety of options .',
    },
    {
      img: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
      name: 'KBM Tahmiduzzaman',
      designation: 'Designer, NSRDev Team',
      Description:
        'Our home loan services cater to first-time buyers, seasoned homeowners, and property investors alike. With a variety of options .',
    },
    {
      img: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
      name: 'KBM Tahmiduzzaman',
      designation: 'Designer, NSRDev Team',
      Description:
        'Our home loan services cater to first-time buyers, seasoned homeowners, and property investors alike. With a variety of options.',
    },
    {
      img: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
      name: 'KBM Tahmiduzzaman',
      designation: 'Designer, NSRDev Team',
      Description:
        'Our home loan services cater to first-time buyers, seasoned homeowners, and property investors alike. With a variety of options.',
    },
  ]
  return (
    <section className='mx-5 md:container md:mx-auto py-10 md:py-20'>
      <h1 className='mt-4 text-primary text-center text-3xl md:text-5xl lg:text-7xl font-semibold'>
        Clients reviews
      </h1>
      <div className='mt-5 md:mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className='p-4 md:p-8 rounded-xl shadow-xl'
          >
            <FaQuoteLeft className="text-primary text-3xl  md:text-5xl"/>
            <p className='text-primary md:text-xl mt-5'>
              {testimonial.Description}
            </p>
            <div className='mt-5 flex items-center gap-5'>
              {' '}
              <img
                src={testimonial.img}
                alt=''
                className='object-cover w-[70px] h-[70px] rounded-full'
              />
              <div>
                {' '}
                <p className='md:text-xl text-primary '>{testimonial.name}</p>
                <p className='md:text-xl text-primary '>
                  {testimonial.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial

const Testimonial = () => {
  const testimonials = [
    {
      img: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
      name: 'jone doe',
      designation: 'Designer, NsrDev Team',
      Description:
        'Our home loan services cater to first-time buyers, seasoned homeowners, and property investors alike. With a variety of options.',
    },
    {
      img: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
      name: 'jone doe',
      designation: 'Designer, NsrDev Team',
      Description:
        'Our home loan services cater to first-time buyers, seasoned homeowners, and property investors alike. With a variety of options .',
    },
    {
      img: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
      name: 'jone doe',
      designation: 'Designer, NsrDev Team',
      Description:
        'Our home loan services cater to first-time buyers, seasoned homeowners, and property investors alike. With a variety of options .',
    },
    {
      img: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
      name: 'jone doe',
      designation: 'Designer, NsrDev Team',
      Description:
        'Our home loan services cater to first-time buyers, seasoned homeowners, and property investors alike. With a variety of options.',
    },
    {
      img: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
      name: 'jone doe',
      designation: 'Designer, NsrDev Team',
      Description:
        'Our home loan services cater to first-time buyers, seasoned homeowners, and property investors alike. With a variety of options.',
    },
  ]
  return (
    <section className='mx-5'>
      <h1 className='mt-4 text-primary text-center text-xl md:text-3xl font-semibold'>
        A Word From Our Client
      </h1>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className='p-4 md:p-8 border-[7px] border-primary rounded-tr-3xl rounded-bl-3xl'
          >
            <p className='text-center text-primary md:text-xl'>
              {testimonial.Description}
            </p>
            <div className='mt-5 flex justify-center items-center'>
              {' '}
              <img
                src={testimonial.img}
                alt=''
                className='object-cover w-[70px] h-[70px] rounded-full'
              />
              <div className='ml-5'>
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

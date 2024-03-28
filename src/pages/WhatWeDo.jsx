import yellowLine from '../assets/lines/yellow_line.png'
const WhatWeDo = () => {
  return (
    <section className='mx-5 md:container md:mx-auto py-5 md:py-20'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center text-primary text-3xl lg:text-6xl font-semibold'>
          Our Achivement
        </h1>
        <img src={yellowLine} alt='' className='' />
      </div>
      <div className='flex flex-col md:flex-row gap-5 md:gap-14 mt-5 lg:mt-10 lg:items-center'>
        <div className='md:w-1/2 flex flex-col gap-5 md:gap-10 justify-between '>
          <img
            src='https://i.ibb.co/KjbQdXH/Modern-Promotion-Business-Loan-Agency-Instagram-Post-1.png'
            alt=''
            className='rounded-3xl'
            loading='lazy'
          />
        </div>
        <div className='my-8 md:my-0  md:w-1/2 flex flex-col gap-5 md:gap-10 justify-between'>
          <p className='text-primary md:text-xl text-justify'>
            Nawshad Ahameds expertise in the mortgage industry has garnered
            accolades for exceptional service and client satisfaction. His
            tailored solutions and market insights have helped numerous clients
            achieve homeownership goals. Through trust and transparency,{' '}
            <span className='text-secondary font-semibold '>
              Smart Move Finance Pty Ltd{' '}
            </span>
            has emerged as a trusted leader. Nawshads commitment to excellence
            has fostered lasting relationships and positioned the company for
            continued success. Explore our achievements and experience the
            difference with Nawshad Aahmed.
          </p>
          <div className='flex justify-between gap-2 md:gap-5'>
            <div className='w-1/2 shadow-xl rounded-xl p-6 md:p-12'>
              <p className='text-center text-primary text-2xl md:text-5xl font-bold'>
                2018
              </p>
              <p className='mt-2 md:mt-4 text-center text-primary  md:text-xl'>
                Year founded
              </p>
            </div>
            <div className='w-1/2 shadow-xl rounded-xl p-6 md:p-12'>
              <p className='text-center text-primary text-2xl md:text-5xl font-bold'>
                300
              </p>
              <p className='mt-2 md:mt-4 text-center text-primary  md:text-xl'>
                Satisfied client
              </p>
            </div>
          </div>
          <div className='shadow-xl rounded-xl p-6 md:p-12'>
            <p className='text-center text-primary text-2xl md:text-5xl font-bold'>
              99.9%
            </p>
            <p className='mt-2 md:mt-4 text-center text-primary  md:text-xl'>
              Successful Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo

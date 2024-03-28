
import yellowLine from '../assets/lines/yellow_line.png'
import { Link } from 'react-router-dom'
const Services = () => {
  const loans = [
    {
      id: 1,
      img: 'https://i.ibb.co/7pcxXMK/icons8-home-50.png',
      name: 'Home Loan',
      description:
        'Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.',
    },
    {
      id: 2,
      img: 'https://i.ibb.co/B3yFhT4/icons8-car-50.png',
      name: 'Car Loan',
      description:
        'Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.',
    },
    {
      id: 3,
      img: 'https://i.ibb.co/wBxD01c/icons8-user-64.png',
      name: 'Personal Loan',
      description:
        'Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.',
    },
    {
      id: 4,
      img: 'https://i.ibb.co/dK1Vn65/icons8-briefcase-50.png',
      name: 'Business Loan',
      description:
        'Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.',
    },
    {
      id: 5,
      img: 'https://i.ibb.co/xGLgf4Y/icons8-dollar-50.png',
      name: 'Refinance Loan',
      description:
        'Do not have 20% down payment for your dream home? Do not worry Tmb is here to help you.',
    },
  ]

  return (
    <section className='mx-5 md:container md:mx-auto py-5 md:py-20'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center text-primary text-3xl md:text-6xl font-semibold'>
          Our Services
        </h1>
        <img src={yellowLine} alt='' className='' />
      </div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
        {loans.map((loan, i) => (
          <Link key={i}>
            <div className='text-primary hover:shadow hover:shadow-primary  flex  flex-col gap-5  justify-between items-center p-10 rounded-3xl duration-300 ease-linear'>
              <div>
                <img src={loan.img} alt='' className='size-12 md:size-18' />
              </div>
              <p className='text-xl md:text-3xl font-bold'>{loan.name}</p>
              <p className='md:text-xl text-center'>{loan.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Services

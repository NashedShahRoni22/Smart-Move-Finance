import { Link } from 'react-router-dom'

export default function LeftBar() {
  const menus = [
    {
      name: 'Appointments',
      link: '/admin',
    },
    {
      name: 'Add Service',
      link: '/admin',
    },
    {
      name: 'Manage Service',
      link: '/admin',
    },
  ]
  return (
    <div className='flex flex-col p-5 shadow-xl min-h-screen bg-primary text-white'>
      {menus.map((m) => (
        <>
          <Link
            to={m.link}
            className='text-xl p-2.5 min-w-full text-center md:text-left'
          >
            {m.name}
          </Link>
        </>
      ))}
    </div>
  )
}

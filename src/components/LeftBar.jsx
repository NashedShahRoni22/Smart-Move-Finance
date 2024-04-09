import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftBar({setShow}) {
  const menus = [
    {
      name: 'Appointments',
      link: '/admin',
    },
    {
      name: 'Add Service',
      link: '/admin/add_service',
    },
    {
      name: 'Manage Service',
      link: '/admin/manage_service',
    },
  ]
  return (
    <div className='flex flex-col p-5 shadow-xl min-h-screen bg-primary text-white sticky top-0'>
      {menus.map((m,i) => (
        <Link
          to={m.link}
          key={i}
          onClick={()=> setShow(false)}
          className='text-xl p-2.5 min-w-full text-center md:text-left'
        >
          {m.name}
        </Link>
      ))}
    </div>
  )
}

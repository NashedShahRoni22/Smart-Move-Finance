import { Card, Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react'
import { AiFillEye } from 'react-icons/ai'
import LoaderPage from '../components/LoaderPage'
const Appointment = () => {
  const [open, setOpen] = useState(false)
  const [loader, setLoader] = useState(true)
  const [appointments, setAppointments] = useState([])
  const [singleAppointment, setSingleAppointment] = useState({})

  const TABLE_HEAD = ['Loan Type', 'Name', 'Phone number', 'View Details']

  const handleOpen = (data) => {
    setOpen(!open)
    setSingleAppointment(data)
  }
  //get appointment..
  useEffect(() => {
    fetch('https://api.nsrdev.com/api/appointments')
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data.data)
        setLoader(false)
      })
  }, [])

  //Delete Appointment

  const handaleDeleteAppointment = (oneAppointment) => {
    const aggre = window.confirm(
      `You Want to Delete, ${oneAppointment.service_id}.`
    )
    if (aggre) {
      fetch(
        `https://api.nsrdev.com/api/appointment/delete/${oneAppointment.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.status === true) {
            const newQueryData = appointments.filter(
              (appoint) => appoint.id !== oneAppointment.id
            )
            alert(data.msg)
            setAppointments(newQueryData)
          }
        })
    }
  }
  console.log(singleAppointment)
  return (
    <div>
      <div>
        {loader ? (
          <LoaderPage />
        ) : (
          <Card className='m-5 md:m-10 h-full overflow-auto'>
            <p className='p-5 text-xl font-semibold text-blue'>
              Appointment : {appointments.length}
            </p>
            <table className='w-full min-w-max table-auto text-left'>
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
                    >
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal leading-none opacity-70'
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, i) => (
                  <tr key={i} className='even:bg-blue-gray-50/50'>
                    <td className='p-4'>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {appointment?.service_id}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {`${appointment?.first_name} ${appointment?.last_name}`}
                      </Typography>
                    </td>
                    <td className='p-4'>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {appointment?.phone}
                      </Typography>
                    </td>
                    <td className='p-4 flex'>
                      <button
                        onClick={() => handleOpen(appointment)}
                        className='px-2 py-1 shadow-md rounded border border-primary text-primary flex items-center gap-2'
                      >
                        <AiFillEye className='text-xl' />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}
        <Dialog open={open} handler={handleOpen} size='lg'>
          <DialogHeader className=''>
            <p className='text-xl font-medium'>
              Service Name : {singleAppointment?.service_id}
            </p>
          </DialogHeader>

          <DialogBody>
            <div>
              <p className='mt-2.5 '>
                <span className='font-semibold'> Name : </span>
                {`${singleAppointment?.first_name} ${singleAppointment?.last_name}`}
              </p>
              <p className='mt-2.5'>
                <span className='font-semibold'>Phone : </span>
                {singleAppointment?.phone}
              </p>
              <p className='mt-2.5 fo'>
                <span className='font-semibold'>Email : </span>
                {singleAppointment?.email}
              </p>
              <p className='mt-2.5'>
                <span className='font-semibold'>Address : </span>
                {singleAppointment?.location}
              </p>
              <p className='mt-2.5'>
                <span className='font-semibold'>Client Message : </span>
                <hr className='my-1.5 mr-16 ml-3' />
                {singleAppointment?.message}
              </p>
            </div>
          </DialogBody>
          <DialogFooter>
            <div>
              <Button
                variant='gradient'
                color='black'
                onClick={handleOpen}
                className='mr-4'
              >
                <span>Close</span>
              </Button>
              <Button
                onClick={() => {
                  handaleDeleteAppointment(singleAppointment)
                  handleOpen()
                }}
                variant='gradient'
                color='red'
              >
                <span>Delete</span>
              </Button>
            </div>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  )
}

export default Appointment

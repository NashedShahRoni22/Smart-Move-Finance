import { Button, Input, Textarea } from '@material-tailwind/react'
import { useState } from 'react'

export default function BookingForm({ handleOpen }) {
  const [loader, setLoader] = useState(false)
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState('')

  const addAppointment = async (e) => {
    setLoader(true)
    e.preventDefault()

    console.log(firstName, lastName, phoneNumber, email, address, message)

    // const formData = new FormData()

    // formData.append('firstName', firstName)
    // formData.append('lastName', lastName)
    // formData.append('phoneNumber', phoneNumber)
    // formData.append('email', email)
    // formData.append('address', address)
    // formData.append('message', message)
    // try {
    //   const response = await fetch('', {
    //     method: 'POST',
    //     body: formData,
    //     headers: {
    //       // Add any necessary headers, such as authorization
    //     },
    //   })
    //   const data = await response.json()
    //   if (data.status === true) {
    //     window.alert(data.msg)
    //     setLoader(false)
    //     handleOpen
    //   }
    // } catch (error) {
    //   console.log('Error:', error)
    //   setLoader(false)
    // }
  }

  return (
    <form className='p-5 flex flex-col gap-5  md:gap-10 '>
      <h5 className='text-xl lg:text-3xl text-primary font-semibold'>
        Book Appointment
      </h5>
      <div className='grid md:grid-cols-2 gap-2.5 md:gap-5'>
        <Input
          label='First Name'
          required
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Input
          label='Last Name'
          required
          onChange={(e) => setLastname(e.target.value)}
        />
        <Input
          label='Phone Number'
          type='number'
          required
          onChange={(e) => setphoneNumber(e.target.value)}
        />
        <Input label='Email' onChange={(e) => setEmail(e.target.value)} />
        <Textarea
          label='Enter Address'
          type='email'
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <Textarea
          label='Enter Message'
          required
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <Button
          variant='text'
          color='red'
          onClick={handleOpen}
          className='mr-1'
        >
          <span>Cancel</span>
        </Button>
        <button
          onClick={addAppointment}
          className='px-4 py-1.5 bg-primary text-white rounded shadow'
          disabled={
            (firstName === '') |
            (lastName === '') |
            (phoneNumber === '') |
            (email === '') |
            (address === '') |
            (message === '')
          }
        >
          {loader ? <span>Loading...</span> : <span>Confirm</span>}
        </button>
      </div>
    </form>
  )
}

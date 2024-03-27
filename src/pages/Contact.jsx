import { Input } from '@material-tailwind/react'
import { Textarea } from '@material-tailwind/react'

export default function Contact() {
  return (
    <section className='mx-3 md:mx-10'>
      <h1 className='mt-4 text-primary  text-xl md:text-3xl font-semibold'>
        Contact Us
      </h1>
      <div className='mt-10 lg:flex gap-10'>
        <div className='lg:w-1/2'>
          <div className='flex justify-between'>
            <p>Address</p>
            <p>178 West 27th Street ,Australia</p>
          </div>
          <hr className='mt-2.5 ' />
          <div className='mt-5 flex justify-between'>
            <p>Get in Touch</p>
            <p>+650012455</p>
            <p>infohjb123@gmail.com</p>
          </div>
          <hr className='mt-2.5 ' />
          <div className='mt-5'>
            <p className='text-xl'>Leave A Reply</p>
            <form action='' className=''>
              <div>
                <div className='my-4'>
                  <Input
                    color='indigo'
                    size='lg'
                    label='Name'
                    className='text-xl '
                  />
                </div>
                <div className='my-4'>
                  <Input
                    color='indigo'
                    size='lg'
                    label='Email'
                    className='text-xl '
                  />
                </div>
                <div className='my-4'>
                  <Input
                    color='indigo'
                    size='lg'
                    label='Phone'
                    className='text-xl '
                  />
                </div>
                <div className='my-4'>
                  <Input
                    color='indigo'
                    size='lg'
                    label='Address'
                    className='text-xl '
                  />
                </div>
              </div>
              <div className='my-4'>
                <Textarea
                  color='indigo'
                  size='lg'
                  label='Your Message'
                  className='text-xl '
                />
              </div>
              <div className='mt-4'>
                <input
                  type='submit'
                  className='border px-4 py-2 bg-primary text-white cursor-pointer text-xl'
                  value='Send Message'
                />
              </div>
            </form>
          </div>
        </div>
        <div className='mt-5 md:mt-5 lg:mt-0 lg:w-1/2'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402590.51605416456!2d144.72350179230108!3d-37.971565214613975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1711541154303!5m2!1sen!2sbd'
            allowfullscreen=''
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </section>
  )
}

import AboutUs from './AboutUs'
import LandingBanner from './LandingBanner'
import Testimonial from './Testimonial'
import WhatWeDo from './WhatWeDo'

export default function Home() {
  return (
    <section className=''>
      <LandingBanner />
      <AboutUs />
      <Testimonial />
      <WhatWeDo />
    </section>
  )
}

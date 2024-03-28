import AboutUs from './AboutUs'
import LandingBanner from './LandingBanner'
import Services from './Services'
import Testimonial from './Testimonial'
import WhatWeDo from './WhatWeDo'

export default function Home() {
  return (
    <section className=''>
      <LandingBanner />
      <Services/>
      <AboutUs />
      <Testimonial />
      <WhatWeDo />
    </section>
  )
}

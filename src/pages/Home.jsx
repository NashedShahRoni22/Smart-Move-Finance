import AboutUs from './AboutUs'
import Contact from './Contact'
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
     <Contact/>
    </section>
  )
}

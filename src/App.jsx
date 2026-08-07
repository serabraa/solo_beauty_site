import React, { useEffect } from 'react'
import AOS from 'aos'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Home from './components/Home'

const App =() => {
  // AOS hides [data-aos] elements at opacity 0 until its scroll handler
  // reveals them. Jumping straight to an anchor can skip that handler
  // entirely, leaving the target section blank — which is what made the
  // service "book" buttons look broken. Reveal the target explicitly.
  useEffect(() => {
    const revealTarget = () => {
      const hash = window.location.hash
      if (!hash || hash.length < 2) return
      let target
      try {
        target = document.querySelector(hash)
      } catch {
        return // malformed hash, e.g. "#!"
      }
      if (!target) return
      target.querySelectorAll('[data-aos]').forEach((el) => el.classList.add('aos-animate'))
      AOS.refresh()
    }

    revealTarget() // handles landing on solobeauty.am/#contact directly
    window.addEventListener('hashchange', revealTarget)
    return () => window.removeEventListener('hashchange', revealTarget)
  }, [])

  return (
    <>
    <Header />
    <Home />


    <Services />
    {/* <Gallery />   */}
    <Pricing />
    <Reviews />
    <Contact />
    <Footer />
    </>
  )
}

export default  App
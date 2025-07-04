import React from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Home from './components/Home'

const App =() => {
  return (
    <>
    <Header />
    <Home />

    <Gallery />
    <Services />
    <Pricing />
    <Contact />
    <Footer />
    </>
  )
}

export default  App
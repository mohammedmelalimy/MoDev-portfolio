import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Scrollup from './Components/Scrollup/Scrollup'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About />
      <Work />
      <Contact />
      <Footer />
      <Scrollup/>
    </div>
  )
}

export default App

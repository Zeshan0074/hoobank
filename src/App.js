import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AllCard from './components/AllCard'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className='overflow-x-hidden'>
        <NavBar />
        <Hero /> 
        <AllCard />
        <Footer />
      </div>
    </>
  )
}

export default App
import React from 'react'
import First from '../components/First'
import HeroComp from '../components/HeroComp'
import GalleryComp from '../components/GalleryComp'
import FooterComp from '../components/FooterComp'
import ServicesComp from '../components/ServicesComp'
import FaqComp from '../components/FaqComp'


const Home = () => {
  return (
  <div className='loader'>
    {}
    <HeroComp />
    <GalleryComp />
    <ServicesComp />
    <FaqComp />
    {}
  </div>
  )
  
}

export default Home
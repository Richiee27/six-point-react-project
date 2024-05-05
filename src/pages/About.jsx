import React from 'react'
import AboutComp from '../components/AboutComp'
import First from '../components/First'
import FooterComp from '../components/FooterComp'
import HeroComp from '../components/HeroComp'
import GalleryComp from '../components/GalleryComp'


const About = () => {
  return (
    <div>
      <HeroComp cName="hero-mid" title="About"/>
      <First />
      <AboutComp />
      <GalleryComp />
      {}
      <FooterComp />
    </div>
  )
}

export default About
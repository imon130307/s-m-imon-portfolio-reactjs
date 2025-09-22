import React from 'react'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import Education from '../Components/Education/Education'
import FullStackProjects from '../Components/FullStackProjects/FullStackProjects'
import ReactProject from '../Components/ReactProject/ReactProject'
import FrontEndProject from '../Components/FrontEndProject/FrontEndProject'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <div className='w-full'>
      <Banner/>
      <About/>
      <Skills/>
      <Education/>
      <FullStackProjects/>
      <ReactProject/>
      <FrontEndProject/>
      <Contact/>
    </div>
  )
}

export default Home

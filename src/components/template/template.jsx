import React from 'react'
import './template.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import MobileNavBar from '../mobileNavBar/mobileNavBar'
const Template = props => {
  return (
    <div className='template'>
      <div className='mobile-navbar-container'>
        <MobileNavBar></MobileNavBar>
      </div>
      <Navbar></Navbar>
      {props.children}
      <Footer></Footer>
    </div>
  )
}

export default Template

import React from 'react'
import './Nav.css'

import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineBook} from 'react-icons/ai';
import {RiCustomerService2Line} from 'react-icons/ri';
import {AiOutlineMail} from 'react-icons/ai';
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a rel="active" href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a rel="about" href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a rel="experience" href="#experience" onClick={() => setActiveNav('#experience')}><AiOutlineBook/></a>
      <a rel="services" href="#services" onClick={() => setActiveNav('#services')}><RiCustomerService2Line/></a>
      <a rel="contact" href="#contact" onClick={() => setActiveNav('#contact')}><AiOutlineMail/></a>
    </nav>
  )
}

export default Nav
import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/jeremiah-bitmoji-fullbody.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div id="header" className="container header__container">
        <h5>Hello My Name Is</h5>
        <h1 className="ME">Jeremiah Clancy</h1>
        <h5 className="text-light">Full-Stack Web Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './Footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">Jeremiah Clancy</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jeremiah-clancy-236637228/"><AiOutlineLinkedin/></a>
        <a target="_blank" rel="noreferrer" href="https://github.com/jclanc7507"><AiFillGithub/></a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jeremiahbclancy/"><AiOutlineInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Jeremiah Clancy. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
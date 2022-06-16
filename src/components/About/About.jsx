import React from 'react'
import './About.css'
import computerWave from '../../assets/computer-wave.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container"></div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={computerWave} alt="" />
          </div>
        </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about-icon"/>
            <h5>Experience</h5>
            <small>1+ Years Coding</small>
          </article>

          <article className="client__card">
            <FiUsers className="client-icon"/>
            <h5>Clients</h5>
            <small>20+ Nationwide</small>
          </article>
          
          <article className="project__card">
            <VscFolderLibrary className="project-icon"/>
            <h5>Projects</h5>
            <small>30+ Projects Worked On</small>
          </article>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore itaque laudantium quam beatae aspernatur ipsam expedita veritatis velit voluptatibus accusantium iure autem, natus sed ea? Voluptatem, accusantium. Asperiores, eum!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
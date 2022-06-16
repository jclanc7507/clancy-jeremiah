import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Brainstorming and wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Concept design and color schemes</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Infrastructure for functionality</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Clean, organized, and sleek interface</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Plug-ins and extensions that are Backend Friendly</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Test-driven development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>MERN full stack development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Responsive and RESTful APIs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>SQL server creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>CRUD operations</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Eye-catching, modern designs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Social media mangement</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Open ended conversations for future growth and development</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
/* 1:57:15 */
export default Services
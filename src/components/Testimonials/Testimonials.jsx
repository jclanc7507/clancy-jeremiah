import React from 'react'
import './Testimonials.css'
import client1 from '../../assets/client-author.png'
import client2 from '../../assets/client-graduate.png'
import client3 from '../../assets/client-teacher.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      
      modules={Pagination}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={client1} alt="" rel="client-author" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolores temporibus rerum at impedit, possimus sunt, nisi consectetur cum alias beatae neque nemo fugit harum unde iusto! Ducimus, accusantium voluptas?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={client2} alt="" rel="client-author" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolores temporibus rerum at impedit, possimus sunt, nisi consectetur cum alias beatae neque nemo fugit harum unde iusto! Ducimus, accusantium voluptas?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={client3} alt="" rel="client-author" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolores temporibus rerum at impedit, possimus sunt, nisi consectetur cum alias beatae neque nemo fugit harum unde iusto! Ducimus, accusantium voluptas?
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials
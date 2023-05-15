import React from "react";
import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation } from 'swiper';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import unversity from '../../assets/unversityAleppo.jpg'
const Testimonials = () => {
   const data = [{
       avatar:unversity,
       degrade:"Bachelor's Degree",
       date:"2017",
       collage:"Bachelor's Degree In Computer Engineering. University Of Aleppo - Electrical And Electronic Engineering Faculty – Computer Engineering"
   },{
       avatar:unversity,
       degrade:"Bachelor's Degree",
       date:"from 2021 to present",
       collage:"Bachelor's Degree In Translation from English into Arabic. University Of Aleppo - Faculty of Arts and Humanities – Translation from English into Arabic",

   },
   ]
    return(
        <section id='testimonials'>
            <h5>testimonials</h5>
            <div>
                <article>
                    <Swiper
                        modules={[ Pagination,Navigation]}
                        Navigation
                        spaceBetween={40}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className='container testimonials__container'>
                        {
                            data.map(({avatar,degrade,date,collage},index) => {
                                return(
                                    <SwiperSlide key={index} className='testimonials'>
                                        <div className='avatar'>
                                            <img src={avatar} alt="not found" />

                                        </div>
                                        <h3>{degrade}</h3>
                                        <h5>{date}</h5>
                                        <small className='department'>
                                            {collage}
                                        </small>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </article>
            </div>
        </section>
    )
}
export default Testimonials;
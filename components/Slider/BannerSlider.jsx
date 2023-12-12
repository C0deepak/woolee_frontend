'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import BannerData from '@/utils/BannerData';

const BannerSlider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          550: {
            slidesPerView: 2.4,
          },
          768: {
            slidesPerView: 3.3,
          },
          1440: {
            slidesPerView: 5,
          }
        }}
        loop={true}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        style={{
          "--swiper-pagination-color": "#777",
          "--swiper-pagination-bullet-inactive-color": "#111",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "4px"
        }}
      >
        {BannerData.map((banner) => (
          <SwiperSlide key={banner.id} className='pb-12'>
            <img src={`/img/banner/${banner.img}`} alt=""/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default BannerSlider
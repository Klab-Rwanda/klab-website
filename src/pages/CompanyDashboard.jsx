// import React from "react";
import CompanyNav from "../Components/Navs/CompanyNav";
import React, { useRef, useState } from "react";
import Footer from "../Components/sections/Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import photo1 from "../assets/image1.jpg";
import photo2 from "../assets/image2.jpg";
import photo3 from "../assets/image3.jpg";
import photo4 from "../assets/image4.jpg";

import { AiOutlineForward, AiOutlineBackward } from "react-icons/ai";

export default function CompanyDashboard() {
  return (
    <>
      <div className="w-screen h-screen welcomeBg flex justify-center items-center relative p-4 py-12">
        <CompanyNav />
        <div className="homewelcome-w text-slate-50 ">
          <div className="text-holder">
            <h1>Hi Blandine, Work With Us </h1>
            <span>
              kLab provides an open space for IT entrepreneurs to collaborate
              and innovate in Kigali, Rwanda
            </span>
            <br />
            <br />
            <br />
            <button className="btn">Add project</button>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={4}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper dashboardCompany-holder"
      >
        <SwiperSlide>
          <img src={photo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo1} alt="" />
        </SwiperSlide>
      </Swiper><br /><br /><br />
      <Footer/>
    </>
  );
}

// import React from "react";
import ParentNav from "../Components/Navs/ParentNav";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
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

export default function Parentdashboard() {
  return (
    <>
      <div className="w-screen h-screen welcomeBg flex justify-center items-center relative p-4 py-12">
        <ParentNav />
        <div className="homewelcome-w text-slate-50 ">
          <div className="text-holder">
            <h1>Welcome To Future Coders. </h1>
            <span>
              kLab is an open source for parents to enroll their kids in the space of IT in Rwanda and abroad.
            </span>
            <br />
            <br />
            <br />
            <Link to='/parentform'>
            <button className="btn">Apply</button></Link>
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
        className="mySwiper dashboardCompany-holder">
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


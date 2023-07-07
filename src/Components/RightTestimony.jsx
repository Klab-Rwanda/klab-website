import React from "react";
import Profile from "../assets/profile.jpeg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

const RightTestimony = () => {
  return (
    <div className="testimonials w-[90vw] lg:w-1/2 xl:w-1/2 md:max-w-[50vw]  ">
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="bg-slate-100 rounded-3xl w-full  sm:w-full"
      >
        <div>
          <SwiperSlide className="flex flex-col items-center justify-center ">
            <div className="bg-slate-200 w-full rounded-3xl p-4 px-8 flex justify-start gap-4 items-center">
              <img src={Profile} alt="" className="rounded-3xl w-20" />
              <div className="bg-slte-100">
                <h1 className="font-bold text-lg">Isaa NSABIMANA</h1>
                <p className=" font-extralight text-base">Frontend Developer</p>
                <p className=" font-normal text-blue-500 text-sm">
                  Klab trainer
                </p>
              </div>
            </div>
            <div className=" mx-2 py-8 rounded flex justify-center items-center gap-2">
              <p className="text-base font-light w-3/4">
                <span className=" text-2xl font-semibold">"</span>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or .<span className=" text-2xl font-semibold">"</span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <div className="bg-slate-200 w-full rounded-3xl p-4 px-8 flex justify-start gap-4 items-center">
              <img src={Profile} alt="" className="rounded-3xl w-20" />
              <div className="bg-slte-100">
                <h1 className="font-bold text-lg">Isaa NSABIMANA</h1>
                <p className=" font-extralight text-base">Frontend Developer</p>
                <p className=" font-normal text-blue-500 text-sm">
                  Klab trainer
                </p>
              </div>
            </div>
            <div className=" mx-2 py-8 rounded flex justify-center items-center gap-2">
              <p className="text-base font-light w-3/4">
                <span className=" text-2xl font-semibold">"</span>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or .<span className=" text-2xl font-semibold">"</span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <div className="bg-slate-200 w-full rounded-3xl p-4 px-8 flex justify-start gap-4 items-center">
              <img src={Profile} alt="" className="rounded-3xl w-20" />
              <div className="bg-slte-100">
                <h1 className="font-bold text-lg">Isaa NSABIMANA</h1>
                <p className=" font-extralight text-base">Frontend Developer</p>
                <p className=" font-normal text-blue-500 text-sm">
                  Klab trainer
                </p>
              </div>
            </div>
            <div className=" mx-2 py-8 rounded flex justify-center items-center gap-2">
              <p className="text-base font-light w-3/4">
                <span className=" text-2xl font-semibold">"</span>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or .<span className=" text-2xl font-semibold">"</span>
              </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default RightTestimony;

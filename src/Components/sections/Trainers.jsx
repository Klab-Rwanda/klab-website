import Titles from "../Titles";
import Profile from "../../assets/profile.jpeg";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AuthContext } from "../../context/AppProvider";

const Trainers = () => {

  const { trainers } = useContext(AuthContext);
  let t = trainers.concat(trainers);

  console.log(t);

  const breakpoints = {

    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    720: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
    }
  };

  return (
    <div className="trainers w-screen h-screen flex flex-col gap-6 justify-center items-center xl:px-32 lg:px-12 md:px-10 sm:px-10 px-6">
      <Titles title="OUR TRAINERS" />
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={breakpoints}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-[100%] flex items-center mt-10 justify-center p-[30px] "
      >
        {t?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex gap-[10px] flex-col px-[10px] py-[15px] shadow-lg items-center justify-center bg-white rounded-[16px] duration-500 scale-95 hover:scale-100 hover:bg-slate-100">
                <img
                  src={item.profile}
                  alt=""
                  className="w-[80px] h-[80px] rounded-full -mt-[35px]"
                />
                <span className="text-[#070937] text-[18px]">{item.name}</span>
                <div className="flex flex-col">
                  <label className="text-[#070937] font-[500] text-center">
                    Skills:
                  </label>
                  <ul className="trainer-list text-[#070937] text-[16px] flex flex-wrap gap-x-6 items-center justify-center list-disc">
                    <li className=" rounded-[8px]">React Js</li>
                    <li className=" rounded-[8px]">Node Js</li>
                    <li className=" rounded-[8px]">Mongo DB</li>
                    <li className=" rounded-[8px]">Project Management</li>
                  </ul>
                </div>
                <span className="text-blue-600 py-[5px]">{item.program}</span>
                <button className="bg-blue-600 py-[5px] hover:bg-blue-500 text-white px-[10px] rounded-[8px]">
                  Linkedin
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Trainers;

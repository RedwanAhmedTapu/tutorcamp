import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useUserContext } from '../context/UserContext';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Instructor = () => {
  const { allTeachers } = useUserContext().state;

  return (
    <section className="w-full my-8 md:my-16 bg-[#F1F7FF] dark:bg-[#130e2e] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 py-12 md:py-24">
        <h2 className="text-[20px] md:text-[30px] text-textColor font-[700] text-center dark:text-yellow-300">
           Instructors
        </h2>

        <div className="mt-16 w-[100%]">
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            allowSlideNext={true}
            allowSlidePrev={true}
            allowTouchMove={false}
            scrollbar={{ draggable: true }}
            speed={900}
            navigation={{
              prevEl: ".home-top-sell .slider_prev",
              nextEl: ".home-top-sell .slider_next ",
            }}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1124: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            {allTeachers.map((instructor, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={`${process.env.SERVER_URL}/${instructor.profileImage}`}
                    alt="instructor Image"
                    className="w-[300px] h-[300px] rounded-full object-cover border-1 border-slate-900"
                  />
                  <h2 className="text-textColor text-[20px] font-[700] mt-4">
                    {instructor.fname} {instructor.lname}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="text-center mt-12">
          <button className="py-3 px-6 bg-violet-700 dark:bg-amber-500 rounded-md text-[#fff]">
            View More
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Instructor;

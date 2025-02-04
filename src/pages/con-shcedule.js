import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import screenshots of schedules
import day1Img from "../components/day1.png"; // Replace with actual paths
import day2Img from "../components/day2.png";
import day3Img from "../components/day3.png";

const ConferenceScheduleCarousel = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Conference Schedule</h1>

      {/* Swiper Carousel */}
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4000 }} // Optional auto-slide every 4s
        className="w-full max-w-3xl mx-auto"
      >
        <SwiperSlide>
          <img src={day1Img} alt="Day 1 Schedule" className="w-full rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={day2Img} alt="Day 2 Schedule" className="w-full rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={day3Img} alt="Day 3 Schedule" className="w-full rounded-lg shadow-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ConferenceScheduleCarousel;

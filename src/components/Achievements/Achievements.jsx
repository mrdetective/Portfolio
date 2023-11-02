import React from "react";
import "./Achievements.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import icpcimg from "../../assets/Icons/icpc.png";

function Achievements() {
  return (
    <section className="achievements-section">
      <div className="achievements-contents">
        <h1 className="achievements-heading">My Achievements</h1>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper">
          <SwiperSlide className="slide-1">
            <div className="achievement-1">
              <img className="icpc-img" src={icpcimg} />
              <div className="achievement-1-text">
                ICPC 2023 Amritapuri Regionalist
              </div>
              <li className="achiemenet-1-innertext">
                <ul>• Prelims-rank: 141 out of 6000+ teams</ul>
                <ul>• Regionals-rank: 89 out of 300+ participants</ul>
              </li>
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Achievements;

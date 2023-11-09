import React, {useEffect, useState} from "react";
import "./Achievements.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import icpcimg from "../../assets/Icons/icpc.png";
import solvecountpng from "../../assets/Images/solvecount.png";
import cpratingpng from "../../assets/Images/cpratings.png";

function Achievements({achievementsref}) {
  const [SwipperBtn, setSwipperBtn] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 800) setSwipperBtn(false);
  });
  return (
    <section ref={achievementsref} className="achievements-section">
      <div className="achievements-contents">
        <h1 className="achievements-heading">My Achievements 🏆</h1>
        <Swiper
          cssMode={true}
          navigation={SwipperBtn}
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
              <li className="achievement-1-innertext">
                <ul>• Prelims-rank: 141 out of 6000+ teams</ul>
                <ul>• Regionals-rank: 89 out of 300+ participants</ul>
              </li>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="achievement-2">
              <img className="solve-count-png" src={solvecountpng} />
              <div className="achievement-2-text">
                <div className="achievement-2-heading">
                  Solved more than 1300 problems across all coding platforms
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="achievement-3">
              <img src={cpratingpng} className="cp-rating-img" />
              <div className="achievement-3-heading">My Ratings</div>
              <li className="achievement-3-text">
                <ul>• Codechef Rating: 1833</ul>
                <ul>• Codeforces Rating: 1364</ul>
              </li>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Achievements;

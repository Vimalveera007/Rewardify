import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Quickaction.css";
import payment from "../../../assets/payment.png";
import settlement from "../../../assets/settlement.png";
import history from "../../../assets/history.png";
import gift from "../../../assets/gift.png";
import request from "../../../assets/request.png";
import eran from "../../../assets/ear.png";
import report from "../../../assets/report.png";
import refund from "../../../assets/refund.png";
const quickActionsData = [
  { id: 1, img: payment },
  { id: 2, img: settlement },
  { id: 3, img: history },
  { id: 4, img: gift },
  { id: 5, img: request },
  { id: 6, img: eran },
  { id: 7, img: report },
  { id: 8, img: refund },
];

const QuickActions = () => {
  return (
    <div className="quick-actions mb-3">
      <h2 className="quick-actions-title pb-3">Quick Actions</h2>
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        slidesPerView={4}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="quick-actions-swiper"
      >
        {quickActionsData.map((action) => (
          <SwiperSlide key={action.id}>
            <div className="quick-action-item">
              <div className="quick-action-icon">{action.icon}</div>
              <img
                src={action.img}
                alt={action.text}
                className="quick-action-image"
              />
              <span className="quick-action-text">{action.text}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QuickActions;

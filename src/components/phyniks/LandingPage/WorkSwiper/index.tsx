import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "../../../../work/Galaxy Note 20 Ultra.png";
import s2 from "../../../../work/iMac 24 inch.png";
import s3 from "../../../../work/iPad Mini.png";
import s4 from "../../../../work/iPhone 13 Pro-1.png";
import s5 from "../../../../work/Mac Studio.png";
import s6 from "../../../../work/iPhone 13 Pro.png";
import s8 from "../../../../work/MacBook Pro 16.png";
import style from "../../../../../styles/Landing.module.css";
import Image from 'next/image';

import { FreeMode, Pagination } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
export default function Index() {
    return (
      <div>
          <Swiper
    slidesPerView={5}
    spaceBetween={30}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <div className={`p-4 rounded-3xl ${style.workimgbox} `}>
      
     <Image src={s1} alt="" />
      </div>
     
      
      </SwiperSlide>
    <SwiperSlide><div className={`p-4 rounded-3xl ${style.workimgbox} `}>
      
      <Image src={s2} alt="" />
      </div></SwiperSlide>
    <SwiperSlide><div className={`p-4 rounded-3xl ${style.workimgbox} `}>
      
      <Image src={s3} alt="" />
      </div></SwiperSlide>
    <SwiperSlide><div className={`p-4 rounded-3xl ${style.workimgbox} `}>
      
      {/* <Image src={s4} /> */}
      </div></SwiperSlide>
    <SwiperSlide><div className={`p-4 rounded-3xl ${style.workimgbox} `}>
      
      {/* <Image src={s5} /> */}
      </div></SwiperSlide>
    <SwiperSlide><div className={`p-4 rounded-3xl ${style.workimgbox} `}>
      
      {/* <Image src={s6} /> */}
      </div></SwiperSlide>
    <SwiperSlide><div className={`p-4 rounded-3xl ${style.workimgbox} `}>
      
      {/* <Image src={s8} /> */}
      </div></SwiperSlide>
  </Swiper>
      </div>
    );
  }
  
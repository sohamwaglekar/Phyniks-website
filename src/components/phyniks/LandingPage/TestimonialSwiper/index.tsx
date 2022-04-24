import { Swiper, SwiperSlide } from "swiper/react";
import style from "../../../../../styles/Landing.module.css";
import { FreeMode, Pagination } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
export default function Index() {
    return (
      <div>
          <Swiper
    effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
   
    
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className={`mySwiper {style.testswiper} {style.h360px}`}
  >
    <SwiperSlide>
       
      <div className="bg-black">
      <p className={`${style.testtext2} mb-4`}>Excellent Service Experience.</p>
        <p className={`${style.tt3} mb-12`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices quam
          tortor ridiculus donec iaculis posuere egestas. Ullamcorper aenean
          diam quam tellus augue tortor. Elementum suspendisse nisl elementum
          sit sed morbi tempor.{" "}
        </p>
        <p className="text-base text-white mb-0 mt-8">NARENDRA MODI</p>
        <span className="text-white text-sm">Prime Minister, India</span>
      
      </div>
     
      
      </SwiperSlide>

    <SwiperSlide>
    <div className="bg-black">
      <p className={`${style.testtext2} mb-4`}>Excellent Service Experience.</p>
        <p className={`${style.tt3} mb-12`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices quam
          tortor ridiculus donec iaculis posuere egestas. Ullamcorper aenean
          diam quam tellus augue tortor. Elementum suspendisse nisl elementum
          sit sed morbi tempor.{" "}
        </p>
        <p className="text-base text-white mb-0 mt-8">NARENDRA MODI1</p>
        <span className="text-white text-sm">Prime Minister, India</span>
      
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="bg-black">
      <p className={`${style.testtext2} mb-4`}>Excellent Service Experience.</p>
        <p className={`${style.tt3} mb-12`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices quam
          tortor ridiculus donec iaculis posuere egestas. Ullamcorper aenean
          diam quam tellus augue tortor. Elementum suspendisse nisl elementum
          sit sed morbi tempor.{" "}
        </p>
        <p className="text-base text-white mb-0 mt-8">NARENDRA MODI2</p>
        <span className="text-white text-sm">Prime Minister, India</span>
      
      </div>
    </SwiperSlide>
    
  </Swiper>
      </div>
    );
  }
  
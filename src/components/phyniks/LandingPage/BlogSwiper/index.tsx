import { Swiper, SwiperSlide } from 'swiper/react';
// import s1 from "../../../../img/Blogs/unsplash_L8SNwGUNqbU.png";
// import s2 from "../../../../img/Blogs/unsplash_mk7D-4UCfmg.png";
// import s3 from "../../../../img/Blogs/unsplash_ukzHlkoz1IE.png";
import style from '../../../../../styles/Landing.module.css';
import Image from 'next/image';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
export default function Index() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='mySwiper'
    >
      {/* <SwiperSlide>
          <div className={`p-4 rounded-3xl {style.${style.shadowblog}} bg-white zoom`}>
          
          <Image src={s1} className="mb-4" alt="" />
            <p className="mb-2 font-semibold uppercase text-sm">How does blockchain work?</p>
            <p className="text-xs text-gray-400 leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices quam tortor ridiculus donec iaculis posuere egestas...</p>
          </div>
         
          
          </SwiperSlide>
        <SwiperSlide><div className={`p-4 rounded-3xl ${style.shadowblog} bg-white zoom`}>
          
          <Image src={s2} className="mb-4" alt="" />
          <p className="mb-2 font-semibold uppercase text-sm">How does blockchain work?</p>
            <p className="text-xs text-gray-400 leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices quam tortor ridiculus donec iaculis posuere egestas...</p>
          </div></SwiperSlide>
        <SwiperSlide><div className={`p-4 rounded-3xl ${style.shadowblog} bg-white zoom`}>
          
          <Image src={s3} className="mb-4" alt="" />
          <p className=" mb-2 font-semibold uppercase text-sm">How does blockchain work?</p>
            <p className="text-xs text-gray-400 leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices quam tortor ridiculus donec iaculis posuere egestas...</p>
          </div></SwiperSlide> */}
    </Swiper>
  );
}

import { Swiper, SwiperSlide } from 'swiper/react';
import s1 from "../../../../assets/Blogs/image1.png";
import s2 from "../../../../assets/Blogs/image2.png";
import s3 from "../../../../assets/Blogs/image3.png";
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
      <SwiperSlide>
          <div className={`p-4 rounded-3xl ${style.shadowblog} bg-white ${style.zoom}`}>
          
          <Image src={s1} className={`${style.blogswiperImage} mb-4`} alt="" />
            <p className="mb-2 font-semibold uppercase text-base">How does blockchain work?</p>
            <p className="text-sm text-gray-400 leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices quam tortor ridiculus donec iaculis posuere egestas...</p>
          </div>
         
          
          </SwiperSlide>
        <SwiperSlide><div className={`p-4 rounded-3xl ${style.shadowblog} bg-white ${style.zoom}`}>
          
          <Image src={s2} className={`${style.blogswiperImage} mb-4`} alt="" />
          <p className="mb-2 font-semibold uppercase text-base">How does blockchain work?</p>
            <p className="text-sm text-gray-400 leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices quam tortor ridiculus donec iaculis posuere egestas...</p>
          </div></SwiperSlide>
        <SwiperSlide><div className={`p-4 rounded-3xl ${style.shadowblog} bg-white ${style.zoom}`}>
          
          <Image src={s3} className={`${style.blogswiperImage} mb-4`} alt="" />
          <p className=" mb-2 font-semibold uppercase text-base">How does blockchain work?</p>
            <p className="text-sm text-gray-400 leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices quam tortor ridiculus donec iaculis posuere egestas...</p>
          </div></SwiperSlide>
    </Swiper>
  );
}

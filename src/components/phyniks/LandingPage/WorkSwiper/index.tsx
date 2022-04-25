import { Swiper, SwiperSlide } from 'swiper/react';
import s1 from '../../../../assets/work/Galaxy-Note-20-Ultra.png';

import s2 from '../../../../assets/work/iMac-24-inch.png';
import s3 from '../../../../assets/work/iPad-Mini.png';
import s4 from '../../../../assets/work/iPhone-13-Pro-1.png';
import s5 from '../../../../assets/work/Mac-Studio.png';
import s6 from '../../../../assets/work/iPhone-13-Pro.png';
import s8 from '../../../../assets/work/MacBook-Pro-16.png';
import style from '../../../../../styles/Landing.module.css';
import Image from 'next/image';

import { FreeMode, Pagination } from 'swiper';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
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
        className='mySwiper'
      >
        <SwiperSlide>
          <div className={`p-4 rounded-3xl ${style.workImagebox} `}>
            <Image src={s1} alt='' className={style.workSwiperImg} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`p-4 rounded-3xl ${style.workImagebox} `}>
            <Image src={s2} alt='' className={style.workSwiperImg} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`p-4 rounded-3xl ${style.workImagebox} `}>
            <Image src={s3} alt='' className={style.workSwiperImg} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`p-4 rounded-3xl ${style.workImagebox} `}>
            <Image src={s4} alt='' className={style.workSwiperImg} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`p-4 rounded-3xl ${style.workImagebox} `}>
            <Image src={s5} alt='' className={style.workSwiperImg} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`p-4 rounded-3xl ${style.workImagebox} `}>
            <Image src={s6} alt='' className={style.workSwiperImg} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`p-4 rounded-3xl ${style.workImagebox} `}>
            <Image src={s8} alt='' className={style.workSwiperImg} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

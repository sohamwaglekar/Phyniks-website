import style from "../../../../../styles/Landing.module.css";
import TestimonialSwiper from "../TestimonialSwiper";
export default function Index() {
    return (
      <div>
          <div className={`${style.testi} text-center bg-black pt-16 pb-16`}>
        <p className={`${style.testitext} mb-20`}>TESTIMONIAL</p>
        <div className="w-1/4 mx-auto">
          <TestimonialSwiper />
        </div>
      </div>
      </div>
    );
  }
  
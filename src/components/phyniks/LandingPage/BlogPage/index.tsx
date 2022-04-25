import style from '../../../../../styles/Landing.module.css';
import BlogSwiper from '../BlogSwiper';

export default function Index() {
  return (
    <div className={`pt-20 ${style.blogswiper}`}>
      <p className={`${style.worktext} mb-12 px-32 `}>BLOGS</p>
      <div className='px-8'>
        <BlogSwiper />
      </div>
    </div>
  );
}

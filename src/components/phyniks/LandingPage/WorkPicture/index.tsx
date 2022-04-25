import blogcover from '../../../../assets/images/blogcover.png';
import { Button } from 'react-bootstrap';
import styles from '../../../../../styles/Landing.module.css';
import Image from 'next/image';

export default function Index() {
  return (
    <div>
      <div className={`${styles.wework} relative ${styles.h500px}`}>
        <Image src={blogcover} className='w-full' alt='' />

        <div className=' absolute top-12 w-full flex justify-center'>
          <div className=' bg-white  pt-4 py-12 px-8 lg:w-1/4 md:w-2/4 text-center mx-auto'>
            <div className='flex justify-around '>
              <p className={`text-black ${styles.text8}  font-bold`}>WE</p>
            </div>
            <p className={`${styles.text4} text-black font-bold ls1`}>WORK</p>
            <p className='mt-0 text-4xl text-gray-400 font-semibold'>
              REMOTELY
            </p>
          </div>
        </div>
      </div>
      <div className='lg:mt-24'>
        <p className={`text-center ${styles.worksubtext} w-2/3 mx-auto`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices quam
          tortor ridiculus donec iaculis posuere egestas. Ullamcorper aenean
          diam quam tellus augue tortor. Elementum suspendisse nisl elementum
          sit sed morbi tempor. Etiam sagittis at imperdiet laoreet venenatis
          tortor, dictum sit fermentum.
        </p>
        <div className='flex justify-center'>
          <Button
            variant='outline-primary'
            className={`${styles.workbutton} mt-8 py-1 px-4 rounded-full`}
          >
            Button
          </Button>
        </div>
      </div>
    </div>
  );
}

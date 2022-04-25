import style from '../../../../../styles/Landing.module.css';
export default function Index() {
  return (
    <div>
      <div className='bg-white pb-20'>
        <div className='bg-white w-1/2 mx-auto pb-60'>
          <p className='text-xl text-gray-500 mb-0 pl-4'>Crafting</p>
          <p className={`${style.Ideas} text-xl`}>IDEAS</p>

          <p className='text-3xl font-bold pl-4'>TO LIFE</p>
        </div>
        <div className='mx-20'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          fuga facilis vel hic explicabo molestias numquam error veritatis
          sequi, temporibus nihil est nemo vero assumenda tempora officia
          dolorum cupiditate maxime.
        </div>
      </div>
      <div
        className={`${style.secondbox} w-full justify-center flowroot  py-32`}
      >
        <div className='w-3/4 mx-auto flex flex-col gap-y-4'>
          <p className={style.firsttext}>WITH YOU ON OUR SIDE</p>
          <p className={style.secondtext}>WE ARE MASTERING THE ARE OF</p>
          <p className={style.thirdtext}>ZERO TO ONE</p>
        </div>
      </div>
    </div>
  );
}

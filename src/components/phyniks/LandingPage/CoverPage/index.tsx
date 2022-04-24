import style from "../../../../../styles/Landing.module.css";
export default function Index() {
    return (
      <div>
        <div className="bg-white py-20">
      <div className="bg-white w-1/2 mx-auto">
      <p className="text-xl text-gray-500 mb-0 pl-4">Crafting</p>
      <p className={`${style.Ideas} text-xl`}>IDEAS</p>
      <p className="text-3xl font-bold pl-4">TO LIFE</p>
      </div>
        </div>
      <div className={`${style.secondbox} w-full justify-center flowroot py-12`}>
        <div className="w-3/4 mx-auto">
          <p className={style.firsttext}>WITH YOU ON OUR SIDE</p>
          <p className={style.secondtext}>WE ARE MASTERING THE ARE OF</p>
          <p className={style.thirdtext}>ZERO TO ONE</p>
        </div>
      </div>
      </div>
    );
  }
  
import style from "../../../../styles/Services.module.css";
export default function Index() {
  return (
    <div>
      <div className={`${style.services} bg-white mb-8 py-8 px-20 flex`}>
        <div className="w-1/2 pr-4">
        <p className={`mb-8 text-3xl font-bold ${style.abouttext}`}>ABOUT</p>
          <p className={style.worksubtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            quam tortor ridiculus donec iaculis posuere egestas. Ullamcorper
            aenean diam quam tellus augue tortor. Elementum suspendisse nisl
            elementum sit sed morbi tempor. Etiam sagittis at imperdiet laoreet
            venenatis tortor, dictum sit fermentum.
          </p>
        </div>
        <div className="w-1/2 mt-4">
          <p className={`${style.worktext} text-center`}>Image</p>
        </div>
      </div>
    </div>
  );
}

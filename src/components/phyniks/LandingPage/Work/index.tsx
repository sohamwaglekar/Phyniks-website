import { Button } from "react-bootstrap";
import style from "../../../../../styles/Landing.module.css";
import WorkSwiper from "../WorkSwiper";
export default function Index() {
    return (
        <div className={`${style.workbox} p-8`}>
            <div className="relative">
        <div className={`py-3 px-4 border border-gray-500 ${style.h600px}`}>
          <p className={`text-center ${style.worktext}`}>WORK</p>
          <p className={`text-center ${style.worksubtext} w-2/3 mx-auto`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            quam tortor ridiculus donec iaculis posuere egestas. Ullamcorper
            aenean diam quam tellus augue tortor. Elementum suspendisse nisl
            elementum sit sed morbi tempor. Etiam sagittis at imperdiet laoreet
            venenatis tortor, dictum sit fermentum.
          </p>
          <div className="mt-12 topworkswiper">
          <WorkSwiper />
        </div>
        </div>
        
        <div className={`absolute w-full -bottom-4 flex justify-center`}>
          <Button
            variant="outline-primary"
            className={`${style.workbutton} py-1 px-4 rounded-full`}
          >
            Primary
          </Button>
        </div>
       
      </div>
        </div>
    );
  }
  
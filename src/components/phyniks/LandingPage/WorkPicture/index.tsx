import blogcover from "../../../../assets/images/blogcover.png";
import { Button } from "react-bootstrap";
import style from "../../../../../styles/Landing.module.css";

export default function Index() {
    return (
        <div>
            <div className="{style.wework} mt-12 relative h-500px">
        {/* <Image src={blogcover} className="w-full" /> */}

        <div className=" absolute top-1/3 w-full flex justify-center">
          <div className="border bg-white pt-4 py-12 px-8 w-1/4 text-center mx-auto">
            <div className="flex justify-around">
              <p className={`text-black ${style.text8} font-bold`}>W</p>
              <p className={`text-black ${style.text8} font-bold`}>E</p>
            </div>
            <p className={`${style.text4} text-black font-bold ls1`}>WORK</p>
            <p className="mt-0 text-4xl text-gray-400 font-semibold">REMOTELY</p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <p className={`text-center ${style.worksubtext} w-2/3 mx-auto`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices quam
          tortor ridiculus donec iaculis posuere egestas. Ullamcorper aenean
          diam quam tellus augue tortor. Elementum suspendisse nisl elementum
          sit sed morbi tempor. Etiam sagittis at imperdiet laoreet venenatis
          tortor, dictum sit fermentum.
        </p>
        <div className="flex justify-center">
        <Button
            variant="outline-primary"
            className={`${style.workbutton} mt-8 py-1 px-4 rounded-full`}
          >
            Primary
          </Button>
          </div>
      </div>
        </div>
    );
  }
  
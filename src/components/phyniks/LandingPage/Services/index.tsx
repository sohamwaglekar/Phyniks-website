import s1 from "../../../../assets/ServiceIcons/minecraft-front-premium.png";
import s2 from "../../../../assets/ServiceIcons/computer-front-premium.png";
import s3 from "../../../../assets/ServiceIcons/bulb-front-premium.png";
import s4 from "../../../../assets/ServiceIcons/color-palatte-front-premium.png";
import s5 from "../../../../assets/ServiceIcons/megaphone-front-premium.png";
import s6 from "../../../../assets/ServiceIcons/tool-front-premium.png";
import Image from 'next/image';
import { Button } from "react-bootstrap";
import style from "../../../../../styles/Landing.module.css";
export default function Index() {
    return (
        <div>
            <div className={`${style.services} bg-white p-8`}>
        <div className="flex items-center">
          <div className="w-1/2">
            <p className={`${style.servicetext} text-center`}>SERVICE</p>
          </div>
          <div className="w-1/2">
            <p className={`${style.worksubtext} mb-4`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              quam tortor ridiculus donec iaculis posuere egestas. Ullamcorper
              aenean diam quam tellus augue tortor. Elementum suspendisse nisl
              elementum sit sed morbi tempor. Etiam sagittis at imperdiet
              laoreet venenatis tortor, dictum sit fermentum.
            </p>
            <Button
            variant="outline-primary"
            className={`${style.workbutton} py-1 px-4 rounded-full`}
          >
            Primary
          </Button>
          </div>
        </div>
        <div className="mx-auto px-16 grid grid-cols-3 gap-4 mt-20">
          <div className="mx-auto relative w-3/4">
            <div className="absolute top-0 flex justify-center w-full">
              <Image src={s1} className={`${style.serviceimg}`} alt=""/>
            </div>
            <div className=" mt-10  shadow-md pt-3 px-3 pb-12 text-center rounded-lg">
              <p className={`${style.servicetext} mt-12 mb-3 text-sm leading-9`}>APP DEVELOPMENT</p>
              <span className="text-xs mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices quam tortor ridiculus donec iaculis posuere egestas.
                Ullamcorper aenean diamquam tellus augue tortor. Elementum
                suspendisse nisl elementum sit sed morbi tempor.
              </span>
            </div>
          </div>
          <div className="mx-auto relative w-3/4">
            <div className="absolute top-0 flex justify-center w-full rounded-lg">
              <Image src={s2} className={`${style.serviceimg}`} alt="" />
            </div>
            <div className=" mt-10  shadow-md pt-3 px-3 pb-12  text-center">
              <p className={`${style.servicetext} mt-12 mb-3 text-sm leading-9`}>WEB DEVELOPMENT</p>
              <span className="text-xs mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices quam tortor ridiculus donec iaculis posuere egestas.
                Ullamcorper aenean diamquam tellus augue tortor. Elementum
                suspendisse nisl elementum sit sed morbi tempor.
              </span>
            </div>
          </div>
          <div className="mx-auto relative w-3/4">
            <div className="absolute top-0 flex justify-center w-full rounded-lg">
              <Image src={s3} className={`${style.serviceimg}`} alt=""/>
            </div>
            <div className=" mt-10  shadow-md pt-3 px-3 pb-12  text-center">
              <p className={`${style.servicetext} mt-12 mb-3 text-sm leading-9`}>ARTIFICIAL INTELLIGENCE</p>
              <span className="text-xs ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices quam tortor ridiculus donec iaculis posuere egestas.
                Ullamcorper aenean diamquam tellus augue tortor. Elementum
                suspendisse nisl elementum sit sed morbi tempor.
              </span>
            </div>
          </div>
        </div>
        <div className=" px-16 grid grid-cols-3 gap-4 mt-20">
          <div className="mx-auto relative w-3/4">
            <div className="absolute top-0 flex justify-center w-full">
              <Image src={s4} className={`${style.serviceimg}`} alt=""/>
            </div>
            <div className=" mt-10  shadow-md pt-3 px-3 pb-12 text-center rounded-lg">
              <p className={`${style.servicetext} mt-12 mb-3 text-sm leading-9`}>DESIGN</p>
              <span className="text-xs mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices quam tortor ridiculus donec iaculis posuere egestas.
                Ullamcorper aenean diamquam tellus augue tortor. Elementum
                suspendisse nisl elementum sit sed morbi tempor.
              </span>
            </div>
          </div>
          <div className="mx-auto relative w-3/4">
            <div className="absolute top-0 flex justify-center w-full rounded-lg">
              <Image src={s5} className={`${style.serviceimg}`} alt=""/>
            </div>
            <div className=" mt-10  shadow-md pt-3 px-3 pb-12  text-center">
              <p className={`${style.servicetext} mt-12 mb-3 text-sm leading-9`}>MARKETING</p>
              <span className="text-xs mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices quam tortor ridiculus donec iaculis posuere egestas.
                Ullamcorper aenean diamquam tellus augue tortor. Elementum
                suspendisse nisl elementum sit sed morbi tempor.
              </span>
            </div>
          </div>
          <div className="mx-auto relative w-3/4">
            <div className="absolute top-0 flex justify-center w-full rounded-lg">
              <Image src={s6} className={`${style.serviceimg}`} alt=""/>
            </div>
            <div className=" mt-10  shadow-md pt-3 px-3 pb-12  text-center">
              <p className={`${style.servicetext} mt-12 mb-3 text-sm leading-9`}>SUPPORT & MAINTENANCE</p>
              <span className="text-xs ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices quam tortor ridiculus donec iaculis posuere egestas.
                Ullamcorper aenean diamquam tellus augue tortor. Elementum
                suspendisse nisl elementum sit sed morbi tempor.
              </span>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
  }
  
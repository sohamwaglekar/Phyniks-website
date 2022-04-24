import { Button } from "react-bootstrap";
import AppSwiper from "../AppSwiper";
import styles from "../../../../../styles/Services.module.css"
export default function Index() {
    return (
      <div>
       <div className="Web Developments bg-white mb-8 py-8 px-20 flex">
      <div className="w-1/2">
        <p className={`${styles.worktext} text-center`}>DESIGN & PROTOTYPING</p>
      </div>
      <div className="w-1/2 pl-4">
        <p className={`${styles.bigtext} mb-4 capitalize`}>
        A.I. is a decisive factor for your business success! 
        </p>
      </div>
    </div>
    <div className="Web Developments bg-white mb-8 py-8 px-20 flex">
      <div className="w-1/2 pr-4">
        <p className={`${styles.worksubtext} mb-4`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
          quam tortor ridiculus donec iaculis posuere egestas. Ullamcorper
          aenean diam quam tellus augue tortor. Elementum suspendisse nisl
          elementum sit sed morbi tempor. Etiam sagittis at imperdiet laoreet
          venenatis tortor, dictum sit fermentum.
        </p>
      </div>
      <div className="w-1/2">
        <p className={`${styles.worktext} text-center`}>DESIGN & PROTOTYPING</p>
      </div>
    </div>
    <div className="px-20 flex justify-between gap-4">
      <ul className="list-disc text-sm">
        <li>Web Design</li>
        <li>Web Development</li>
        <li>HTML / CSS / JS coding</li>
        <li>Search Engine Optimization (SEO)</li>
        <li>Content Management System (CMS)</li>
      </ul>
      <ul className="list-disc text-sm">
        <li>WordPress</li>
        <li>Online forms</li>
        <li>Website / Company homepage</li>
        <li>Responsive interface</li>
      </ul>
      <ul className="list-disc text-sm">
        <li>Newsletter System</li>
        <li>Campaign landing page</li>
        <li>Blogs</li>
        <li>HTML5 banner</li>
      </ul>
    </div>
    <div className="mt-16 py-8 px-20 bg-black">
      <h1 className={styles.tools}>TOOLS</h1>
      <div className="mt-8 flex items-center justify-between">
        <div className="text-center w-1/5">
          <li className="list-disc text-white text-sm">Figma</li>
        </div>
        <div className="text-center w-1/5">
          <li className="list-disc text-white text-sm">Photoshop</li>
        </div>
        <div className="text-center w-1/5">
          <li className="list-disc text-white text-sm">Freamer</li>
        </div>
        <div className="text-center w-1/5">
          <li className="list-disc text-white text-sm">Balsamiq</li>
        </div>
        <div className="text-center w-1/5">
          <li className="list-disc text-white text-sm">Webflow</li>
        </div>
      </div>
    </div>
    <div className="mt-16 p-8 relative">
      <div className="projectbox py-8 px-4 border border-gray-500">
        <p className="text-center worktext mb-8">PROJECT</p>
        <p className="text-center worksubtext w-2/3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
          quam tortor ridiculus donec iaculis posuere egestas. Ullamcorper
          aenean diam quam tellus augue tortor. Elementum suspendisse nisl
          elementum sit sed morbi tempor. Etiam sagittis at imperdiet laoreet
          venenatis tortor, dictum sit fermentum.
        </p>
        <div className="mt-12 topworkswiper">
          <AppSwiper />
        </div>
      </div>
      <div className="absolute bottom-4 flex justify-center w-full">
        <Button
          variant="outline-primary"
          className="workbutton py-1 px-4 rounded-full"
        >
          Primary
        </Button>
      </div>
    </div>
      </div>
    );
  }
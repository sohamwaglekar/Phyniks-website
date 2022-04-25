import Header from 'src/components/phyniks/Header';
import Footer from 'src/components/phyniks/Footer';
import style from "styles/Home.module.css";

interface PropTypes {
  children?: React.ReactChild | React.ReactChild[];
}
export default function Index({ children }: PropTypes) {
  return (
    <>
      <div className={`${style.w200}`}>
        <Header />
        <div>{children}</div>
       
        <Footer />
      </div>
    </>
  );
}

import Header from 'src/components/phyniks/Header';
import Footer from 'src/components/phyniks/Footer';

interface PropTypes {
  children?: React.ReactChild | React.ReactChild[];
}
export default function Index({ children }: PropTypes) {
  return (
    <>
      <div>
        <Header />
        <div>{children}</div>
       
        <Footer />
      </div>
    </>
  );
}

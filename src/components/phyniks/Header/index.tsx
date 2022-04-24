import Image from 'next/image';
import styles from '../../../../styles/Header.module.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from 'src/assets/images/logo.png';
import { useRouter } from 'next/dist/client/router';
import NavBarData from 'src/components/phyniks/Header/navBarMenu.json';
export default function Index() {
  const { route, push } = useRouter();

  const activeLink = route.split('/')[1];

  const onNavCLick = (event: React.MouseEvent<HTMLElement>, el: any) => {
    push(el.link);
  };
  return (
    <div className='m-4'>
      <div className='grid grid-cols-3'>
        <div className='grid col-span-1'>
          <Image src={Logo} height={500} width={600} alt='Capital Setu' />
        </div>
        <div className='flex col-span-2 gap-x-16 mt-4'>
          {NavBarData.fields.map((el: any, index: any) => {
            console.log(activeLink, el.navPanelValue);

            return (
              <div
                key={index}
                className={`${
                  activeLink === el.navPanelValue
                    ? `${styles.navbarhead} cursor-pointer underline `
                    : `${styles.navbarhead} cursor-pointer`
                }`}
                onClick={(e) => onNavCLick(e, el)}
              >
                {el.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

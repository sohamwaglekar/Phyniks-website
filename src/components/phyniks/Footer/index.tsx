import styles from '../../../../styles/Footer.module.css';
import shopify from '../../../assets/images/shopify.png';
import Image from 'next/image';
import Logo from '../../../assets/images/logofooter.png';
import { useRouter } from 'next/dist/client/router';

export default function Index() {
  const { push } = useRouter();
  return (
    <div className={`${styles.footer}`}>
      <div className='mt-32 footer p-12'>
        <div className='px-12 grid grid-cols-4 gap-4'>
          <div className='1'>
            <div className='mb-4 flex'>
              <Image src={Logo} className='w-3/5' alt='' />
            </div>
            <div>
              <h2 className='mb-4 text-2xl font-bold text-white'>Contact Us</h2>
              <p>+91-962-585-4485</p>
              <p> hey@phyniks.com</p>
            </div>
            <div>
              <h2 className='mt-10 mb-2 text-xl font-bold text-white'>
                PHYNIKS DREAMLABS LLP
              </h2>
              <p>© 2021-22. All Rights Reserved</p>
            </div>
          </div>
          <div className='2 pl-8'>
            <h2 className='mb-4 text-2xl font-bold text-white'>Services</h2>
            <p
              className='cursor-pointer'
              onClick={() => {
                push('/landingpage/appdevelopment');
              }}
            >
              App Development
            </p>
            <p
              className='cursor-pointer'
              onClick={() => {
                push('/landingpage/webdevelopment');
              }}
            >
              Web Development
            </p>
            <p
              className='cursor-pointer'
              onClick={() => {
                push('/landingpage/artificial-intelligence');
              }}
            >
              Artifical Intelligence
            </p>
            <p className='cursor-pointer'>Enterprise App Solutions</p>
            <p
              className='cursor-pointer'
              onClick={() => {
                push('/landingpage/design');
              }}
            >
              Design
            </p>
            <p className='cursor-pointer'>Prototyping</p>
            <p
              className='cursor-pointer'
              onClick={() => {
                push('/landingpage/marketing');
              }}
            >
              Marketing
            </p>
          </div>
          <div className='3 pl-8'>
            <h2 className='mb-4 text-2xl font-bold text-white'>Projects</h2>
            <p>Projects</p>
            <p>Credentials</p>
            <h2 className='mb-4 text-2xl font-bold mt-9 text-white'>Agency</h2>
            <p
              onClick={() => {
                push('/about-us');
              }}
            >
              Abouts us
            </p>
            <p>Team</p>
          </div>
          <div className='4'>
            <h2 className='mb-4 text-2xl font-bold text-white'>Contact</h2>
            <p
              onClick={() => {
                push('/contact-us');
              }}
            >
              Contact
            </p>
            <p>Press</p>
            <p>Jobs</p>
            <p>Imprints</p>
            <p>Conditions</p>
            <div className='mt-12'>
              <Image src={shopify} className='w-full' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Cover from './CoverPage';
import Work from './Work';
import Service from './Services';
import Testinomial from './TestinomialBox';
import WorkPicture from './WorkPicture';
import Blog from './BlogPage';
export default function Index() {
  return (
    <div className='mt-20'>
      <Cover />
      <Work />
      <Service />
      <Testinomial />

      <Blog />
      <WorkPicture />
    </div>
  );
}

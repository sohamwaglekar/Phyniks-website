import Cover from "./CoverPage";
import Work from "./Work";
import Service from "./Services";
import Testinomial from "./TestinomialBox";
import WorkPicture from "./WorkPicture";
import Blog from "./BlogPage";
export default function Index() {
  return (
    <div>
      <Cover />
      <Work />
      <Service />
      <Testinomial />
      <WorkPicture />
      <Blog />
    </div>
  );
}

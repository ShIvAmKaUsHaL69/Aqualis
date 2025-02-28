import About from "../../../sections/home/About";
import Blogsectionhome from "../../../sections/home/Blogsectionhome";
import Bunkering from "../../../sections/home/Bunkering";
import Bunkerpoints from "../../../sections/home/Bunkerpoints";
import Companyslider from "../../../sections/home/Companyslider";
import Contact from "../../../sections/home/Contact";
import Entry from "../../../sections/home/Entry";
import Otherservices from "../../../sections/home/Otherservices";


export default function Home() {
  return (
    <div>
      <Entry /> 
      <About />
      <Bunkering />
      <Bunkerpoints />
      <Otherservices />
      <Companyslider />
      <Blogsectionhome />
      <Contact />
    </div>
  );
}

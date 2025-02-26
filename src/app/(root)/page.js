import About from "../../../sections/home/About";
import Blogsectionhome from "../../../sections/home/Blogsectionhome";
import Bunkerpoints from "../../../sections/home/Bunkerpoints";
import Companyslider from "../../../sections/home/Companyslider";
import Contact from "../../../sections/home/Contact";
import Entry from "../../../sections/home/Entry";


export default function Home() {
  return (
    <div> 
      <Entry />
      <About />
      <Bunkerpoints />
      <Companyslider />
      <Blogsectionhome />
      <Contact />
    </div>
  );
}

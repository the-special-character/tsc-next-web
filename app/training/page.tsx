import Banner from './banner';
import Companyhistory from './companyhistory';
import Blogs from './blogs';
import Courses from './courses';
import Leaders from './leaders';
import Footer from './footer';
import GrowCareer from './growcareer';
import Perks from './perks';
import SocialMedia from './socialMedia';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      {/* <Banner /> */}
      {/* <Courses /> */}
      {/* <Perks /> */}
      <SocialMedia />
      <Leaders />
      <Companyhistory />
      {/* <Banner /> */}
      <GrowCareer />
      <Footer />
      <Blogs />
    </>
  );
};

export default Page;

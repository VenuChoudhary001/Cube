import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../sections/mission/hero";
import Section2 from "../sections/mission/section2";
import Section3 from "../sections/mission/section3";

const Mission = () => {
  return (
    <>
      <section className="xl:h-[100vh]">
        <Navbar />
        <Hero />
      </section>
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
};

export default Mission;

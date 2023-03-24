import Footer from "../components/footer";
import Accounts from "../sections/home/account";
import Hero from "../sections/home/hero";
import Sec2 from "../sections/home/sec2";
import Sec3 from "../sections/home/sec3";
import Sec5 from "../sections/home/sec5";
import Sec6 from "../sections/home/sec6";

export default function Home() {
  return (
    <>
      <Hero />
      <Sec2 />
      <Sec3 />
      <Accounts />
      <Sec5 />
      <Sec6 />
      <Footer />
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("");

//   return {
//     props: {},
//   };
// }

import Footer from "../components/footer";
import Accounts from "../sections/home/account";
import Hero from "../sections/home/hero";
import Sec2 from "../sections/home/sec2";
import Sec3 from "../sections/home/sec3";
import Sec5 from "../sections/home/sec5";
import Sec6 from "../sections/home/sec6";
import { NextSeo } from "next-seo";
import React from "react";
export default function Home() {
  const playerRef = React.useRef(null);

  return (
    <>
      <NextSeo
        title="Cube - A video based dating application"
        description="Date.Love. Meet. Fun. Cube - The video-based dating app. Find people near you who love the same things as you."
      />
      <Hero />
      <Sec2 playerRef={playerRef} />
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

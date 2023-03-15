import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/navbar";
import { Power3, gsap } from "gsap";
const Hero = () => {
  let root = useRef(null);
  let tl = gsap.timeline();
  let t2 = gsap.timeline();
  let t3 = gsap.timeline();
  let t4 = gsap.timeline();
  useEffect(() => {
    tl.to(
      root.current.children[1],
      { css: { y: -55, opacity: 0, display: "none" } },
      1.2,
      "start"
    );
    t2.from(
      root.current.children[2].children[0],
      { css: { x: -1050, opacity: 1, display: "none" } },
      "start+=1.2"
    ).to(root.current.children[2].children[0], {
      css: { x: 0, opacity: 1, display: "block" },
    });

    t3.from(
      root.current.children[2].children[1],
      { css: { x: 1050, opacity: 1, display: "none" } },
      "start+=1.2"
    ).to(root.current.children[2].children[1], {
      css: { x: 0, opacity: 1, display: "block" },
    });

    t4.from(root.current.children[3], { css: { x: -1250,display:"none" } }, "start+=1.2").to(
      root.current.children[3],
      { css: { x: 0, opacity: 1,display:"block" } }
    );
  }, []);

  return (
    <>
      <section className="relative w-full h-[974px]">
        <Image
          src={"/home/1.png"}
          layout="fill"
          className="-z-10"
          objectFit="cover"
        />
        <Navbar />
        <main ref={root} className="max-w-[800px] mx-auto flex flex-col gap-5">
          <div className="text-6xl max-w-[280px] text-center mx-auto text-white font-bol">
            Let's get real
          </div>
          <Image
            src={"/home/2.png"}
            width={300}
            height={480}
            objectFit="contain"
            className="ml-auto object-contain lg:mr-[50px] xl:mr-0 "
          />
          <div className=" flex relative justify-between">
            <img
              src="/home/3.svg"
              alt=""
              className=" w-[248px] 2xl:w-[280px]  h-[240px] 2xl:h-[280px]  2xl:-mt-[45px] -mt-[25px] hidden ml-[70px] 2xl:ml-[37px] rotate-[10deg] 2xl:rotate-[1deg] "
            />
            <img
              src="/home/4.svg"
              alt=""
              className=" w-[240px] hidden 2xl:w-[250px]  h-[240px] 2xl:h-[280px] mt-[50px] 2xl:mt-[30px] rotate-[20deg] mr-[53px] 2xl:hidden 2xl:mr-[52px] 2xl:rotate-[18deg] "
            />
          </div>
          <div className="text-7xl  font-bold min-h-[350px] flex flex-col items-center justify-center text-center text-white">
            You’ve matched!
            <div className="text-xl font-normal">
              You and Jessica have common interests.
            </div>
          </div>
        </main>
        <main className="absolute bottom-[150px] ml-[50px] flex flex-col gap-6">
          <img src="/icons/insta_white.svg" alt="" className="" />
          <img src="/icons/fb_white.svg" alt="" className="" />
          <img src="/icons/twitter_white.svg" alt="" className="" />
        </main>
      </section>
    </>
  );
};

export default Hero;

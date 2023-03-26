import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar";
import { Power3, gsap } from "gsap";
const Hero = () => {
  let root = useRef(null);
  let tl = gsap.timeline();
  let t2 = gsap.timeline();
  let t3 = gsap.timeline();
  let t4 = gsap.timeline();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const animate = () => {
    tl.to(
      root.current.children[1],
      { css: { y: -55, opacity: 0, display: "none" } },
      0.8,
      "start"
    );

    t2.from(
      root.current.children[2].children[0],
      { css: { x: -1050, display: "block" } },
      "start+=1.2"
    ).to(root.current.children[2].children[0], {
      css: { x: 0, display: "block" },
    });

    t3.from(
      root.current.children[2].children[1],
      { css: { x: 1050, display: "block" } },
      "start+=1.2"
    ).to(root.current.children[2].children[1], {
      css: { x: 0, display: "block" },
    });

    t4.from(
      root.current.children[3],
      { css: { x: -1250, display: "block" }, delay: 0.2 },
      "start+=1"
    ).to(root.current.children[3], {
      css: { x: 0, opacity: 1, display: "block" },
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let [entry] = entries;
        if (entry.isIntersecting) animate();
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    if (isVisible) observer.unobserve(containerRef.current);
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative bg font-primary-400 overflow-hidden w-full h-[800px] md:h-[874px] 4xl:h-[974px]"
      >
        <Image
          src={"/home/1.png"}
          layout="fill"
          className="-z-10 hidden md:block"
          objectFit="cover"
        />
        <Image
          src={"/home/1_mob.png"}
          layout="fill"
          className="-z-10 md:hidden"
          objectFit="cover"
        />
        <Navbar />
        <main ref={root} className="max-w-[800px] mx-auto flex flex-col gap-5">
          <div className="hidden mt-8 md:block text-6xl font-primary400 max-w-[250px] text-center mx-auto text-white font-bol">
            Let's get real
          </div>
          <img
            src="/home/2.png"
            alt=""
            className="w-[200px] mt-[120px] md:mt-[18px] -mr-[50px] h-[350px] md:w-[300px] scale-110 3xl:-mr-16  ml-auto md:h-[480px] object-contain lg:mr-[50px] xl:mr-0"
          />
          <div className="mt-[100px] mb-[50px] lg:mb-[100px] md:-mt-[28px] flex relative justify-between">
            <img
              src="/home/3.svg"
              alt=""
              className=" w-[175px] -ml-[39px] -rotate-[29deg] hidden -mt-[50px] h-[164px] md:w-[230px] xl:w-[248px] 2xl:w-[250px] 4xl:w-[320px] 5xl:-ml-16 5xl:-mt-[85px] md:h-[240px] xl:h-[240px] 2xl:h-[250px]  2xl:-mt-[85px]  md:-mt-[65px]  4xl:-ml-[23px] 4xl:-mt-[55px] md:ml-[70px] 2xl:ml-[37px] md:-rotate-[5deg] xl:rotate-[10deg] 2xl:-rotate-[1deg] "
            />
            <img
              src="/home/4.svg"
              alt=""
              className="w-[170px] -rotate-[3deg] hidden -mr-[25px] h-[164px] md:w-[220px] xl:w-[240px]  md:hidden 2xl:w-[250px] 4xl:w-[280px] 5xl:w-[290px] 5xl:-mr-[45px] 5xl:mt-[7px] 4xl:mr-[10px]  md:h-[240px] 2xl:h-[250px] md:-mt-[0px] 2xl:mt-[0px] md:rotate-[20deg] xl:rotate-[26deg] xl:mr-[53px] md:mr-[78px]  2xl:mr-[58px] 2xl:rotate-[22deg] "
            />
          </div>
          <div className="text-5xl max-w-[320px] mx-auto md:max-w-[700px] hidden md:text-7xl  font-primary400 min-h-[350px] flex flex-col items-center justify-center text-center text-white">
            You’ve matched!
            <div className="text-base my-2 max-w-[250px] mx-auto md:max-w-[700px] md:text-xl font-primary300">
              You and Jessica have common interests.
            </div>
          </div>
        </main>
        <main className="absolute hidden bottom-[150px] ml-[25px] md:ml-[50px] md:flex flex-col gap-6">
          <img
            src="/icons/insta_white.svg"
            alt=""
            className="w-[32px]  cursor-pointer "
          />
          <img
            src="/icons/fb_white.svg"
            alt=""
            className="w-[32px]  cursor-pointer "
          />
          <img
            src="/icons/twitter_white.svg"
            alt=""
            className="w-[32px]  cursor-pointer "
          />
        </main>
      </section>
    </>
  );
};

export default Hero;

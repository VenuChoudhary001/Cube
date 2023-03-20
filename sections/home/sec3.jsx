import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3, Power4 } from "gsap";
const Sec3 = () => {
  let boyImg = useRef(null);
  let girlImg = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);
  let img4 = useRef(null);
  let img5 = useRef(null);
  let img6 = useRef(null);
  let img7 = useRef(null);
  let img8 = useRef(null);
  const t0 = gsap.timeline();
  const t1 = gsap.timeline();
  const t2 = gsap.timeline();

  const animate = () => {
    t0.from(
      boyImg.current,
      {
        x: -750,
        display: "block",
        rotate: "30deg",
        ease: Power3.easeInOut,
      },
      0.2,
      "start"
    ).to(boyImg.current, {
      x: 0,
      display: "block",
      ease: Power3.easeInOut,
    });
    t2.from(
      girlImg.current,
      {
        x: 750,
        display: "block",
        rotate: "-30deg",
        ease: Power3.easeInOut,
      },
      0.2,
      "start"
    ).to(girlImg.current, {
      x: 0,
      display: "block",
      ease: Power3.easeInOut,
    });

    t1.to(
      [boyImg.current],
      {
        rotate: "0deg",
        ease: Power3.easeInOut,
      },
      "start+=1.8"
    ).to(
      girlImg.current,
      { rotate: "0deg", ease: Power3.easeInOut },
      "start+=1.8"
    );

    t2.from(
      [img1.current, img3.current, img4.current, img6.current],
      {
        scale: 0,
        ease: Power4.easeInOut,
        display: "block",
      },
      "start+=0.5"
    ).to(
      [img1.current, img3.current, img4.current, img8.current, img6.current],
      {
        scale: 1,
        display: "block",
      }
    );

    t0.from(
      [img2.current, img7.current, img5.current],
      {
        scale: 0,
        display: "block",
      },
      0.1
    ).to([img2.current, img7.current, img5.current], {
      scale: 1,
      display: "block",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
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
        className="relative container min-h-[1024px] justify-center mx-auto flex flex-col gap-8"
      >
        <div className="text-5xl font-semibol text-center">
          Spark new connections through videos
        </div>
        <div className="text-2xl text-center max-w-[500px] mx-auto">
          Create or upload short videos that highlight your
          personality and interests
        </div>
        <article className="relative lg:max-w-[900px] xl:max-w-[1100px] mx-auto flex gap-6 bg-light-300 min-h-[389px] rounded-[48px] w-full -z-10">
          <Image
            src={"/home/sec3/3.png"}
            className="absolute hidden top-16 -ml-10"
            width={72}
            height={72}
            ref={img1}
          />
          <Image
            src={"/home/sec3/pop.png"}
            className="absolute hidden top-16 left-[45%] rounded-full shadow-2xl"
            width={72}
            height={72}
            ref={img4}
          />
          <Image
            src={"/home/sec3/4.png"}
            className="absolute hidden bottom-[100px] z-[999] -ml-24 xl:-ml-10"
            width={255}
            height={64}
            objectFit="contain"
            ref={img2}
          />
          <Image
            src={"/home/sec3/5.png"}
            className="absolute hidden bottom-0 -left-2 shadow-2xl rounded-full"
            width={60}
            height={60}
            ref={img3}
          />
          <Image
            src={"/home/sec3/6.png"}
            className="absolute hidden -bottom-[150px] left-[30%] z-[999]"
            width={255}
            height={74}
            ref={img5}
          />
          <Image
            src={"/home/sec3/7.png"}
            className="absolute hidden bottom-[0px] shadow-2xl rounded-full -right-[10px]"
            width={60}
            height={60}
            ref={img6}
          />
          <Image
            src={"/home/sec3/8.png"}
            className="absolute hidden top-[150px] -right-20 z-[999]"
            width={285}
            height={64}
            ref={img7}
          />
          <Image
            src={"/home/sec3/9.png"}
            className="absolute hidden top-[50px] -right-5 shadow-2xl rounded-full z-[999]"
            width={60}
            height={60}
            ref={img8}
          />
          <Image
            src={"/home/sec3/1.png"}
            className="absolute top-10 left-[2%] hidden   xl:left-[12%]"
            width={388}
            height={581}
            ref={boyImg}
          />
          <Image
            src={"/home/sec3/2.png"}
            className="absolute top-10 hidden right-[12%]"
            width={388}
            height={581}
            ref={girlImg}
          />
        </article>
      </section>
    </>
  );
};

export default Sec3;

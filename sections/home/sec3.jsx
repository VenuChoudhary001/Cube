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
  const t3 = gsap.timeline();
  const animate = () => {
    t0.from(
      boyImg.current,
      {
        x: -750,
        scale: 0,
        display: "block",
        rotate: "30deg",
        ease: Power3.easeInOut,
      },
      0.2,
      "start"
    ).to(boyImg.current, {
      x: 0,
      scale: 1,
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

    t3.from(
      [img2.current, img7.current, img5.current],
      {
        scale: 0,
        display: "block",
      },
      "start+=0.2"
    ).to([img2.current, img7.current, img5.current], {
      scale: 1,
      display: "block",
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
        className="relative overflow-x-hidden overflow-y-hidden container min-h-[720px] md:min-h-[1024px] justify-center mx-auto flex flex-col gap-8"
      >
        <div className="text-3xl md:text-4xl lg:text-5xl text-dark-500 font-primary400 text-center">
          Spark new connections through videos
        </div>
        <div className="text-lg text-dark-200 font-primary200 text-center max-w-[95vw] md:max-w-[500px] mx-auto">
          Be your true self and make authentic connections on Cube, the platform
          that values honesty and transparency
        </div>
        <article className="relative mx-auto  max-w-[85vw] lg:max-w-[900px] xl:max-w-[1100px] mx-auto flex gap-6 bg-light-300 min-h-[250px] md:min-h-[389px] rounded-[15px] md:rounded-[48px] w-full -z-10">
          <img
            src={"/home/sec3/3.png"}
            className="absolute w-12 h-12 lg:w-[60px] lg:h-[60px] hidden top-[12px] -ml-[25px] md:top-16 md:-ml-10"
            width={60}
            height={60}
            objectFit="contain"
            ref={img1}
          />
          <img
            src={"/home/sec3/pop.png"}
            className="absolute hidden w-0 lg:w-[72px] lg:h-[72px] object-contain top-16 left-[45%] rounded-full shadow-2xl"
            ref={img4}
          />
          <img
            src={"/home/sec3/4.png"}
            className="absolute hidden w-[250px] top-24  -ml-24 h-[104px] lg:w-[285px] lg:h-[124px] object-contain  lg:bottom-[100px] z-[999] lg:-ml-24 xl:-ml-10"
            ref={img2}
          />
          <img
            src={"/home/sec3/5.png"}
            className="absolute w-[38px] md:w-[60px] hidden bottom-6 -ml-[25px] md:bottom-0 md:-left-2 shadow-2xl rounded-full"
            ref={img3}
            objectFit="contain"
          />
          <img
            src={"/home/sec3/6.png"}
            className="absolute w-[180px] lg:w-[250px] lg:ml-20  object-contain hidden -bottom-[150px] left-[30%] z-[999]"
            ref={img5}
            objectFit="contain"
          />
          <img
            src={"/home/sec3/7.png"}
            className="absolute hidden w-12 lg:w-[60px] object-contain bottom-[200px] md:bottom-[0px] shadow-2xl rounded-full -right-[10px]"
            ref={img6}
            objectFit="contain"
          />
          <img
            src={"/home/sec3/8.png"}
            className="absolute w-[150px] h-[104px] lg:h-[154px] lg:mr-[55px] object-contain hidden top-[150px] -right-20 z-[999]"
            ref={img7}
          />
          <img
            src={"/home/sec3/9.png"}
            className="absolute hidden w-0 lg:w-[60px] lg:h-[60px] top-[50px] -right-5 shadow-2xl rounded-full z-[999]"
            ref={img8}
          />
          <img
            src={"/home/sec3/1.png"}
            className="absolute hidden object-contain w-[200px] md:w-[328px] xl:w-[388px] xl:h-[581px] top-10  -left-[10%] sm:left-[4%] lg:left-[10%] xl:left-[6%] hidden   xl:left-[12%]"
            ref={boyImg}
          />
          <img
            src={"/home/sec3/2.png"}
            className="absolute hidden object-contain w-[200px] md:w-[328px] xl:w-[388px] xl:h-[581px] top-10 hidden -right-[4%] sm:right-[3%] lg:right-[16%] xl:right-[12%]"
            ref={girlImg}
          />
        </article>
      </section>
    </>
  );
};

export default Sec3;

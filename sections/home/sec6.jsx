import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import Link from "next/link";
const Sec6 = () => {
  let imgRef = useRef(null);
  let tl = gsap.timeline();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const animate = () => {
    tl.to(imgRef.current, {
      scale: 1,
      ease: Power3.easeInOut,
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let [entry] = entries;
        if (entry.isIntersecting) animate();
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    if (isVisible) observer.unobserve(containerRef.current);
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="container md:min-h-[400px] min-h-[450px] mb-16  mx-auto flex items-center flex-col xl:flex-row justify-evenly gap-8  lg:gap-12 xl:gap-2 place-items-center"
      >
        <Image
          ref={imgRef}
          src={"/home/8.png"}
          width={260}
          className={"scale-[0.2]"}
          height={251}
        />
        <div className="flex flex-col gap-2 items-start justify-start">
          <div className="text-3xl max-w-[350px] text-center mx-auto md:max-w-[700px] font-primary400 md:text-4xl lg:text-5xl">
            Ready to break the ice?
          </div>
          <div className="text-lg text-dark-100 max-w-[320px] md:max-w-[500px] text-center">
            Join the Cube community today and start making real connections.
          </div>
        </div>
        <Link
          href={"/waitlist"}
          className="outline-none flex flex-col items-center justfiy-center font-primary300 text-base rounded-full w-[163px] h-[48px] bg-black text-white"
        >
          <span className="block w-full h-full flex items-center justify-center">
            Join Beta
          </span>
        </Link>
      </section>
    </>
  );
};

export default Sec6;

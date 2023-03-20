import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
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
        className="container md:min-h-[400px] min-h-[450px] mb-16  mx-auto flex items-center flex-col md:flex-row justify-evenly  gap-2 place-items-center"
      >
        <Image
          ref={imgRef}
          src={"/home/8.png"}
          width={260}
          className={"scale-[0.2]"}
          height={251}
        />
        <div className="text-3xl md:text-5xl">Ready to break the ice?</div>
        <button className="outline-none rounded-full w-[163px] h-[48px] bg-black text-white">
          Join Beta
        </button>
      </section>
    </>
  );
};

export default Sec6;

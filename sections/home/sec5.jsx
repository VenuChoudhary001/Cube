import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
const Sec5 = () => {
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);
  const image5 = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  let t0 = gsap.timeline();
  const router = useRouter();
  const animate = () => {
    // t0.from(
    //   image1.current,
    //   {
    //     scale: 0,
    //     x: 0,
    //     y: 0,
    //   },
    //   0.1
    // )
    //   .to(
    //     image1.current,
    //     {
    //       y: 0,
    //       x: 0,
    //       scale: 1,
    //       display: "block",
    //       borderRadius: "10px",
    //     },
    //     0.1
    //   )
    //   .from(
    //     image2.current,
    //     {
    //       y: 0,
    //       x: 0,
    //       display: "block",
    //       scale: 1.2,
    //     },
    //     0.1
    //   )
    //   .to(
    //     image2.current,
    //     {
    //       y: 0,
    //       x: 0,
    //       scale: 1,
    //       borderRadius: "10px",
    //       display: "block",
    //     },
    //     0.1
    //   )
    //   .from(
    //     image4.current,
    //     {
    //       y: 155,
    //       x: 0,
    //       opacity: 0,
    //       display: "block",
    //     },
    //     0.1
    //   )
    //   .to(
    //     image4.current,
    //     {
    //       y: 0,
    //       x: 0,
    //       opacity: 1,
    //       borderRadius: "10px",
    //       display: "block",
    //     },
    //     0.1
    //   )
    //   .from(
    //     [image5.current, image3.current],
    //     {
    //       y: 0,
    //       x: 0,
    //       display: "block",
    //       scale: 0.5,
    //     },
    //     0.1
    //   )
    //   .to([image5.current, image3.current], {
    //     y: 0,
    //     x: 0,
    //     scale: 1,
    //     borderRadius: "10px",
    //     display: "block",
    //   });
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
        className="bg-light-50 overflow-x-hidden pt-12 lg:py-0 my-[150px] md:my-0"
      >
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[755px]  gap-8 place-items-center">
          <article className=" hidden lg:flex ml-[2vw]  flex-col gap-6">
            <main className="text-5xl font-primary400">Seize the moment</main>
            <main className="text-xl font-primary200 text-dark-400 max-w-[600px]">
              Strike while the ice is cold: our 24-hour rule for meaningful
              connections. Otherwise it disappears and you prepare the next
              arrow.
            </main>
            <div>
              <button
                onClick={() => router.push("/waitlist")}
                className="outline-none font-primary300 rounded-full w-[163px] h-[48px] bg-black text-white"
              >
                Join Beta
              </button>
            </div>
          </article>
          <article className="flex items-center justify-center flex-col  gap-2">
            <main className="flex items-end gap-2">
              <Image
                ref={image1}
                src={"/home/group1/1.png"}
                className={"rounded "}
                width={160}
                height={160}
              />
              <Image
                ref={image2}
                src={"/home/group1/2.png"}
                className={"rounded "}
                width={160}
                height={240}
              />
            </main>
            <main className="flex justify-center items-start gap-2">
              <Image
                ref={image3}
                src={"/home/group1/3.png"}
                className={"rounded  "}
                width={192}
                height={128}
              />
              <Image
                ref={image4}
                src={"/home/group1/4.png"}
                className={"rounded "}
                width={160}
                height={240}
              />
              <Image
                ref={image5}
                src={"/home/group1/5.png"}
                className={"rounded "}
                width={192}
                height={128}
              />
            </main>
          </article>
          <article className=" flex items-center text-black text-center px-6 lg:hidden ml-[2vw] flex-col gap-5 my-16">
            <main className="text-4xl  font-primary400">Seize the moment</main>
            <main className="text-lg  font-primary200">
              Strike while the ice is cold: our 24-hour rule for meaningful
              connections. Otherwise it disappears and you prepare the next
              arrow.
            </main>
            <div>
              <Link
                href={"/waitlist"}
                className="outline-none flex flex-col items-center justfiy-center font-primary300 text-base rounded-full w-[163px] h-[48px] bg-black text-white"
              >
                <span className="block w-full h-full flex items-center justify-center">
                  Join Beta
                </span>
              </Link>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Sec5;

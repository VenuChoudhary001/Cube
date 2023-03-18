import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, Power3 } from "gsap";
const Accounts = () => {
  let mainImg = useRef(null);
  let root = useRef(null);
  let webImg = useRef(null);
  let webTxt = useRef(null);
  let textRef = useRef(null);
  let bgImg = useRef(null);
  let rootWeb = useRef(null);
  let tl = gsap.timeline();
  let t2 = gsap.timeline();
  let t3 = gsap.timeline();
  let t4 = gsap.timeline();
  useEffect(() => {
    const mainHeadline = textRef.current.children;
    tl.from(
      mainImg.current,
      {
        css: {
          y: 1255,
        },
        duration: 1,
        ease: Power3.easeIn,
      },
      0.8,
      "start"
    )

      .from(
        mainImg.current,
        {
          css: {
            scale: 2.85,
          },
          duration: 1,
          ease: Power3.easeIn,
        },
        0.4
      )
      .to(mainImg.current, {
        css: {
          y: 0,
          scale: 1,
        },
      })
      .from(
        [root.current.children[1], webImg.current],
        {
          css: {
            opacity: 0,
            scale: 0.75,
          },
        },
        0.4
      )
      .to([root.current.children[1], webImg.current], {
        css: {
          opacity: 1,
          scale: 1,
        },
      });

    t2.from(
      mainHeadline,
      {
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1,
        delay: 0.8,
      },
      "start+=0.8"
    ).to(mainHeadline, {
      opacity: 1,
    });

    t3.to(
      bgImg.current,
      {
        width: 478,
        height: 583,
        delay: 0.5,
        bottom: "160px",
        right: "85px",
        transformOrigin: "bottom right 60",
        borderRadius: 20,
        scale: 1,
      },
      0.8
    ).to(
      bgImg,
      {
        scale: 1.25,
      },
      0.25
    );

    t4.to([webTxt.current.children], {
      y: -270,
      delay: 1.2,
    }).to(webTxt.current.children[1], {
      display: "block",
    });
  }, []);

  return (
    <>
      <section className="md:hidden relative md:h-[800px] my-12 md:my-0 container overflow-hidden">
        <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 h-full place-items-center items-center">
          <div ref={textRef} className="flex flex-col p-6 gap-3  max-w-[500px]">
            <div className=" ">
              <div className="text-3xl md:text-4xl text-dark-200">
                Verified accounts only
              </div>
            </div>
            <div>
              <div className="text-sm text-dark-100 md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                delectus laudantium quis excepturi optio, totam quam illum
                itaque commodi exercitationem quaerat cupiditate? Modi
                doloremque eaque distinctio officiis perferendis id ipsam
                consequuntur eum sapiente quas. Dicta neque iusto non minima,
                eum dignissimos voluptas officiis assumenda natus ipsa rerum
                veniam ipsam at.
              </div>
            </div>
          </div>
          <div
            ref={root}
            className="relative w-[90vw] h-[420px] md:w-[500px]  flex items-center justify-center md:h-[588px] overflow-hidden rounded-[20px]"
          >
            <img
              src="/home/5.png"
              alt=""
              className="block w-[280px] h-[320px] object-contain md:w-[360px] ml-20 md:h-[512px] opacity-"
            />
            <Image
              src={"/home/6.png"}
              className="-z-10"
              layout="fill"
              objectFit="cover"
              ref={mainImg}
            />
          </div>
        </main>
      </section>
      <section
        ref={rootWeb}
        className="relative flex flex-col justify-between  overflow-hidden md:block hidden h-[800px] mt-5"
      >
        <Image
          src="/home/6.png"
          alt=""
          width={478}
          height={583}
          className="absolute -z-10 object-cover bottom-0 right-0 w-full h-full"
          ref={bgImg}
        />
        <main className="container flex items-center justify-center">
          <img
            ref={webImg}
            src="/home/5.png"
            alt=""
            className="block ml-auto w-[280px] h-[320px] mt-28 object-contain md:w-[360px] mr-10 md:h-[412px] opacity-"
          />
        </main>
        <main ref={webTxt} className="flex flex-col p-6 gap-3 max-w-[550px]">
          <div className="text-3xl md:text-4xl text-dark-200 font-bold">
            Verified accounts only
          </div>

          <div className="hidden text-sm text-dark-200 md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            delectus laudantium quis excepturi optio, totam quam illum itaque
            commodi exercitationem quaerat cupiditate? Modi doloremque eaque
            distinctio officiis perferendis id ipsam consequuntur eum sapiente
            quas. Dicta neque iusto non minima, eum dignissimos voluptas
            officiis assumenda natus ipsa rerum veniam ipsam at.
          </div>
        </main>
      </section>
    </>
  );
};

export default Accounts;

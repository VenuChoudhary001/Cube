import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import "react-phone-input-2/lib/style.css";
import GetInTouchForm from "../../components/getInTouchForm";
import { validateEmail, validatePhone } from "../../utils";

const Hero = () => {
  const selectRef = useRef(null);

  return (
    <>
      <section className=" px-6 mb-[150px] md:p-0  grid grid-cols-1 md:grid-cols-2 place-items-center">
        <Image
          width={453}
          height={407}
          className="md:hidden"
          src="/contact/mob.png"
        />
        <main className="flex md:px-6 flex-col max-w-[350px] mt-4 md:mt-0 md:max-w-[650px] mx-auto items-center md:items-start justify-center md:justify-start text-center md:text-left gap-3">
          <div className="text-lg md:text-base font-primary300">Contact us</div>
          <div className="text-4xl md:text-4xl xl:text-5xl md:mb-2 text-dark-100 font-bold">
            We'd love to hear from you
          </div>
          <span className="block text-lg md:text-xl text-black/90">
            Send us a message at{" "}
            <span className="font-primary400 cusor-pointer">
              &nbsp;hello@cubedating.co
            </span>
          </span>
        </main>
        <Image
          width={792}
          height={548}
          className="hidden md:block  "
          src="/contact/web.png"
        />
      </section>
      <section className="max-w-[600px] mx-auto my-16 p-6 flex flex-col items-center justify-center gap-6 ">
        <div className="text-4xl text-dark-100 font-bold">Get in touch</div>
        <span className="block text-lg text-black/90 text-center">
          We’d love to hear from you. Please fill out this form.
        </span>
        <GetInTouchForm />
      </section>
      <section className="container  mx-auto p-6 mb-12">
        <main className="bg-light-300  grid grid-cols-1 xl:grid-cols-2 md:gap-6 rounded-[10px] py-8 px-4 place-items-center md:h-[242px]   gap-6">
          <main className="flex flex-col gap-4">
            <div className="text-dark-300 max-w-[280px]  md:max-w-[600px] text-3xl font-primary400">
              Join the Cube community today
            </div>
            <div className="text-lg">
              Stay in the loop with everything you need to know.
            </div>
          </main>
          <div className="flex flex-col items-start justify-start md:flex-row gap-2">
            <div className="flex flex-col gap-2">
              <input
                type={"email"}
                placeholder="Enter your email"
                className="outline-none rounded-full p-3 md:w-[380px]  bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
              />
              <span className="block text-dark-600/70 text-sm">
                We care about your data in our
                <Link
                  href={"/privacypolicy"}
                  className="underline font-semibold cursor-pointer"
                >
                  &nbsp;privacy policy.
                </Link>
              </span>
            </div>

            <button className="p-3 bg-black w-full md:w-36 rounded-full text-white mt-3 md:mt-0 h-12">
              Join
            </button>
          </div>
        </main>
      </section>
    </>
  );
};

export default Hero;

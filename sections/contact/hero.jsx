import Image from "next/image";
import React, { useRef } from "react";
import "react-phone-input-2/lib/style.css";

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
        <main className="flex md:px-6 flex-col max-w-[350px] mt-4 md:mt-0 md:max-w-[600px] mx-auto items-center md:items-start justify-center md:justify-start text-center md:text-left gap-3">
          <div className="text-lg md:text-base">Contact us</div>
          <div className="text-4xl md:text-5xl md:mb-2 text-dark-100 font-bold">
            We'd love to hear from you
          </div>
          <span className="block text-lg md:text-xl text-black/90">
            Send us a message at{" "}
            <span className="font-primary400 cusor-pointer">
              &nbsp;hello@joincube.co
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
        <main className="flex gap-2 flex-col w-full">
          <div className="text-sm font-bold ">Full Name</div>
          <input
            type={"text"}
            placeholder="Full name"
            className="outline-none rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
          />
        </main>
        <main className="flex gap-2 flex-col w-full">
          <div className="text-sm font-bold ">Email</div>
          <input
            type={"email"}
            placeholder="you@company.com"
            className="outline-none rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
          />
        </main>
        <main className="flex gap-1 flex-col w-full">
          <div className="text-sm font-bold ">Phone number</div>
          <div className="relative flex gap-2 items-center border-[1px] px-3 border-light-100 text-black/70 rounded-lg">
            <input
              type={"text/number"}
              maxLength={10}
              className="w-full text-base outline-none p-3"
              placeholder="XXXXXXXXX"
            />
          </div>
        </main>
        <main className="flex gap-2 flex-col w-full">
          <div className="text-sm font-bold ">Message</div>
          <textarea
            rows={5}
            placeholder="Leave us a message"
            className="outline-none rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
          />
        </main>
        <main className="flex items-center gap-2 w-full">
          <div className="flex relative">
            <input
              type={"checkbox"}
              className="appearance-none w-[15px] h-[10px] checked:bg-green-300 outline-none  rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
            />
          </div>
          <span className="block text-black/70">
            You agree to our friendly{" "}
            <span className="underline font-semibold cursor-pointer">
              privacy policy.
            </span>
          </span>
        </main>
        <button className="p-3 bg-black/90 w-full rounded-full text-white h-12">
          Send message
        </button>
      </section>
      <section className="container  mx-auto p-6 mb-12">
        <main className="bg-light-300  grid grid-cols-1 xl:grid-cols-2 md:gap-6 rounded-[10px] py-8 px-4 place-items-center md:h-[212px]   gap-6">
          <main className="flex flex-col gap-4">
            <div className="text-dark-300 max-w-[280px] md:max-w-[600px] text-3xl font-primary300">
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
              <span className="block text-light-200 text-sm">
                We care about your data in our
                <span className="underline font-semibold cursor-pointer">
                  &nbsp;privacy policy.
                </span>
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

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <>
      <section className="relative h-[750px] lg:h-[803px]">
        <main className="relative w-full h-[370px] lg:h-[410px]">
          <Image
            src={"/careers/1.png"}
            layout="fill"
            objectFit="contain"
            className="md:block hidden"
          />
          <Image
            src={"/careers/1_mob.png"}
            layout="fill"
            objectFit="contain"
            className="md:hidden"
          />
        </main>
        <main className="grid grid-cols-1 place-items-center mt-10 container mx-auto lg:grid-cols-2">
          <main className="flex flex-col items-center text-center md:text-left md:items-start px-6 md:px-0 font-primary400 gap-6 lg:gap-8">
            <div className="text-3xl  lg:text-4xl xl:text-5xl">
              Let&apos;s build the future of real connections together
            </div>
            <Link
              href={"/contact"}
              className="outline-none flex flex-col items-center justfiy-center font-primary300 text-base rounded-full w-[163px] h-[48px] bg-black text-white"
            >
              <span className="block w-full h-full flex items-center justify-center">
                Get in touch
              </span>
            </Link>
          </main>
        </main>
      </section>
      <section className="h-[418px] bg-dark-700  font-primary400 ">
        <main className="px-6 md:px-0 max-w-[360px] lg:max-w-[950px] text-white text-2xl lg:text-4xl mx-auto h-full flex items-center justify-center">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers everyone to be themselves.
        </main>
      </section>
      <section className="max-w-[600px] mx-auto my-16 p-6 flex flex-col items-center justify-center gap-6 ">
        <div className="text-4xl flex flex-col mb-8 items-center text-dark-100 font-primary400">
          Get in touch
          <span className="block text-lg text-dark-700 font-primary200  text-center">
            We&apos;d love to hear from you. Please fill out this form.
          </span>
        </div>
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
              className="appearance-none w-[15px] h-[10px] checked:bg-black outline-none  rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
            />
          </div>
          <span className="block text-black/70">
            You agree to our friendly{" "}
            <Link
              href={"/privacypolicy"}
              className="underline font-semibold cursor-pointer"
            >
              privacy policy.
            </Link>
          </span>
        </main>
        <Link
          href={"/contact"}
          className="outline-none flex flex-col items-center justfiy-center font-primary300 text-base rounded-full w-full h-[48px] bg-black text-white"
        >
          <span className="block w-full h-full flex items-center justify-center">
            Get in touch
          </span>
        </Link>
      </section>
    </>
  );
};

export default Landing;

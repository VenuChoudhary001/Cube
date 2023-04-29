import Image from "next/image";
import Link from "next/link";
import React from "react";
import GetInTouchForm from "../../components/getInTouchForm";

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
        <GetInTouchForm />
      </section>
    </>
  );
};

export default Landing;

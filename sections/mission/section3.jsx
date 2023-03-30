import Image from "next/image";
import Link from "next/link";

const Section3 = () => {
  return (
    <>
      <section className="bg-dark-200 relative py- lg:py-10 xl:py-20 text-white">
        <main className="relative">
          <div className="container p-6 mx-auto flex flex-col gap-16 md:gap-24">
            <div className="flex text-center font-primary400 flex-col text-2xl lg:text-3xl xl:text-4xl items-center h-[150px] xl:h-[226px] justify-center">
              We are revolutionizing the world of online dating through videos
              <hr className="h-[2px] absolute w-full bottom-0 bg-light-100 opacity-10" />
            </div>
          </div>
        </main>
        <main className="container  p-6 mx-auto flex flex-col gap-16 md:gap-24">
          <div className="grid grid-cols-1 relative md:grid-cols-2 gap-12  md:gap-6 place-items-center">
            <Image
              src={"/mission/7-mob.png"}
              width={676}
              height={496}
              className="md:hidden "
              alt=""
            />
            <article className="flex  items-center md:items-start text-center md:text-left flex-col gap-3 md:gap-8">
              <span className="block flex flex-col gap-3">
                <span className="hidden md:block text-lg">Join our team</span>
                <span className="block text-3xl md:max-w-[800px] lg:text-4xl xl:text-5xl font-primary400">
                  And we’re just getting started
                </span>
              </span>
              <span className="block text-[20px] text-white opacity-70  max-w-[360px] md:text-xl md:max-w-[587px]">
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do you best
                work.
              </span>
              <Link
                href={"/careers"}
                className="bg-white font-primary400 mt-4 md:mt-0 w-[133px] md:w-[163px] text-black flex text-sm md:text-base items-center justify-center rounded-full h-10 md:h-12"
              >
                {" "}
                Join us
              </Link>
            </article>
            <Image
              src={"/mission/7.png"}
              width={676}
              height={496}
              className="hidden md:block"
              alt=""
            />
          </div>
        </main>
      </section>
      <section className="container mx-auto h-[246px] md:h-[394px] gap-4 md:gap-8 flex flex-col items-center justify-center">
        <Image src={"/mission/8.png"} width={120} height={56} alt="" />
        <div className="text-xl font-primary300 md:text-4xl ">
          Still have questions?
        </div>
        <Link
          href={"/contact"}
          className="outline-none flex flex-col items-center justfiy-center font-primary300  bg-black text-sm md:text-base text-white w-[113px] h-10 md:w-[156px] md:h-[59px] rounded-full"
        >
          <span className="block w-full h-full flex items-center justify-center">
            Get in touch
          </span>
        </Link>
      </section>
    </>
  );
};

export default Section3;

import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="container min-h-[80vh] md:mb-24 mx-auto flex flex-col md:flex-row px-6   items-center gap-2 md:gap-12">
        <div className=" w-[90vw] max-w-[380px] h-[442px] md:hidden relative ">
          <Image
            layout="fill"
            src="/mission/1.png"
            objectFit="contain"
            className="rounded-lg"
            alt=""
          />
        </div>
        <main className="text-4xl text-dark-100 lg:text-5xl xl:text-7xl max-w-[550px] lg:ml-1 flex items-center md:items-start flex-col gap-1 md:gap-4">
          <span className="block font-primary200">At the</span>
          <span className="block font-primary200">heart of</span>
          <span className="font-bold font-primary400">Cube</span>
        </main>
        <main className="hidden md:flex gap-6 md:ml-auto ">
          <div className=" w-[350px] h-[392px] lg:w-[352px] lg:h-[460px] xl:w-[502px] xl:h-[590px] relative ">
            <Image layout="fill" src="/mission/1.png" alt="" />
          </div>
          <div className=" hidden md:block md:w-[100px] lg:w-[150px] lg:h-[460px] xl:w-[156px] xl:h-[590px] relative ">
            <Image
              layout="fill"
              className="object-co"
              alt=""
              src="/mission/2.png"
            />
          </div>
          <div className="hidden md:block lg:w-[150px] lg:h-[460px] xl:w-[156px] xl:h-[590px] relative ">
            <Image
              layout="fill"
              className="object-co"
              alt=""
              src="/mission/3.png"
            />
          </div>
        </main>
      </section>
    </>
  );
};

export default Hero;

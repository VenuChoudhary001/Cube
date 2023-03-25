import Image from "next/image";
import { ProfileCard } from "../../components/cards/profileCard";

const Hero = () => {
  return (
    <>
      <section className="container h-[80vh] lg:h-[600px] xl:h-[750px] md:mb-24 mx-auto flex flex-col md:flex-row px-3 justify-between  items-center gap-10 md:gap-12">
        <div className=" w-[94vw] max-w-[440px] h-[432px]  md:hidden relative ">
          {/* <Image
            layout="fill"
            src="/mission/1.png"
            objectFit="cover"
            className="rounded-lg"
            alt=""
          /> */}
          <ProfileCard />
        </div>
        <main className="text-5xl text-dark-100 lg:text-5xl xl:text-7xl max-w-[550px] lg:ml-1 flex items-center md:items-start flex-col gap-2 md:gap-4">
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
              className="object-co rounded-2xl"
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

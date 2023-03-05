import Image from "next/image"

const Hero = () => {
  return (
   <>
     <section className="container md:mb-24 mx-auto flex flex-col md:flex-row px-6   items-center gap-4 md:gap-12">
        <div className=" w-[94vw]  h-[452px] md:hidden relative ">
          <Image layout="fill" src="/mission/1.png" objectFit="cover" className="rounded-lg" alt=""/>
        </div>
        <main className="text-4xl lg:text-5xl xl:text-7xl max-w-[550px] lg:ml-1 flex items-center md:items-start flex-col gap-1 md:gap-4">
          <span className="block">At the</span>
          <span className="block">heart of</span>
          <span className="font-bold">Cube</span>
        </main>
        <main className="hidden md:flex gap-6 md:ml-auto ">
          <div className=" w-[350px] h-[392px] lg:w-[352px] lg:h-[460px] xl:w-[502px] xl:h-[590px] relative ">
            <Image layout="fill" src="/mission/1.png" alt=""/>
          </div>
          <div className=" hidden md:block md:w-[100px] lg:w-[150px] lg:h-[460px] xl:w-[156px] xl:h-[590px] relative ">
            <Image layout="fill" className="object-co" alt="" src="/mission/2.png" />
          </div>
          <div className="hidden md:block lg:w-[150px] lg:h-[460px] xl:w-[156px] xl:h-[590px] relative ">
            <Image layout="fill" className="object-co" alt="" src="/mission/3.png" />
          </div>
        </main>
      </section>
     
   </>
  )
}

export default Hero
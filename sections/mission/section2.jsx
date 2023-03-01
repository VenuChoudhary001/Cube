import Image from "next/image";

const Section2 = () => {
  return (
    <>
    <section className="flex flex-col mt-6 md:mt-0 gap-[40px] lg:gap-[100px] xl:gap-[150px]">

      <section className="container text-dark-100 mx-auto text-center flex flex-col md:flex-row items-center justify-center text-3xl md:text-5xl p-6 h-[100px] md:h-[200px]">
       <div>

        Finding Love should be &nbsp;
        <span className="font-bold">Authentic.</span>
       </div>
      </section>
      <section className="grid 2xl:container mx-auto grid-cols-1 p-4 md:p-0 md:grid-cols-2 gap-6 md:gap-24">
        <Image src={"/mission/4.png"} className='hidden md:block' width={720} height={560} alt="" />
        <main className="flex flex-col justify-center gap-4 lg:gap-8">
          <div className="bg-black w-[56px] h-[56px] lg:w-[60px] lg:h-[60px] xl:w-[100px] xl:h-[100px] text-2xl xl:text-5xl rounded-full text-white flex items-center justify-center">
            01
          </div>
          <div className=" lg:max-w-[400px] xl:max-w-[512px] text-dark-200 text-xl lg:text-2xl xl:text-3xl">
            We believe in authenticity as the cornerstone of meaningful
            connections, and we strive to create a platform where users can
            showcase their true selves.
          </div>
        </main>
        <Image src={"/mission/4.png"} className='rounded-xl md:hidden' width={720} height={560} alt="" />

      </section>
      <section className="bg-dark-200 text-white text-3xl lg:text-4xl xl:text-6xl h-[143px] lg:h-[250px] xl:h-[330px] flex items-center justify-center">
        even more Intentional.
      </section>
      
      <section className="grid 2xl:container mx-auto grid-cols-1 p-4 md:p-0 md:grid-cols-2 gap-6 md:gap-24">
        <main className="flex lg:max-w-[400px] xl:max-w-[512px] mx-auto  flex-col justify-center gap-6 lg:gap-8">
        {/* <Image src={"/mission/5.png"} className='hidden md:block' width={720} height={560} alt="" /> */}

        <div className="bg-black w-[56px] h-[56px]  xl:w-[100px] xl:h-[100px] text-2xl xl:text-5xl rounded-full text-white flex items-center justify-center">
            02
          </div>
          <div className="max-w-[512px] text-dark-200 text-xl lg:text-2xl xl:text-3xl">
            We believe in the power of intentionality and encourage our users to
            create videos that showcase their values and interests, with the
            intention of finding meaningful connections.
          </div>
        </main>
        <Image src={"/mission/5.png"} width={720} className='rounded-xl' height={560} alt="" />
      </section>
      <section className="text-3xl lg:text-4xl xl:text-6xl font-bold flex items-center justify-center">
      ... and Respectful.
      </section>
      <section className="grid 2xl:container mx-auto grid-cols-1 p-4 md:p-0 md:grid-cols-2 gap-6  md:gap-24">
        <Image src={"/mission/6.png"} className='hidden md:block' width={720} height={560} alt="" />
        <main className="flex flex-col justify-center gap-4 lg:gap-8">
          <div className="bg-black w-[56px] h-[56px] xl:w-[100px] xl:h-[100px] text-2xl  xl:text-5xl rounded-full text-white flex items-center justify-center">
            03
          </div>
          <div className=" lg:max-w-[400px] xl:max-w-[512px] text-dark-200 text-xl lg:text-2xl xl:text-3xl">
          We believe in the power of intentionality and encourage our users to create videos that showcase their values and interests, with the intention of finding meaningful connections.
          </div>
        </main>
        <Image src={"/mission/6.png"} className='rounded-xl md:hidden' width={720} height={560} alt="" />

      </section>
    </section>

    </>
  );
};

export default Section2;

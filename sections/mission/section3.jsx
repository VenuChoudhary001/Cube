import Image from "next/image"

const Section3 = () => {
  return (
    <>
    <section className="bg-dark-200 py- lg:py-10 xl:py-20 text-white">
        <main className="container p-6 mx-auto flex flex-col gap-16 md:gap-24">
            <div className="flex text-center text-2xl lg:text-3xl xl:text-4xl items-center h-[200px] xl:h-[226px] justify-center">
            We are revolutionizing the world of online dating through videos
            </div>
            <div className="grid grid-cols-1 relative md:grid-cols-2 gap-12  md:gap-6 place-items-center">
            <Image 
              src={'/mission/7-mob.png'}
              width={676}
              height={496}
              className='md:hidden '
              alt=""
              />
              <article className="flex  items-center md:items-start text-center md:text-left flex-col gap-3 md:gap-8">
                  <span className="block flex flex-col gap-3">
                    <span className="hidden md:block text-lg">Join our team</span>
                    <span className="block text-3xl max-w-[200px] md:max-w-[700px] lg:text-3xl xl:text-5xl ">And we’re just getting started</span>
                  </span>
                  <span className="block text-sm  max-w-[300px] md:text-xl md:max-w-[587px]">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</span>
                 <button className="bg-white mt-4 md:mt-0 w-[133px] md:w-[163px] text-black flex text-sm md:text-base items-center justify-center rounded-full h-10 md:h-12"> Join Beta</button>
              </article>
              <Image 
              src={'/mission/7.png'}
              width={676}
              height={496}
              className='hidden md:block'
              alt=""
              />
            </div>
        </main>
    </section>
    <section className="container mx-auto h-[246px] md:h-[394px] gap-4 md:gap-8 flex flex-col items-center justify-center">
        <Image 
        src={'/mission/8.png'}
        width={120}
        height={56}
        alt=''
        />
        <div className="text-xl md:text-4xl font-bold">
        Still have questions?
        </div>
        <button className="bg-black text-sm md:text-base text-white w-[113px] h-10 md:w-[156px] md:h-[59px] rounded-full">Get in touch</button>
    </section>
    </>
  )
}

export default Section3
import Image from "next/image";
import Link from "next/link";
const Waitlist = () => {
  return (
    <>
      <section className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <main className="container p-6 h-screen flex flex-col justify-between">
          <Link href={'/mission'}>
          <Image src={"/icons/logo_text.svg"} width={112} height={40} />
          </Link>
          <div className="lg:max-w-[380px] xl:max-w-[480px] flex flex-col gap-5 md:gap-8 mx-auto">
            <div className="text-4xl font-bold">Apply for early access</div>
            <div className="text-xl text-black/70">
              {" "}
              We are still fine tuning the product and would love your help.
              Join 12,045+ Cube babes on the waitlist.
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <main className="flex gap-2 flex-col w-full">
                <div className="text-sm font-bold ">Full Name</div>
                <input
                  type={"text"}
                  placeholder="Full name"
                  className="outline-none rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
                />
              </main>
              <main className="flex gap-2 flex-col w-full">
                <div className="text-sm font-bold ">Phone</div>
                <input
                  type={"text"}
                  placeholder="Phone"
                  className="outline-none rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
                />
              </main>
              <span className="block text-black/70">
              By signing up, you agree to our Privacy Policy and Terms of Service
          </span>
          <button className="p-3 bg-black w-full rounded-full text-white h-12">
          Join Beta
        </button> 
            </div>
          </div>
          <div>
            <Image 
            src={'/icons/copywright.svg'}
            width={90}
            height={24}
            />
          </div>
        </main>
        <main className=" w-full h-full hidden lg:flex p-6 flex-col items-center justify-center relative">
          <Image 
          src={'/waitlist.png'}
          layout='fill'
          className="-z-10 object-cover rounded-l-[50px]"
          />
          <main className="text-5xl max-w-[600px] text-white ">
          ???Break the ice and make a real connection on Cube???
          </main>
        </main>
      </section>
    </>
  );
};

export default Waitlist;

import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <main className="bg-dark-200 flex font-primary200 flex-col justify-center gap-16 items-center h-[578px] md:h-[430px]">
        <div className="container mx-auto  p-6 grid grid-cols-2 gap-8 md:gap-12 md:grid-cols-4   items-start">
          <Image
            alt=""
            width={112}
            height={40}
            className="col-span-2 md:col-span-1"
            src="/icons/logo_white.svg"
          />
          <main className="flex flex-col gap-4">
            <div className="text-light-400   text-sm md:text-base">Company</div>
            <Link
              href={"/mission"}
              className="text-white/70 cursor-pointer   text-sm md:text-base "
            >
              Mission
            </Link>
            <Link
              href={"/"}
              className="text-white/70 cursor-pointer   text-sm md:text-base "
            >
              Press
            </Link>
            <Link
              href={"/contact"}
              className="text-white/70 cursor-pointer   text-sm md:text-base "
            >
              Contact
            </Link>
          </main>
          <main className="flex flex-col gap-4">
            <div className="text-light-400 text-sm md:text-base">Legal</div>
            <div className="text-white/70 cursor-pointer   text-sm md:text-base ">
              Community Guidelines
            </div>
            <div className="text-white/70 cursor-pointer  text-sm md:text-base  ">
              Terms & Conditions
            </div>
            <div className="text-white/70 cursor-pointer   text-sm md:text-base ">
              Privacy Policy
            </div>
          </main>
          <main className="flex flex-col gap-4">
            <div className="text-light-400 text-sm md:text-base">
              Social Media
            </div>
            <div className="text-white/70 cursor-pointer flex gap-4">
              <Image alt="" src={"/icons/insta.svg"} width={24} height={24} />
              <Image alt="" src={"/icons/fb.svg"} width={24} height={24} />
              <Image alt="" src={"/icons/twitter.svg"} width={24} height={24} />
              <Image alt="" src={"/icons/youtube.svg"} width={24} height={24} />
            </div>
            <div className="text-white/70 cursor-pointer cursor-pointer hover:underline text-sm md:text-base  ">
              cubedating.co
            </div>
          </main>
        </div>
        <div className="flex px-5 md:px-0 flex-col w-full container gap-2">
          <div className="h-[1px] bg-white/30 w-full mb-6 md:mb-0"></div>
          <Image
            alt=""
            src={"/icons/copywright_white.svg"}
            width={74}
            height={20}
          />
        </div>
      </main>
    </>
  );
};

export default Footer;

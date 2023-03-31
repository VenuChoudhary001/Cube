import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();

  const handleClick = (to) => {
    router.push(`/${to}`);
  };

  return (
    <>
      <main className="bg-dark-200 flex font-primary200 flex-col justify-center gap-16 items-center h-[578px] md:h-[430px]">
        <div className="container mx-auto  p-6 grid grid-cols-2 gap-8 md:gap-12 md:grid-cols-4   items-start">
          <Image
            alt="Cube"
            width={112}
            height={40}
            className="col-span-2 md:col-span-1 cursor-pointer"
            src="/icons/logo_white.svg"
            onClick={() => handleClick("")}
          />
          <main className="flex flex-col gap-4">
            <div className="text-light-400 font-primary400 text-base">
              Company
            </div>
            <Link
              href={"/mission"}
              className="text-white/70 cursor-pointer   text-[15px] font-primary300 md:text-base "
            >
              Mission
            </Link>
            {/* <Link
              href={"/press"}
              className="text-white/70 cursor-pointer   text-[15px] font-primary300 md:text-base "
            >
              Press
            </Link> */}
            <Link
              href={"/careers"}
              className="text-white/70 cursor-pointer   text-[15px] font-primary300 md:text-base "
            >
              Careers
            </Link>
            <Link
              href={"/contact"}
              className="text-white/70 cursor-pointer   text-[15px] font-primary300 md:text-base "
            >
              Contact
            </Link>
          </main>
          <main className="flex flex-col gap-4">
            <div className="text-light-400 font-primary400 text-base">
              Legal
            </div>
            <Link
              href={"/communityguidelines"}
              className="text-white/70 cursor-pointer  font-primary300 text-[15px] md:text-base "
            >
              Community Guidelines
            </Link>
            <Link
              href={"/privacypolicy"}
              className="text-white/70 cursor-pointer  font-primary300 text-[15px] md:text-base "
            >
              Privacy Policy
            </Link>
          </main>
          <main className="flex flex-col gap-4">
            <div className="text-light-400 font-primary400 text-base">
              Social Media
            </div>
            <div className="text-white/70 cursor-pointer flex gap-4">
              <Image
                alt="cube_social_media"
                src={"/icons/insta.svg"}
                width={24}
                height={24}
              />
              <Image
                alt="cube_social_media"
                src={"/icons/fb.svg"}
                width={24}
                height={24}
              />
              <Image
                alt="cube_social_media"
                src={"/icons/twitter.svg"}
                width={24}
                height={24}
              />
              <Image
                alt="cube_social_media"
                src={"/icons/titok.svg"}
                width={24}
                height={24}
              />
            </div>
            <div className="text-light-400 font-primary400 hidden md:block md:text-base mt-2">
              Contact
            </div>
            <div className="text-white/70 cursor-pointer hidden md:block -mt-3 cursor-pointer hover:underline text-sm md:text-base  ">
              hello@cubedating.co
            </div>
          </main>
          <main className="flex  flex-col gap-4 md:hidden">
            <div className="text-light-400 text-base font-primary400">
              Contact
            </div>
            <div className="text-white/70 font-primary300 cursor-pointer cursor-pointer hover:underline text-[15px] md:text-base  ">
              hello@cubedating.co
            </div>
          </main>
        </div>
        <div className="flex px-5 md:px-0 flex-col text-sm w-full text-white container gap-2">
          <div className="h-[1px] bg-white/30 w-full mb-6 md:mb-0"></div>
          &#169;Copyright 2023 Cube
        </div>
      </main>
    </>
  );
};

export default Footer;

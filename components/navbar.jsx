import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <main className="hidden  md:flex items-center container px-6 h-[104px] mx-auto justify-between">
        <div className="text-base flex gap-8 items-center">
          <Link href='/mission' className="block ">Mission</Link>
          <Link href="/contact" className="block ">Contact</Link>
          <span className="block ">Press</span>
        </div>
        <Link href={'/waitlist'} className="w-[108px] flex items-center justify-center h-10 rounded-full bg-black text-white">
          Join beta
        </Link>
      </main>
      <main className=" md:hidden relative container px-6 h-[100px] flex items-center justify-between">
        <Image 
        src={'/icons/menu.svg'}
        width={22}
        height={22}
        alt=""
        />

        <Image 
        src={'/icons/Cube.svg'}
        width={62}
        height={24}
        alt=""
        className="absolute left-[40%]"
        />
         <Link  href={'/waitlist'} className="w-[80px] flex items-center justify-center text-sm  h-8 rounded-full bg-black text-white">
          Join beta
        </Link>
       
      </main>
    </>
  );
};

export default Navbar;

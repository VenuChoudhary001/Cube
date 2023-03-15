import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [show,setShow]=useState(false);
  const router=useRouter();
  const [dark,setDark]=useState(false);
  useEffect(()=>{
     if(show){
      document.body.style.overflow="hidden"
     }else{
      document.body.style.overflow="auto"
     }
     
     if(router.pathname=='/') setDark(true);
     else setDark(true)

  },[show,router.pathname])

  return (
    <>
      <main className={` hidden  md:flex  items-center container px-6 h-[104px] mx-auto justify-between`}>
        <div className="text-base flex gap-8 items-center">
          <Link href='/mission' className="block ">Mission</Link>
          <Link href="/contact" className="block ">Contact</Link>
          <span className="block ">Press</span>
        </div>
        <Link href={'/waitlist'} className="w-[108px] flex items-center justify-center h-10 rounded-full bg-black text-white">
          Join beta
        </Link>
      </main>
      <main className=" md:hidden relative container px-6 h-[80px] flex items-center justify-between">
        <Image 
        src={'/icons/menu.svg'}
        width={22}
        height={22}
        alt=""
        onClick={()=>setShow(true)}
        />

        <Image 
        src={'/icons/Cube.svg'}
        width={62}
        height={24}
        alt=""
        className="absolute left-[40%]"
        />
         <Link  href={'/waitlist'} className={`' ${dark?"bg-white text-black":"bg-black text-white"}  'w-[88px] flex items-center justify-center text-sm  h-[32px] rounded-full' `}>
          Join Beta
        </Link>
       
      </main>
      {show && <Drawer setShow={setShow} />}
    </>
  );
};

export const Drawer=({setShow})=>{
  return (<>
  <main className="md:hidden z-[9999999] absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col gap-">
    <div className="block p-4">
      <div onClick={()=>{setShow(false)}} className="w-[36px] flex items-center justify-center rounded-full bg-white h-[36px]">
           <Image 
           src={'/icons/close.svg'}
           width={14}
           height={14}
           />
      </div>
    </div>
      <Link href={'/mission'} className="flex items-center py-1 justify-center border-b-[1px] border-light-300/50">
        Mission
      </Link>
      <Link href={'/contact'} className="flex items-center py-1 justify-center border-b-[1px] border-light-300/50">
        Contact
      </Link>
      <Link href={'/contact'} className="flex items-center py-1 justify-center border-light-300/50">
        Press
      </Link>
  </main>
  </>)
}





export default Navbar;

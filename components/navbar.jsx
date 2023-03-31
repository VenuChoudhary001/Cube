import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [dark, setDark] = useState(true);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if (router.pathname == "/") setDark(true);
    else setDark(false);
  }, [show, router.pathname]);

  return (
    <>
      <main
        className={`${
          dark && "text-white"
        } hidden  md:flex font-primary200  items-center container px-6 h-[104px]  mx-auto justify-between`}
      >
        <div className="text-lg  flex gap-8 items-center">
          <Link
            href="/mission"
            className={`block relative ${
              router.pathname == "/mission" && "anim_active"
            } flex flex-col items-start gap- font-primary300`}
          >
            Mission
            <div className=" w-[50%]"></div>
          </Link>
          <Link
            href="/contact"
            className={`block flex items-start justify-center font-primary300 flex-col ${
              router.pathname == "/contact" && "anim_active"
            }`}
          >
            Contact
            <div className=" w-[50%]"></div>
          </Link>
          <Link
            href="/careers"
            className={`block flex items-start font-primary300 justify-center flex-col ${
              router.pathname == "/careers" && "anim_active"
            }`}
          >
            Careers
            <div className=" w-[50%]"></div>
          </Link>
          {/* <Link
            href="/press"
            className={`block flex items-start font-primary300 justify-center flex-col ${
              router.pathname == "/press" && "anim_active"
            }`}
          >
            Press
            <div className=" w-[50%]"></div>
          </Link> */}
        </div>
        <div
          className={`absolute left-[48%] font-primary500 text-4xl ${
            !dark ? "text-black" : "text-white"
          }`}
        >
          <Link href={"/"}>Cube</Link>
        </div>
        <Link
          href={"/waitlist"}
          className={`${
            dark ? "bg-white text-black" : "bg-black text-white"
          } w-[128px] flex items-center font-primary200  justify-center h-[48px] rounded-full `}
        >
          Join beta
        </Link>
      </main>
      <main className=" md:hidden relative container px-6 h-[80px] flex items-center justify-between">
        {!dark ? (
          <Image
            alt="cube menu"
            src={"/icons/menu.svg"}
            width={22}
            height={22}
            className="curosr-pointer"
            onClick={() => setShow(true)}
          />
        ) : (
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            className="cursor-pointer"
            onClick={() => setShow(true)}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H19M1 1H19M1 13H19"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        <div
          className={`absolute left-[38%] font-primary500 text-3xl ${
            !dark ? "text-black" : "text-white"
          }`}
        >
          <Link href={"/"}>Cube</Link>
        </div>
        <Link
          href={"/waitlist"}
          className={`  ${
            dark ? "bg-white text-black" : "bg-black text-white"
          }  w-[88px] flex items-center font-primary300 justify-center text-sm  h-[34px] rounded-full `}
        >
          Join Beta
        </Link>
      </main>
      {show && <Drawer active={router.pathname} setShow={setShow} />}
    </>
  );
};

export const Drawer = ({ setShow, active }) => {
  return (
    <>
      <main className="md:hidden font-primary200 z-[9999999] absolute top-0 left-0 w-screen h-[100vh] bg-black text-white flex flex-col gap-">
        <div className="block p-4">
          <div
            onClick={() => {
              setShow(false);
            }}
            className="w-[36px] flex items-center justify-center rounded-full bg-white h-[36px]"
          >
            <Image
              alt="cube_menu"
              src={"/icons/close.svg"}
              width={14}
              height={14}
            />
          </div>
        </div>
        <div className="h-[400px] flex flex-col gap-4 items-center justify-center">
          <Link
            href={"/"}
            className={`  flex flex-col ${
              active == "/" ? "text-5xl anim_nav " : "text-3xl text-light-200"
            } items-center py-1  justify-center`}
          >
            Home
            <div className="h-[1px] w-[90%]"></div>
          </Link>
          <Link
            href={"/contact"}
            className={`  flex flex-col ${
              active == "/contact"
                ? "text-4xl anim_nav"
                : "text-3xl text-light-200"
            } items-center py-1 justify-center`}
          >
            Contact
            <div className="h-[1px] w-[90%]"></div>
          </Link>
          <Link
            href={"/mission"}
            className={`flex flex-col ${
              active == "/mission"
                ? "text-4xl anim_nav"
                : "text-3xl text-light-200"
            }  items-center py-1 justify-center`}
          >
            Mission
            <div className="h-[1px] w-[90%]"></div>
          </Link>

          {/* <Link
            href={"/press"}
            className={`  flex flex-col ${
              active == "/press"
                ? "text-4xl anim_nav"
                : "text-3xl text-light-200"
            } items-center py-1 justify-center`}
          >
            Press
            <div className="h-[1px] w-[90%]"></div>
          </Link> */}
          <Link
            href={"/careers"}
            className={`  flex flex-col ${
              active == "/careers"
                ? "text-4xl anim_nav"
                : "text-3xl text-light-200"
            } items-center py-1 justify-center`}
          >
            Careers
            <div className="h-[1px] w-[90%]"></div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Navbar;

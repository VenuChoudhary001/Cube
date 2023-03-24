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
          <span
            className={`block font-primary300 ${
              router.pathname == "/" && "anim_active"
            }`}
          >
            Press
          </span>
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
            alt=""
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
        <Link href={"/"} className="flex items-center justify-center">
          {!dark ? (
            <svg
              width="62"
              height="20"
              viewBox="0 0 62 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute fill-black text-white left-[40%]"
            >
              {" "}
              <path d="M9.696 1.912C4.704 1.912 0.624 5.392 0.624 11.032C0.624 16.096 4.008 19.24 9.48 19.24C11.832 19.24 13.968 18.664 15.36 17.68L15.768 12.904H14.568C13.608 16.552 12.072 17.968 10.08 17.968C7.128 17.968 5.592 14.752 5.592 10.36C5.592 6.304 6.84 3.112 9.84 3.112C12.072 3.112 13.344 4.672 13.944 7.528H15.12L15.048 3.328C13.68 2.416 11.856 1.912 9.696 1.912ZM30.7103 8.896L30.8303 5.848H30.0383L24.9983 6.952V7.816L25.3582 7.936C26.1022 8.128 26.2703 8.632 26.2703 9.328V16.216C25.6223 16.504 25.1422 16.696 24.4222 16.696C23.2702 16.696 22.7902 16 22.7902 14.776V8.896L22.9342 5.848H22.1422L17.0782 6.952V7.816L17.4382 7.936C18.2062 8.128 18.3742 8.632 18.3742 9.328V15.208C18.3742 17.968 19.8622 19.24 21.9982 19.24C24.1342 19.24 25.4062 18.016 26.2703 16.912L26.1982 19.24H27.0382L32.1022 18.4V17.464L31.5262 17.44C30.7582 17.416 30.7103 17.056 30.7103 16.24V8.896ZM34.2253 2.704V17.584C35.7853 18.808 38.1853 19.24 40.3693 19.24C44.4013 19.24 47.5453 16.648 47.5453 11.728C47.5453 7.792 45.5293 5.824 42.6973 5.824C40.6573 5.824 39.3373 7.072 38.6653 8.152V0.207999H37.9213L32.9053 1.312V2.032L34.2253 2.704ZM40.3693 18.112C39.0973 18.112 38.6653 17.152 38.6653 15.616V8.848C39.0973 8.56 39.5773 8.44 40.0813 8.44C41.9053 8.44 43.0333 9.904 43.0333 13.072C43.0333 15.904 42.0973 18.112 40.3693 18.112ZM55.6723 5.824C52.2163 5.824 49.2643 8.56 49.2643 12.832C49.2643 16.864 51.9523 19.24 55.5043 19.24C58.5283 19.24 60.3763 17.488 61.0243 14.848L60.5683 14.56C59.6563 15.76 58.5283 16.312 56.9923 16.312C54.8083 16.312 53.2243 14.536 53.2723 11.68H60.9283V11.08C60.9283 8.032 59.1523 5.824 55.6723 5.824ZM55.3843 6.832C56.6803 6.832 57.1363 8.248 57.1363 10.576H53.2963C53.4163 8.344 54.0643 6.832 55.3843 6.832Z" />
            </svg>
          ) : (
            <svg
              width="62"
              height="20"
              viewBox="0 0 62 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute fill-white text-white left-[40%]"
            >
              {" "}
              <path d="M9.696 1.912C4.704 1.912 0.624 5.392 0.624 11.032C0.624 16.096 4.008 19.24 9.48 19.24C11.832 19.24 13.968 18.664 15.36 17.68L15.768 12.904H14.568C13.608 16.552 12.072 17.968 10.08 17.968C7.128 17.968 5.592 14.752 5.592 10.36C5.592 6.304 6.84 3.112 9.84 3.112C12.072 3.112 13.344 4.672 13.944 7.528H15.12L15.048 3.328C13.68 2.416 11.856 1.912 9.696 1.912ZM30.7103 8.896L30.8303 5.848H30.0383L24.9983 6.952V7.816L25.3582 7.936C26.1022 8.128 26.2703 8.632 26.2703 9.328V16.216C25.6223 16.504 25.1422 16.696 24.4222 16.696C23.2702 16.696 22.7902 16 22.7902 14.776V8.896L22.9342 5.848H22.1422L17.0782 6.952V7.816L17.4382 7.936C18.2062 8.128 18.3742 8.632 18.3742 9.328V15.208C18.3742 17.968 19.8622 19.24 21.9982 19.24C24.1342 19.24 25.4062 18.016 26.2703 16.912L26.1982 19.24H27.0382L32.1022 18.4V17.464L31.5262 17.44C30.7582 17.416 30.7103 17.056 30.7103 16.24V8.896ZM34.2253 2.704V17.584C35.7853 18.808 38.1853 19.24 40.3693 19.24C44.4013 19.24 47.5453 16.648 47.5453 11.728C47.5453 7.792 45.5293 5.824 42.6973 5.824C40.6573 5.824 39.3373 7.072 38.6653 8.152V0.207999H37.9213L32.9053 1.312V2.032L34.2253 2.704ZM40.3693 18.112C39.0973 18.112 38.6653 17.152 38.6653 15.616V8.848C39.0973 8.56 39.5773 8.44 40.0813 8.44C41.9053 8.44 43.0333 9.904 43.0333 13.072C43.0333 15.904 42.0973 18.112 40.3693 18.112ZM55.6723 5.824C52.2163 5.824 49.2643 8.56 49.2643 12.832C49.2643 16.864 51.9523 19.24 55.5043 19.24C58.5283 19.24 60.3763 17.488 61.0243 14.848L60.5683 14.56C59.6563 15.76 58.5283 16.312 56.9923 16.312C54.8083 16.312 53.2243 14.536 53.2723 11.68H60.9283V11.08C60.9283 8.032 59.1523 5.824 55.6723 5.824ZM55.3843 6.832C56.6803 6.832 57.1363 8.248 57.1363 10.576H53.2963C53.4163 8.344 54.0643 6.832 55.3843 6.832Z" />
            </svg>
          )}
        </Link>
        <Link
          href={"/waitlist"}
          className={`  ${
            dark ? "bg-white text-black" : "bg-black text-white"
          }  w-[88px] flex items-center font-primary200 justify-center text-sm  h-[32px] rounded-full `}
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
            <Image alt="" src={"/icons/close.svg"} width={14} height={14} />
          </div>
        </div>
        <div className="h-[400px] flex flex-col gap-4 items-center justify-center">
          <Link
            href={"/"}
            className={`  flex ${
              active == "/" ? "text-5xl" : "text-3xl text-light-200"
            } items-center py-1 justify-center`}
          >
            Home
          </Link>
          <Link
            href={"/mission"}
            className={`  flex ${
              active == "/mission" ? "text-4xl" : "text-3xl text-light-200"
            }  items-center py-1 justify-center`}
          >
            Mission
          </Link>
          <Link
            href={"/contact"}
            className={`  flex ${
              active == "/contact" ? "text-4xl" : "text-3xl text-light-200"
            } items-center py-1 justify-center`}
          >
            Contact
          </Link>
          <Link
            href={"/press"}
            className={`  flex ${
              active == "/press" ? "text-4xl" : "text-3xl text-light-200"
            } items-center py-1 justify-center`}
          >
            Press
          </Link>
          <Link
            href={"/careers"}
            className={`  flex ${
              active == "/careers" ? "text-4xl" : "text-3xl text-light-200"
            } items-center py-1 justify-center`}
          >
            Careers
          </Link>
        </div>
      </main>
    </>
  );
};

export default Navbar;

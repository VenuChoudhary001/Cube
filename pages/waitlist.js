import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { validatePhone } from "../utils";
const Waitlist = () => {
  const [userInfo, setUserInfo] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePhone(userInfo.phone)) {
    }
    console.log(userInfo);
  };
  return (
    <>
      <section className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <main className="container p-6 h-screen flex flex-col justify-between">
          <Link href={"/"}>
            <Image
              alt=""
              src={"/icons/logo_text.svg"}
              width={112}
              height={40}
            />
          </Link>
          <div className="lg:max-w-[380px] xl:max-w-[480px] flex flex-col gap-5 md:gap-8 mx-auto">
            <div className="text-3xl xl:text-4xl font-primary500">
              Apply for early access
            </div>
            <div className="text-xl text-black/70">
              {" "}
              We are still fine tuning the product and would love your help.
              Join 12,045+ Cube babes on the waitlist.
            </div>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col gap-4 mt-4"
            >
              <main className="flex gap-2 flex-col w-full">
                <div className="text-sm font-bold ">Full Name</div>
                <input
                  type={"text"}
                  required
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, full_name: e.target.value })
                  }
                  placeholder="Full name"
                  className="outline-none rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
                />
              </main>
              <main className="flex gap-2 flex-col w-full">
                <div className="text-sm font-bold ">Phone</div>
                <input
                  type={"text"}
                  required
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                  placeholder="Phone"
                  className="outline-none rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
                />
              </main>
              <main className="flex items-center gap-2 w-full">
                <div className="flex relative">
                  <input
                    required
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, is_checked: e.target.checked })
                    }
                    type={"checkbox"}
                    className="appearance-none w-[15px] h-[10px] checked:bg-black outline-none  rounded-lg p-3 bg-white border-[1px] border-light-100 text-black/70 placeholder:text-black/70"
                  />
                </div>
                <span className="block text-black/70">
                  You agree to our friendly{" "}
                  <span className="underline font-semibold cursor-pointer">
                    privacy policy.
                  </span>
                </span>
              </main>
              <button className="p-3  bg-black w-full rounded-full text-white h-12">
                Join Beta
              </button>
            </form>
          </div>
          <div>
            <Image
              alt=""
              src={"/icons/copywright.svg"}
              width={90}
              height={24}
            />
          </div>
        </main>
        <main className=" w-full h-full hidden lg:flex p-6 flex-col items-center justify-center relative">
          <Image
            alt=""
            src={"/waitlist.png"}
            layout="fill"
            className="-z-10 object-cover rounded-l-[50px]"
          />
          <main className="text-[45px] leading-[50px] max-w-[600px] font-primary400 text-white ">
            “Break the ice and make a real connection on Cube”
          </main>
        </main>
      </section>
    </>
  );
};

export default Waitlist;

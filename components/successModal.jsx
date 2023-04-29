import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const SuccessModal = () => {
  useEffect(() => {}, []);
  const { asPath } = useRouter();
  return (
    <>
      <div className="fixed  top-0 w-screen h-screen">
        <div className="fixed inset-0 bg-black  bg-opacity-75 transition-opacity"></div>
        <main className=" fixed inset-0 z-[9999] overflow-y-auto">
          <div class="flex min-h-full items-center  justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative w-[540px] z-[99999999] min-h-[200px] transform overflow-y-auto rounded-2xl bg-white text-left py-8 md:py-0 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="flex flex-col py-4 xl:py-12 gap-6 xl:gap-12 items-center justify-center">
                <div className="w-[50px] h-[50px] xl:w-[100px] xl:mb-6">
                  <Image src={"/icons/smile.svg"} width={84} height={84} />
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <div className="text-2xl xl:text-4xl font-semibold">
                    Stay tuned!
                  </div>
                  <div className="text-base xl:text-lg">
                    You are now officially on the waitlist.
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                  <Link
                    href={`/`}
                    className="bg-dark-100 font-medium text-sm text-white xl:text-lg py-3 px-5 rounded-full"
                  >
                    Continue to home
                  </Link>
                  <div className="flex gap-4 xl:gap-6 max-w-[350px]">
                    <div className=" border-[1.4px] flex items-center justify-center border-neutral-400  md:border-[1.8px]  w-[35px] h-[35px] md:w-[50px] md:h-[50px] md:border-neutral-400 rounded-full">
                      <img
                        src="/icons/Instagram.svg"
                        alt="instagram"
                        className="block md:w-[24px] "
                      />
                    </div>
                    <div className=" border-[1.4px] flex items-center justify-center border-neutral-400  md:border-[1.8px] md:border-neutral-400  w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full">
                      <img
                        src="/icons/Tiktok.svg"
                        alt="tiktok"
                        className="block md:w-[24px]"
                      />
                    </div>
                    <div className=" border-[1.4px] border-neutral-400 p- md:border-[1.8px] flex items-center justify-center  w-[35px] h-[35px] md:w-[50px] md:h-[50px] md:border-neutral-400 rounded-full">
                      <img
                        src="/icons/Facebook.svg"
                        alt=""
                        className="block md:w-[24px]"
                      />
                    </div>
                    <div className=" border-[1.4px] border-neutral-400 p- flex items-center justify-center md:border-[1.8px]  w-[35px] h-[35px] md:w-[50px] md:h-[50px] md:border-neutral-400 rounded-full">
                      <img
                        src="/icons/Twitter.svg"
                        alt=""
                        className="block md:w-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SuccessModal;

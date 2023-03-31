import Image from "next/image";
import React from "react";

export const ProfileCard = () => {
  return (
    <>
      <article className="w-[94vw] max-w-[440px] flex flex-col items-base overflow-hidden rounded-lg h-[55vh] p-6 relative">
        <Image
          src={"/card/bg.png"}
          layout="fill"
          priority
          objectFit="cover"
          className="-z-10"
        />
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/60"></div>
        <main className="flex z-30 h-full items-end justify-between">
          <main className="flex text-white flex-col gap-1">
            <div className="flex items-end gap-2">
              <span className="block text-3xl font-primary400">Alex</span>{" "}
              <span className="block text-xl font-primary300">32</span>
              <span className="block">
                <Image
                  alt=""
                  src={"/card/check.png"}
                  width={16}
                  height={16}
                  className="mb-1"
                />
              </span>
            </div>
            <div className="flex flex-col  text-white text-base font-primary300">
              <span className="block">San Diego, CA</span>
              <span className="block">5 common interests</span>
            </div>
          </main>
          <main className="flex flex-col gap-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Image
                alt="Cube dating"
                src={"/card/like.svg"}
                width={16}
                height={16}
              />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Image
                alt="cube dating"
                src={"/card/share.svg"}
                width={16}
                height={16}
              />
            </div>
          </main>
        </main>
      </article>
    </>
  );
};

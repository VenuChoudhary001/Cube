import Image from "next/image";
import Link from "next/link";
import React from "react";

const PressHero = () => {
  return (
    <>
      <section className=" max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px] mx-auto rounded-2xl grid grid-cols-2 gap-8 place-items-center bg-dark-700 p-8">
        <main className="flex flex-col gap-8">
          <div className="text-white text-5xl font-primary400">
            Help more people find their person.
          </div>
          <div className="text-lg text-white/70   font-primary200">
            Let's take a vacation to get rid of the boredom and make your day
            more colorful. Bright air awaits you for a vacation with your
            friends, lover or family.
          </div>
          <Link
            href={"/"}
            className={
              "w-[248px] h-[56px] bg-white rounded-lg flex items-center justify-center text-base gap-6 font-primary300"
            }
          >
            Find openings
            <Image
              src={"/press/next.svg"}
              objectFit="contain"
              width={28}
              height={28}
            />
          </Link>
        </main>
        <main className="w-full ">
          <Image
            src={"/press/group.png"}
            width={694}
            height={543}
            objectFit="cover"
          />
        </main>
      </section>
    </>
  );
};

export default PressHero;

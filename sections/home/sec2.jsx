import React from "react";
import VideoPlayer from "../../components/videoPlayer";

const Sec2 = () => {
  return (
    <>
      <section className="container flex items-center justify-center mx-auto flex-col gap-4 md:gap-8 min-h-[300px]">
        <main className="font-primary300 text-center  text-dark-500 text-3xl md:text-5xl">
          The video-based dating app
        </main>
        <main className="font-primary200 max-w-[380px] md:max-w-[700px] text-center text-xl md:text-xl text-dark-200">
          Be your true self and make authentic connections on Cube, the platform
          that values honesty and transparency
        </main>
      </section>
      <div className="relative w-full h-[60vh] lg:h-[820px] xl:h-[1150px] ">
        <VideoPlayer />
      </div>
    </>
  );
};

export default Sec2;

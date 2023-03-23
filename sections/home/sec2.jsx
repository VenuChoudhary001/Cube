import React from "react";
import VideoPlayer from "../../components/videoPlayer";

const Sec2 = () => {
  return (
    <>
      <section className="container flex items-center justify-center mx-auto flex-col gap-4 md:gap-8 min-h-[300px]">
        <main className="font-primary300 text-center  text-dark-500 text-3xl md:text-5xl">
          Real Connections Starts with Cube
        </main>
        <main className="font-primary200 max-w-[380px] md:max-w-[700px] text-center text-xl md:text-xl text-dark-200">
          Express your true self through short, engaging videos and connect on a
          deeper level to form meaningful relationships that last.
        </main>
      </section>
      <div className="relative bg-dark-600 w-full  overflow-hidden  ">
        <VideoPlayer />
      </div>
    </>
  );
};

export default Sec2;

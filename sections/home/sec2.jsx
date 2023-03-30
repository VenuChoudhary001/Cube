import React from "react";
import VideoJS from "../../components/videoJS";
// import VideoPlayer from "../../components/videoPlayer";

const Sec2 = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    // width: "100vw",
    // height: "800px",
    // fill: true,
    width: "100vw",
    height: 420,
    loop: true,
    // fluid: true,
    // aspectRatio: "9:16",
    muted: true,
    // responsive: true,
    sources: [
      {
        src: "/cube_dating.m4v",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <section className="container flex items-center justify-center mx-auto flex-col gap-4 md:gap-8 min-h-[300px]">
        <main className="font-primary400 max-w-[350px] md:max-w-[900px] text-center  text-dark-500 text-3xl md:text-4xl lg:text-5xl">
          Real Connection starts with Cube
        </main>
        <main className="font-primary200 max-w-[380px] md:max-w-[700px] text-center text-lg md:text-xl text-dark-200">
          Express your true self through short, engaging videos and connect on a
          deeper level to form meaningful relationships.
        </main>
      </section>
      <div className="relative bg-dark-700 w-full flex items-center justify-center overflow-hidden  ">
        <VideoPlayer />
        {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}
      </div>
    </>
  );
};

export default Sec2;

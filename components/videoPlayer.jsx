import React, { useState, useRef, useEffect } from "react";
// import { IKVideo, IKContext } from "imagekitio-react";

const VideoPlayer = ({ playerRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let [entry] = entries;
        if (entry.isIntersecting) {
          if (playerRef.current) {
            playerRef.current.play();
          }
        }
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.15 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    if (isVisible) observer.unobserve(containerRef.current);
  }, []);

  return (
    <>
      <main
        ref={containerRef}
        className="lg:max-w-[1000px] mx-auto lg:h-[900px] flex items-center"
      >
        <video
          ref={playerRef}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-[800px] object-cover"
        >
          <source
            src="https://ik.imagekit.io/hv3uwn6tn/cube_dating.m4v"
            type="video/mp4"
          />
        </video>
      </main>
    </>
  );
};

export default VideoPlayer;

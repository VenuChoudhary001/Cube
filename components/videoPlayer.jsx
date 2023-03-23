import React, { useRef, useEffect } from "react";
const VideoPlayer = () => {
  const cloudinaryRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    // if (window) {
    //   if (cloudinaryRef.current) return;
    //   else {
    //     cloudinaryRef.current = window.cloudinary;
    //     cloudinaryRef.current.videoPlayer(videoRef.current, {
    //       cloud_name: "dtwhf1fv8",
    //       loop: true,
    //       autoplayMode: "on-scroll",
    //     });
    //   }
    // }
  }, []);
  return (
    // <video
    //   className="absolute h-[60vh] top-0 left-0 w-full md:h-[700px] object-cover  "
    //   ref={videoRef}
    //   data-cld-public-id={"dating"}
    //   autoPlay
    //   loop
    // />
    <video
      className="absolute h-[80vh] lg:h-[90vh] xl:h-[950px] top-0 left-0 w-full object-cover "
      type={"video/mp4"}
      autoPlay
      loop
      muted
    >
      <source src="https://res.cloudinary.com/dtwhf1fv8/video/upload/v1679322290/dating.mp4" />
    </video>
  );
};

export default VideoPlayer;
//

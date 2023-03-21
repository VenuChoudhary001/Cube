import React, { useRef, useEffect } from "react";
const VideoPlayer = () => {
  const cloudinaryRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    if (cloudinaryRef.current) return;
    else {
      cloudinaryRef.current = window.cloudinary;
      cloudinaryRef.current.videoPlayer(videoRef.current, {
        cloud_name: "dtwhf1fv8",
        loop: true,
        autoplayMode: "on-scroll",
      });
    }
  }, []);
  return (
    <video
      className="absolute h-[60vh] top-0 left-0 w-full md:h-full object-cover  "
      ref={videoRef}
      data-cld-public-id="dating"
      autoPlay
      loop
    />
  );
};

export default VideoPlayer;
//

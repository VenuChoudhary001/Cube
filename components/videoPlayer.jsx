import React, { useState, useRef, useEffect } from "react";

const VideoPlayer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let [entry] = entries;
        if (entry.isIntersecting) containerRef.current.play();
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.75 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    if (isVisible) observer.unobserve(containerRef.current);
  }, []);

  return (
    <video
      className="absolut h-[80vh] lg:h-[90vh] xl:h-[750px] top-0 left-0 w-full object-contain "
      type={"video/mp4"}
      loop
      muted
      ref={containerRef}
    >
      <source src="https://res.cloudinary.com/dtwhf1fv8/video/upload/v1679322290/dating.mp4" />
    </video>
  );
};

export default VideoPlayer;
//

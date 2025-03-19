import React from "react";

const Section1 = () => {
  return (
    <section className="w-full">
      <video
        autoPlay
        muted
        loop
        className="mx-auto"
        preload="auto"
        poster="/jkhPoster.png"
      >
        <source src="/jkhMv.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/jkhMv.mp4" type="video/mp4" />
        브라우저가 비디오를 지원하지 않습니다.
      </video>
    </section>
  );
};

export default Section1;

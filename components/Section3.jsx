import React from "react";
import Image from "next/image";

const Section3 = () => {
  return (
    <div
      className="w-full sm:min-w-[1250px] h-[680px] sm:h-[810px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/section3_bg.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="hidden sm:block sm:w-[745px] h-[648px] relative">
        <Image
          src="/section3_text.svg"
          width={235}
          height={50}
          className="absolute top-98 left-50 z-10 blinking-text"
          alt="법인회생전문 정경현변호사"
        ></Image>
        <Image
          src="/section3_img.svg"
          width={745}
          height={648}
          alt="법인파산전문 정경현변호사"
        ></Image>
      </div>
      <div className="w-[343px] sm:hidden h-[545px] relative">
        <Image
          src="/section3_text.svg"
          width={170}
          height={30}
          className="absolute top-81 left-12 z-10 blinking-text"
          alt="법인회생전문 정경현변호사"
        ></Image>
        <Image
          src="/section3_mb_img.svg"
          width={343}
          height={542}
          alt="법인파산전문 정경현변호사"
        ></Image>
      </div>
    </div>
  );
};

export default Section3;

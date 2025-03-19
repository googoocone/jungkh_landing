import Image from "next/image";
import React from "react";

const Section9 = () => {
  return (
    <div className="w-full h-[2000px] sm:h-[2000px] bg-[#f3f6fc]  flex items-center justify-center">
      <div className="hidden sm:block w-[980px] h-[1800px] relative">
        <Image src="/section9.svg" fill alt="자주묻는 질문"></Image>
      </div>
      <div className="sm:hidden w-[343px] h-[1903px] relative">
        <Image src="/section9_mb.svg" fill alt="자주묻는 질문"></Image>
      </div>
    </div>
  );
};

export default Section9;

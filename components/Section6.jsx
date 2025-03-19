"use client";

import React from "react";
import Image from "next/image";

import { Typewriter } from "react-simple-typewriter";

const Section6 = () => {
  return (
    <>
      <div className="hidden  w-full h-[2600px] bg-[#072660] sm:flex flex-col items-center justify-center">
        <h2 className="text-[20px] sm:text-[32px] text-center text-white font-semibold mb-30">
          스탠다드는 어떻게 다를까요?
        </h2>
        <div className="sm:w-[900px] h-[670px] relative">
          <Image
            src="/section6_1_arrow.svg"
            width={400}
            height={105}
            alt="빠른 사건 처리"
            className="absolute top-73 left-80 z-10 animate-slideIn"
          ></Image>
          <Image
            src="/section6_1.svg"
            fill
            alt="3일이내 신청서 접수 보장"
          ></Image>
        </div>
        <div className="w-[720px] h-[600px] relative mt-30">
          <Image
            src="/section6_2_circle1.svg"
            width={103}
            height={103}
            alt="이혼"
            className="absolute bottom-40 right-50 z-10 blinking-text-random"
          ></Image>
          <Image
            src="/section6_2_circle2.svg"
            width={103}
            height={103}
            alt="형사"
            className="absolute bottom-46 right-8 z-10 blinking-text"
          ></Image>
          <Image
            src="/section6_2_circle3.svg"
            width={115}
            height={115}
            alt="부동산"
            className="absolute bottom-8 right-12 z-10 blinking-text-random"
          ></Image>
          <Image
            src="/section6_2_circle4.svg"
            width={85}
            height={85}
            alt="민사"
            className="absolute bottom-30 right-58 z-10 blinking-text"
          ></Image>
          <Image
            src="/section6_2.svg"
            fill
            alt="오직 법인회생 법인파산만 합니다."
          ></Image>
        </div>
        <div className="w-[805px] h-[525px] relative mt-30">
          <div className="absolute w-full h-[112px] text-center text-[40px] text-white top-20">
            <h2>수임료 비교하고 결정하세요</h2>
            <div className="w-[270px] h-[55px] mx-auto font-semibold bg-[#397bf4]">
              <Typewriter
                className="font-semibold"
                words={["합리적입니다"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={110}
                deleteSpeed={0}
                delaySpeed={1500} // 문장 간 대기 시간
              />
            </div>
          </div>
          <Image src="/section6_3.svg" fill alt="합리적인 수임료"></Image>
        </div>
      </div>
      <div className="w-full sm:hidden h-[2500px] bg-[#072660] flex flex-col items-center justify-center">
        <h2 className="text-[20px]  text-center text-white font-semibold mb-10">
          스탠다드는 어떻게 다를까요?
        </h2>
        <div className="w-[343px] h-[675px] relative">
          <Image
            src="/section6_1_mb_arrow.svg"
            width={130}
            height={245}
            alt="다이렉트 사건 처리"
            className="absolute z-10 top-78 left-[18px] animate-slideInBottom"
          ></Image>
          <Image
            src="/section6_1_mb.svg"
            fill
            alt="3일이내 신청서 접수 보장"
          ></Image>
        </div>
        <div className="w-[343px] h-[880px] relative mt-10">
          <Image
            src="/section6_2_circle1.svg"
            width={103}
            height={103}
            alt="이혼"
            className="absolute bottom-40 right-50 z-10 blinking-text-random"
          ></Image>
          <Image
            src="/section6_2_circle2.svg"
            width={103}
            height={103}
            alt="형사"
            className="absolute bottom-46 right-8 z-10 blinking-text"
          ></Image>
          <Image
            src="/section6_2_circle3.svg"
            width={115}
            height={115}
            alt="부동산"
            className="absolute bottom-8 right-12 z-10 blinking-text-random"
          ></Image>
          <Image
            src="/section6_2_circle4.svg"
            width={85}
            height={85}
            alt="민사"
            className="absolute bottom-30 right-58 z-10 blinking-text"
          ></Image>
          <Image
            src="/section6_2_mb.svg"
            fill
            alt="오직 법인회생 법인파산만 합니다."
          ></Image>
        </div>
        <div className="w-[343px] h-[625px] relative mt-10">
          <div className="absolute w-[170px] h-[35px] text-center text-[24px] text-white top-28 left-22">
            <div className="w-[170px] h-[35px] mx-auto font-semibold bg-[#397bf4]">
              <Typewriter
                className="font-semibold"
                words={["합리적입니다"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={110}
                deleteSpeed={0}
                delaySpeed={1500} // 문장 간 대기 시간
              />
            </div>
          </div>
          <Image src="/section6_3_mb.svg" fill alt="합리적인 수임료"></Image>
        </div>
      </div>
    </>
  );
};

export default Section6;

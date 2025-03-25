"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

// Swiper 스타일을 import 합니다.
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Section8 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full h-[712px] sm:h-[970px] bg-white flex flex-col items-center justify-center">
      <Image
        src="/section8_1.svg"
        width={425}
        height={192}
        alt="정경현변호사 유튜브"
        className="hidden sm:block"
      />
      <Image
        src="/section8_1.svg"
        width={238}
        height={76}
        alt="정경현변호사 유튜브"
        className="sm:hidden"
      />
      <h2 className="hidden sm:block text-[24px] text-[#1F1E29] text-center mt-5 sm:mt-10 font-normal">
        "도산전문 변호인단의{" "}
        <span className="font-semibold text-[#397BF4]">확실한 솔루션</span>"
      </h2>
      <h2 className="sm:hidden text-[18px] text-[#1F1E29] text-center mt-5 sm:mt-10 font-normal">
        "도산전문 변호인단의
        <br />
        <span className="font-semibold text-[#397BF4]">확실한 솔루션</span>"
      </h2>
      <div className="hidden sm:block sm:w-[1340px] h-[290px] sm:h-[310px] mt-10 sm:mt-20 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-full h-full "
        >
          <SwiperSlide className="w-[460px] h-[240px] rounded-lg">
            <Link
              href="https://www.youtube.com/watch?v=i4LJ0Pod-jY"
              target="_blank"
            >
              <Image
                src="/youtube1.svg"
                alt="Slide 1"
                width={900}
                height={310}
                className="object-cover rounded-lg"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-[460px] h-[240px] rounded-lg">
            <Link
              href="https://www.youtube.com/watch?v=cZY7w9sSxPA"
              target="_blank"
            >
              <Image
                src="/youtube2.svg"
                alt="Slide 2"
                width={460}
                height={240}
                className="object-cover rounded-lg"
              />{" "}
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-[460px] h-[240px] rounded-lg">
            <Link
              href="https://www.youtube.com/watch?v=IcsX5flw-sA"
              target="_blank"
            >
              <Image
                src="/youtube3.svg"
                alt="Slide 3"
                width={900}
                height={310}
                className="object-cover rounded-lg"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-[460px] h-[240px] rounded-lg ">
            <Link
              href="https://www.youtube.com/watch?v=GV_jIwkB1n4"
              target="_blank"
            >
              <Image
                src="/youtube4.svg"
                alt="Slide 4"
                width={900}
                height={310}
                className="object-cover rounded-lg "
              />{" "}
            </Link>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev sm:absolute w-[24px] h-[24px] top-1/2 left-4 z-20 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 cursor-pointer "></div>
        {/* 다음 버튼 */}
        <div className="swiper-button-next absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 cursor-pointer"></div>
      </div>
      <div className="sm:hidden w-full h-[290px] mt-10 sm:mt-20 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-full h-full "
        >
          <SwiperSlide className="w-[460px] h-[240px] rounded-lg">
            <Link
              href="https://www.youtube.com/watch?v=i4LJ0Pod-jY"
              target="_blank"
            >
              <Image
                src="/youtube1.svg"
                alt="Slide 1"
                width={900}
                height={310}
                className="object-cover rounded-lg"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-[460px] h-[240px] rounded-lg">
            <Link
              href="https://www.youtube.com/watch?v=cZY7w9sSxPA"
              target="_blank"
            >
              <Image
                src="/youtube2.svg"
                alt="Slide 2"
                width={460}
                height={240}
                className="object-cover rounded-lg"
              />{" "}
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-[460px] h-[240px] rounded-lg">
            <Link
              href="https://www.youtube.com/watch?v=IcsX5flw-sA"
              target="_blank"
            >
              <Image
                src="/youtube3.svg"
                alt="Slide 3"
                width={900}
                height={310}
                className="object-cover rounded-lg"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="w-[460px] h-[240px] rounded-lg ">
            <Image
              src="/youtube4.svg"
              alt="Slide 4"
              width={900}
              height={310}
              className="object-cover rounded-lg "
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <Link
        href="https://www.youtube.com/@%EC%A0%95%EA%B2%BD%ED%98%84%EB%B3%80%ED%98%B8%EC%82%AC"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-10 bg-blue-500 text-[16px] sm:text-[18px] font-semibold text-white py-3 sm:py-5 px-5 sm:px-8 rounded-lg cursor-pointer">
          유튜브 보러가기
        </button>
      </Link>
    </div>
  );
};

export default Section8;

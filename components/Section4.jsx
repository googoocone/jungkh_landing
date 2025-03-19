"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

// 숫자가 0부터 target까지 duration(ms) 동안 증가하는 컴포넌트 (뷰포트 진입 시 시작)
const CountUp = ({ target, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = useRef(null);

  // Intersection Observer로 뷰포트 진입 여부 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.1 } // 요소의 10% 이상 보일 때 실행
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasStarted]);

  // hasStarted가 true일 때 숫자 증가 애니메이션 실행
  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = target / (duration / 50); // 50ms 간격 업데이트
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(interval);
  }, [hasStarted, target, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

const Section4 = () => {
  return (
    <div className="w-full h-[840px] sm:h-[1300px] bg-white flex flex-col items-center justify-center">
      <div className="sm:w-full w-[290px] text-[24px] sm:text-[40px] text-center">
        <h2>
          <span className="text-blue-gradient font-semibold">
            오직 법인회생/파산 사건만
          </span>{" "}
          진행하기에
        </h2>
        <h2 className="font-semibold">누구보다 잘할 수 있습니다</h2>
      </div>
      <div className="hidden sm:block sm:w-[852px] sm:h-[916px] relative">
        <div className="absolute top-82 left-60 z-10 text-[50px] text-blue-gradient font-semibold">
          <CountUp target={1000} duration={2000} suffix="억+" />
        </div>
        <div className="absolute top-64 right-38 z-10 text-[50px] text-blue-gradient font-semibold">
          <CountUp target={1000} duration={2000} suffix="억+" />
        </div>
        <Image
          src="/section4.svg"
          fill
          alt="법인회생 법인파산 누적 탕감 금액"
        />
      </div>
      <div className="mt-10 sm:hidden w-[335px] h-[520px] relative">
        <div className="absolute top-50 left-15 z-10 text-[20px] text-blue-gradient font-semibold">
          <CountUp target={1000} duration={2000} suffix="억+" />
        </div>
        <div className="absolute top-26 right-34 z-10 text-[20px] text-blue-gradient font-semibold">
          <CountUp target={1000} duration={2000} suffix="억+" />
        </div>
        <Image
          src="/section4_mb.svg"
          fill
          alt="법인회생 법인파산 누적 탕감 금액"
        />
      </div>
    </div>
  );
};

export default Section4;

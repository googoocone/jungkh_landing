"use client";

import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 }, // 왼쪽에서 시작
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }, // 오른쪽으로 이동하며 나타남
};

const Section7 = () => {
  return (
    <div className="w-full sm:min-w-[1250px] h-[2800px] sm:h-[2400px] bg-[#CBDDFF] flex flex-col items-center justify-center">
      <div className="w-full text-center text-[24px] sm:text-[40px] flex flex-col items-center justify-center sm:mb-10">
        <div>
          오직, <strong className="font-semibold">스탠다드</strong>만의
        </div>
        <div
          style={{
            background: "linear-gradient(270deg, #397bf4 0%, #0014c0 100%)",
          }}
          className="px-2 py-1 text-white  font-semibold mb-15"
        >
          상담 특별 패키지
        </div>
      </div>

      <motion.div
        className="hidden sm:block w-[980px] h-[420px] relative mb-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src="/section7_1.svg" fill alt="상담특별패키지"></Image>
      </motion.div>
      <motion.div
        className="hidden sm:block w-[980px] h-[370px] relative mb-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src="/section7_2.svg" fill alt="상담특별패키지"></Image>
      </motion.div>
      <motion.div
        className="hidden sm:block w-[980px] h-[550px] relative mb-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src="/section7_3.svg" fill alt="상담특별패키지"></Image>
      </motion.div>
      <motion.div
        className="hidden sm:block w-[980px] h-[420px] relative mb-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src="/section7_4.svg" fill alt="상담특별패키지"></Image>
      </motion.div>

      {/* 모바일 */}
      <motion.div
        className="sm:hidden w-[343px] h-[582px] relative mb-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src="/section7_1_mb.svg" fill alt="상담특별패키지"></Image>
      </motion.div>
      <motion.div
        className="sm:hidden w-[343px] h-[560px] relative mb-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src="/section7_2_mb.svg" fill alt="상담특별패키지"></Image>
      </motion.div>
      <motion.div
        className="sm:hidden w-[343px] h-[690px] relative mb-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src="/section7_3_mb.svg" fill alt="상담특별패키지"></Image>
      </motion.div>
      <motion.div
        className="sm:hidden w-[343px] h-[630px] relative mb-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src="/section7_4_mb.svg" fill alt="상담특별패키지"></Image>
      </motion.div>
    </div>
  );
};

export default Section7;

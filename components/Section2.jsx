"use client";

import React from "react";

import { motion } from "framer-motion";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 }, // 왼쪽에서 시작
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }, // 오른쪽으로 이동하며 나타남
};

const Section2 = () => {
  return (
    <div className="w-full h-[620px] sm:h-[920px] bg-[#f3f6fc] flex flex-col items-center justify-center">
      <div className="text-center w-[180px] sm:w-full h-[52px] sm:h-[40px] text-[16px] sm:text-[24px] mb-[12px] sm:mb-[24px] flex items-center justify-center">
        법인회생/파산을 진행하신 의뢰인들에게 물었습니다
      </div>

      <div className="w-full h-[130px] text-[24px] sm:text-[40px] mb-8 sm:mb-16 flex flex-col items-center justify-center">
        <div className="w-full text-center">
          <strong>법인회생/파산</strong>을, 하기 전
        </div>
        <div className="w-full text-center">
          어떤 점이 가장{" "}
          <strong className="text-blue-gradient">걱정되셨나요?</strong>
        </div>
      </div>
      <div className="w-full sm:w-[640px] h-[270px] sm:h-[410px] px-5 flex flex-col items-center justify-center gap-5">
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="w-full h-[60px] sm:h-[85px] px-10 gap-5 rounded-full text-[14px] sm:text-[20px] bg-white flex items-center justify-start">
            <div className="text-[#0014C0] font-semibold">01</div>
            <div className="text-[#1F1E29]">
              법인과는 별도로 내 재산을 지킬 수 있을까?
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="w-full h-[60px] sm:h-[85px] px-10 gap-5 rounded-full text-[14px] sm:text-[20px] bg-white flex items-center justify-start">
            <div className="text-[#0014C0] font-semibold">02</div>
            <div className="text-[#1F1E29]">
              변호사가 업계에 대한 이해도가 떨어지진 않을까?
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="w-full h-[60px] sm:h-[85px] px-10 gap-5 rounded-full text-[14px] sm:text-[20px] bg-white flex items-center justify-start">
            <div className="text-[#0014C0] font-semibold">03</div>
            <div className="text-[#1F1E29]">
              법인 회생/파산을 하면 나는 법적 책임을 져야할까?
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="w-full h-[60px] sm:h-[85px] px-10 gap-5 rounded-full text-[14px] sm:text-[20px] bg-white flex items-center justify-start">
            <div className="text-[#0014C0] font-semibold">04</div>
            <div className="text-[#1F1E29]">
              변호사 비용이 터무니 없이 비싸진 않을까?
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;

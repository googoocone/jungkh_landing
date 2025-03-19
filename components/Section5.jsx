"use client";

import React, { useState } from "react";
import cn from "classnames";

import { LuBuilding } from "react-icons/lu";
import { LuHospital } from "react-icons/lu";
import { TbBuildingEstate } from "react-icons/tb";
import { AiOutlineDesktop } from "react-icons/ai";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiAdvertisementLine } from "react-icons/ri";
import { MdOutlineAgriculture } from "react-icons/md";
import { PiFactory } from "react-icons/pi";

const menus = [
  {
    number: 1,
    title: "제조업",
    icon: <PiFactory className="w-[24px] h-[24px] text-[#0014c0]" />,
    case_revive: [
      "서울회생법원 제지제조업 법인회생",
      "서울회생법원 애견용품 제조업 법인회생",
      "수원회생법원 컨테이너제조업 법인회생",
      "광주지방법원 현대자동차 2차 벤더사 법인회생",
      "전주지방법원 원사 가공업 법인회생 및 대표자 회생",
      "창원지방법원 현대자동차 1차 벤더 법인회생(채권자대리)",
      "부산회생법원 선박제조업 법인회생",
      "대전지방법원 모래 및 자갈 채취업 법인회생",
      "의정부지방법원 모피제조업 법인파산",
      "수원회생법원 가구제작업 법인파산",
      "수원회생법원 프린터 개발 및 제조업 법인파산",
      "수원회생법원 가구 제작 및 인테리어업 법인파산",
      "대전지방법원 고철스크랩업 법인파산",
      "대전지방법원 구두제조업 법인파산",
      "대구지방법원 전자부품 제조업 법인파산",
    ],
  },
  {
    number: 2,
    title: "의료업",
    icon: <LuHospital className="w-[24px] h-[24px] text-[#0014c0]" />,
    case_revive: [
      "서울회생법원 논현동 성형외과 일반회생",
      "서울회생법원 신사동 피부과 병원 일반회생",
      "서울회생법원 종합병원 일반회생",
      "의정부지방법원 피부과병원 일반회생",
      "창원지방법원 대형약국 일반회생",
      "창원지방법원 화상외과 일반회생",
      "부산회생법원 의사 파산 및 면책",
      "전주지방법원 한의사 파산 및 면책",
    ],
  },
  {
    number: 3,
    title: "임대업",
    icon: <TbBuildingEstate className="w-[24px] h-[24px] text-[#0014c0]" />,
    case_revive: [
      "의정부지방법원 부동산임대업 법인파산",
      "광주지방법원 부동산 임대업 법인파산",
    ],
  },
  {
    number: 4,
    title: "IT업",
    icon: <AiOutlineDesktop className="w-[24px] h-[24px] text-[#0014c0]" />,
    case_revive: [
      "서울회생법원 전자상거래업 법인회생",
      "서울회생법원 정보서비스업 법인회생",
      "서울회생법원 IT/AI 개발 유통회사 법인회생",
      "서울회생법원 영화 영상물 제작업 법인회생",
      "서울회생법원 가상자산거래소 법인파산",
      "서울회생법원 소프트웨어 개발 및 공급업 법인파산",
      "서울회생법원 벤처기업 및 스타트업 법인파산 다수",
      "서울회생법원 컴퓨터 소프트웨어 도소매업 법인파산",
      "부산회생법원 소프트웨어 개발업 법인파산",
    ],
  },
  {
    number: 5,
    title: "무역업",
    icon: <IoBriefcaseOutline className="w-[24px] h-[24px] text-[#0014c0]" />,
    case_revive: [
      "수원회생법원 무역업 법인회생",
      "부산회생법원 무역업 법인회생",
      "광주지방법원 차량용품 제작 및 구매대행업 법인파산",
    ],
  },
  {
    number: 6,
    title: "요식업",
    icon: <IoFastFoodOutline className="w-[24px] h-[24px] text-[#0014c0]" />,
    case_revive: [
      "서울회생법원 역삼동 유명 프랜차이즈 요식업 일반회생",
      "부산지방법원 광안리 소재 횟집 일반회생 외 전국 다수",
      "대구지방법원 빽다방 제휴업체(HACCP인증) 법인회생",
    ],
  },
  {
    number: 7,
    title: "광고업",
    icon: <RiAdvertisementLine className="w-[24px] h-[24px] text-[#0014c0]" />,
    case_revive: ["서울회생법원 연예기획사 법인파산"],
  },
  {
    number: 8,
    title: "농업",
    icon: <MdOutlineAgriculture className="w-[24px] h-[24px] text-[#0014c0]" />,
    case_revive: [
      "창원지방법원 영농조합법인 법인회생",
      "인천지방법원 영농인 일반회생",
      "광주지방법원 농업법인 법인회생",
      "대구지방법원 영농조합법인 법인회생",
    ],
  },
  {
    number: 9,
    title: "건설업",
    icon: <LuBuilding className="w-[24px] h-[24px] text-[#0014c0]" />,
    case_revive: [
      "수원회생법원 전문/종합건설업 법인회생",
      "대구지방법원 건설기자재 제조업 법인회생",
      "대전지방법원 건설업 법인회생",
    ],
  },
  {
    number: 10,
    title: "기타",
    icon: <PiFactory className="w-[24px] h-[24px] text-[#0014c0]" />,
    case_revive: [
      "서울회생법원 대치동 학원교육업 일반회생 자문",
      "의정부지방법원 HACCP인증업체 법인회생 및 대표자 회생",
      "서울회생법원 여행업 법인파산",
      "수원회생법원 건강식품유통업 법인파산 외 전국 다수",
      "창원지방법원 철제랙 및 물류창고 제조업",
      "대구지방법원 석재채굴업 법인파산",
      "광주지방법원 태양광 발전사업 법인파산 및 대표자 파산 면책",
    ],
  },
];

const Section5 = () => {
  const [isMenu, setIsMenu] = useState("제조업");

  // 선택된 메뉴에 해당하는 데이터 찾기
  const selectedMenu = menus.find((item) => item.title === isMenu) || menus[0];

  return (
    <div className="w-full h-[710px] sm:h-[1020px] flex flex-col sm:gap-15 items-center justify-center bg-[#534F4B] bg-[url('/section5_mb.png')] sm:bg-[url('/section5.png')] bg-cover">
      <div className="hidden sm:block text-[40px] font-semibold text-center text-black">
        <h2>10여년 도산전문 경력, 중소기업 부터 대기업까지</h2>
      </div>
      <div className="sm:hidden text-[28px] mb-10 font-semibold text-center text-black">
        <h2>
          10여년 도산전문 경력, <br />
          중소기업 부터 대기업까지
        </h2>
      </div>
      <div className="flex gap-2 sm:gap-4 w-full sm:w-[730px] mb-5 sm:mb-0 h-[100px] sm:h-[260px] overflow-x-auto sm:flex-wrap whitespace-nowrap sm:px-0 px-4">
        {menus.map((item) => (
          <div
            key={item.number}
            onClick={() => setIsMenu(item.title)}
            className={cn(
              "w-[80px] sm:w-[160px] h-[90px] sm:h-[70px] shrink-0 rounded-xl sm:rounded-full flex sm:flex-row flex-col  items-center justify-center bg-white gap-3 text-black cursor-pointer ",
              isMenu === item.title ? "border-2 border-[#0014c0]" : ""
            )}
            style={
              isMenu === item.title
                ? {
                    borderImage:
                      "linear-gradient(270deg, #397bf4 0%, #0014c0 100%) 1 border-radius",
                  }
                : {}
            }
          >
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>
      <div className="w-full sm:w-[980px] h-[370px]  sm:h-[460px] flex sm:flex-row flex-col p-5 sm:p-0 gap-5">
        <div className="w-full mx-auto sm:w-[730px] p-2 sm:pl-10 sm:pr-4 sm:py-14 h-full flex flex-col items-center justify-start gap-2 sm:gap-10 bg-white rounded-xl">
          <div className="w-full px-4 sm:px-0 py-5 sm:py-0 sm:w-[580px] h-[360px] sm:h-[460px] overflow-y-auto">
            {selectedMenu.case_revive.length > 0 ? (
              selectedMenu.case_revive.map(
                (caseItem, index) =>
                  caseItem && (
                    <div
                      key={index}
                      className="truncate p-1 text-[14px] sm:text-[18px] text-gray-800 "
                    >
                      • {caseItem}
                    </div>
                  )
              )
            ) : (
              <div className="p-2 text-[16px] text-gray-500">
                회생 사례가 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;

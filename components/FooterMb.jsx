"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from "react";

export default function FooterMb() {
  // 폼 표시 상태
  const [isFormOpen, setIsFormOpen] = useState(false);

  // 기존 폼 입력 값 상태
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [field, setField] = useState("");

  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // **새로운 상태: 모달 표시 여부**
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // 폼 제출 핸들러 (모달을 띄우는 역할)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 입력 값 검증
    if (!name || !phone || !field) {
      alert("모든 필수 입력 값을 채워주세요.");
      return;
    }

    // 상담 클릭 이벤트 디스패치 (API 호출 전에 발생)
    window.dispatchEvent(new Event("consultClicked"));

    // 확인 모달 열기
    // setShowConfirmationModal(true);
    // 여기서 폼을 바로 닫지 않고, 확인 후 제출 성공 시 닫도록 변경

    confirmAndSubmit();
  };

  // **새로운 함수: 모달에서 확인 후 실제 제출 처리**
  const confirmAndSubmit = async () => {
    setIsLoading(true); // 로딩 시작

    // 모달 닫기 (API 호출 시작과 함께 닫는 것이 일반적)
    setShowConfirmationModal(false);

    try {
      // 여기서 실제 API 호출
      const response = await fetch("/api/submit-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, field }), // 기존 state 값 사용
      });

      // 두 번째 API 호출
      await fetch("api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, field }), // 기존 state 값 사용
      });

      const result = await response.json();

      // 응답 처리
      if (response.ok) {
        // 성공 시 폼 초기화 및 폼 닫기
        setName("");
        setPhone("");
        setField("");
        alert(result.message);
        setIsFormOpen(false); // **성공 시 폼 닫기**
      } else {
        // 오류 응답 처리
        const errorResult = await response.json();
        throw new Error(
          errorResult.message || `HTTP error! status: ${response.status}`
        );
      }
      // 메일러 응답 처리가 필요한 경우 여기에 추가
      // const mailerResult = await mailer.json();
      // if (!mailer.ok) { ... }
    } catch (error) {
      console.error("Error:", error);
      alert("상담 신청 중 오류가 발생했습니다: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // **새로운 함수: 모달에서 취소 처리**
  const cancelConfirmation = () => {
    setShowConfirmationModal(false); // 모달 닫기
    // 취소 시 폼은 그대로 열려있도록 둠
  };

  return (
    <>
      <footer className="sm:hidden fixed bottom-0 w-full bg-[#072660] z-50">
        {/* 상담신청 버튼 (폼이 닫혀 있고 로딩 중이 아닐 때만 표시) */}
        {!isFormOpen && !isLoading && (
          <div className="flex justify-center py-2">
            <button
              className="w-[90%] h-[50px] bg-[#397BF4] text-lg font-semibold text-white rounded-xl"
              onClick={() => setIsFormOpen(true)}
            >
              상담신청
            </button>
          </div>
        )}

        {/* 로딩 중일 때 표시 */}
        {isLoading && (
          <div className="flex justify-center py-2">
            <div className="w-[90%] h-[50px] bg-gray-600 text-lg font-semibold text-white rounded-xl flex items-center justify-center">
              <svg
                className="animate-spin h-6 w-6 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              상담 신청 중...
            </div>
          </div>
        )}

        {/* 상담신청 폼 (열려 있고 로딩 중이 아닐 때 표시) */}
        {isFormOpen && !isLoading && (
          <div
            className="w-full bg-[#072660] p-4 animate-slide-up"
            style={{ boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)" }}
          >
            {/* 폼 내부 내용 (헤더 텍스트 등) */}
            <div className="w-full flex flex-col text-white text-[16px] items-center justify-center py-10 gap-6">
              <div className="text-center">
                <div>회생/파산은 채무를 정리하고</div>
                <div>
                  다시 시작할 수 있는{" "}
                  <span className="font-semibold">두번째 기회</span>입니다.
                </div>
              </div>
              <div className="text-center text-[18px] font-semibold">
                <div>상담 후 선임하지 않으셔도 괜찮습니다</div>
                <div>전문 변호사와 확실하게 진단해보세요.</div>
              </div>
              <div className="text-white text-sm text-center px-5 blink-text">
                번호 오류시 상담이 어려울 수 있으니, 입력하신 정보 한번 더 확인
                부탁드리겠습니다.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex items-center bg-[#395180] rounded-xl p-2">
                <label className="w-30 text-white text-lg font-semibold">
                  이름
                </label>
                <input
                  placeholder="이름 입력"
                  className="w-full h-[40px] bg-transparent border-0 text-lg text-white focus:border-0 focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              {/* 연락처 입력 필드 */}
              <div className="flex items-center bg-[#395180] rounded-xl p-2">
                <label className="w-30 text-white text-lg font-semibold">
                  연락처
                </label>
                <input
                  placeholder="연락처 입력"
                  className="w-full h-[40px] bg-transparent border-0 text-lg text-white focus:border-0 focus:outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              {/* 상담분야 선택 필드 */}
              <div className="flex items-center bg-[#395180] rounded-xl p-2">
                <label className="w-30 text-white text-lg font-semibold">
                  상담분야
                </label>
                <select
                  className="w-full h-[40px] bg-transparent border-0 text-lg text-white focus:border-0 focus:outline-none"
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                  required
                >
                  <option className="text-white bg-[#395180]" value="">
                    (선택)
                  </option>
                  <option className="text-white bg-[#395180]" value="법인회생">
                    법인회생
                  </option>
                  <option className="text-white bg-[#395180]" value="법인파산">
                    법인파산
                  </option>
                </select>
              </div>
              {/* 제출/닫기 버튼 */}
              <div className="flex gap-2">
                <button
                  type="submit" // 이 버튼을 누르면 handleSubmit이 실행됨
                  className="w-1/2 h-[50px] bg-[#397BF4] text-lg font-semibold text-white rounded-xl"
                  disabled={isLoading || showConfirmationModal} // 로딩 중이거나 모달이 열려있으면 버튼 비활성화
                >
                  {isLoading ? "제출 중..." : "제출"}{" "}
                  {/* 로딩 중 텍스트 변경 */}
                </button>
                <button
                  type="button"
                  className="w-1/2 h-[50px] bg-gray-600 text-lg font-semibold text-white rounded-xl"
                  onClick={() => setIsFormOpen(false)} // 닫기 버튼
                  disabled={isLoading || showConfirmationModal} // 로딩 중이거나 모달이 열려있으면 버튼 비활성화
                >
                  닫기
                </button>
              </div>
            </form>
          </div>
        )}
      </footer>

      {/* **확인 모달** */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-[1000]">
          <div className="w-[400px] h-[240px] bg-white p-6 rounded-lg shadow-xl max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              입력 정보 확인
            </h2>

            <div className="mt-10">
              <p className="mb-1 text-gray-700">
                <strong>성함:</strong> {name}
              </p>
              <p className="mb-4 text-gray-700">
                <strong>연락처:</strong> {phone}
              </p>
            </div>
            <div className="flex justify-around gap-4 my-10">
              <button
                onClick={confirmAndSubmit} // 확인 버튼 클릭 시 실제 제출 함수 호출
                className="w-[165px] bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                disabled={isLoading} // 제출 처리 중에는 확인 버튼 비활성화
              >
                {isLoading ? "확인 중..." : "확인"}
              </button>
              <button
                onClick={cancelConfirmation} // 취소 버튼 클릭 시 모달 닫기 함수 호출
                className="w-[165px] bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
                disabled={isLoading} // 제출 처리 중에는 취소 버튼 비활성화
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMb from "../components/FooterMb";
import TelBtn from "../components/Telbtn";
import Script from "next/script";

// variable 대신 기본 className 사용
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "법무법인 스탠다드 정경현 대표변호사",
  description: "오직 법인회생 법인파산 사건만 처리한 전문 변호사입니다.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* BORAWARE LOG SCRIPT */}
        <Script
          id="boraware-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `var protect_id = 'i116';`,
          }}
        />
        <Script
          src="//script.boraware.kr/protect_script_v2.js"
          strategy="beforeInteractive"
          async
        />
        {/* END OF BORAWARE LOG SCRIPT */}
      </head>
      <body className={`${notoSansKR.className} antialiased`}>
        <Header />
        {children}
        <TelBtn />
        <Footer />
        <FooterMb />
      </body>
    </html>
  );
}

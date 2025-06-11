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
        {/* Facebook Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2438649306499850');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2438649306499850&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel Code */}

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
        <meta
          name="naver-site-verification"
          content="1ab552d0abb9c39d631342beef77f990c16cdbbe"
        />
        {/* 요청하신 페이스북 도메인 인증 코드 */}
        <meta
          name="facebook-domain-verification"
          content="e0seuijyha6mqjl7qp5dinsdr0p9i7"
        />
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

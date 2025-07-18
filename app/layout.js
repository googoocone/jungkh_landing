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
  title: "법무법인 스탠다드 정경현 대표변호사 법인회생, 법인파산 전문",
  description: "오직 법인회생 법인파산 사건만 처리한 전문 변호사입니다.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  // GTM ID를 변수로 관리하면 편리합니다. (추후 .env.local 파일로 옮기는 것을 권장)
  const gtmId = "GTM-PVLTFSQD";

  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code (New) */}
        <Script
          id="meta-pixel"
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
            fbq('init', '1386277535976961');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1386277535976961&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

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
        <meta
          name="facebook-domain-verification"
          content="e0seuijyha6mqjl7qp5dinsdr0p9i7"
        />
      </head>
      <body className={`${notoSansKR.className} antialiased`}>
        {/* Google Tag Manager (noscript) - body 태그 바로 아래에 추가 */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        {children}
        <TelBtn />
        <Footer />
        <FooterMb />

        {/* Google Tag Manager - body 태그가 닫히기 직전에 추가 */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </body>
    </html>
  );
}

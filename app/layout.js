import "./globals.css";

export const metadata = {
  title: "김하림 | Frontend Developer",
  description: "김하림 프론트엔드 개발자 경력기술서"
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="ko">
      <body className="m-0 bg-[#0b0d12] font-[-apple-system,BlinkMacSystemFont,'Pretendard','Noto_Sans_KR','Apple_SD_Gothic_Neo',sans-serif] text-[#f5f6f8] antialiased print:bg-white print:text-[#101217] print:[-webkit-print-color-adjust:exact] print:[print-color-adjust:exact]">{children}</body>
    </html>
  );
}

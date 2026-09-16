import "./globals.css";

export const metadata = {
  title: "김하림 | Frontend Developer",
  description: "김하림 프론트엔드 개발자 경력기술서"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

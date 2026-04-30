import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "성태경 | Frontend Developer",
  description:
    "복잡한 화면을 이해하기 쉬운 경험으로 만드는 프론트엔드 개발자 성태경의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

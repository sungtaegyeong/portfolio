import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "성태경 | Frontend Developer",
  description:
    "복잡한 화면을 이해하기 쉬운 경험으로 만드는 프론트엔드 개발자 성태경의 포트폴리오입니다.",
  openGraph: {
    title: "성태경 | Frontend Developer",
    description:
      "복잡한 화면을 이해하기 쉬운 경험으로 만드는 프론트엔드 개발자 성태경의 포트폴리오입니다.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "성태경 프론트엔드 포트폴리오 미리보기 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "성태경 | Frontend Developer",
    description:
      "복잡한 화면을 이해하기 쉬운 경험으로 만드는 프론트엔드 개발자 성태경의 포트폴리오입니다.",
    images: ["/og-image.svg"],
  },
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

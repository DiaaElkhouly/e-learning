import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const arabic = localFont({
  src: "./fonts/Simplified-Arabic-Regular.ttf",
  subsets: ["arabic"],
  variable: "--regular",
  display: "swap",
  preload: true,
});

const arabicBold = localFont({
  src: "./fonts/Simplified-Arabic-Bold.ttf",
  subsets: ["arabic"],
  variable: "--bold",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "منصة التميز - منصة التعلم الإلكتروني ",
  description:
    "منصة تعليمية شاملة للطلاب في المرحلة الثانوية مع محاضرات واختبارات تفاعلية",
  keywords: ["education", "learning", "school", "egypt", "secondary"],
  authors: [{ name: "منصة التميز" }],
  openGraph: {
    title: "منصة التميز - منصة التعلم الإلكتروني",
    description: "منصة تعليمية شاملة لطلاب المرحلة الثانوية",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth">
      <body
        className={`${arabic.variable} ${arabicBold.variable} antialiased min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const arabic = localFont({
  src: "./fonts/Simplified-Arabic-Regular.ttf",
  subsets: ["arabic"],
  variable: "--regular",
});

const arabicBold = localFont({
  src: "./fonts/Simplified-Arabic-Bold.ttf",
  subsets: ["arabic"],
  variable: "--bold",
});

export const metadata = {
  title: "منصة التميز - منصة التعلم الإلكتروني ",
  description:
    "منصة تعليمية شاملة للطلاب في المرحلة الثانوية مع محاضرات واختبارات تفاعلية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${arabic.variable} antialiased min-h-screen`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}

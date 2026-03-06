"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "f",
      href: "https://www.facebook.com/diaa.elkhouly.3",
      color: "bg-blue-600",
    },
    {
      name: "Instagram",
      icon: "IG",
      href: "https://www.instagram.com/diaaelkhouly/",
      color: "bg-pink-600",
    },
    {
      name: "LinkedIn",
      icon: "in",
      href: "https://www.linkedin.com/in/diaa-elkhouly-42abb4339/",
      color: "bg-blue-700",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">منصة التميز</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              منصة تعليمية متميزة تساعد الطلاب على تحقيق احلامهم الاكاديمية من
              خلال محتوى تعليمي متطور وطرق تفاعلية مبتكرة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/class"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  الصفوف الدراسية
                </Link>
              </li>
              <li>
                <Link
                  href="/material"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  المواد والمحاضرات
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  الاختبارات
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  لوحة الادارة
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">تواصل معنا</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">e:</span>
                <span>info@excellence.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">p:</span>
                <span>+20 120 144 9924</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">l:</span>
                <span>القاهرة, مصر</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 منصة التميز. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>صمم بكل</span>
              <span className="text-red-500">❤</span>
              <span>بواسطة</span>
              <span className="text-blue-400 font-semibold">Diaa Elkhouly</span>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">تابعنا:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${social.color} w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm hover:scale-110 transition-transform`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

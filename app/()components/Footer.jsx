import React from "react";
import Link from "next/link";
// icons
import SchoolIcon from "@mui/icons-material/School";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <SchoolIcon className="text-3xl text-blue-400" />
              <h3 className="text-2xl font-bold">منصة التميز</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              منصة تعليمية متميزة تساعد الطلاب على تحقيق أحلامهم الأكاديمية من
              خلال محتوى تعليمي متطور وطرق تفاعلية مبتكرة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  الصفحة الرئيسية
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
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 info@excellence-center.com</li>
              <li>📞 +20 120 144 9924</li>
              <li>📍 القاهرة, مصر</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 منصة التميز. جميع الحقوق محفوظة. صنع بـ ❤️ لخدمة التعليم
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

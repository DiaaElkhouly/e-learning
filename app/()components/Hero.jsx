"use client";
import React from "react";
import Link from "next/link";

import SchoolIcon from "@mui/icons-material/School";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block mb-6">
            <SchoolIcon className="text-6xl text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 flex justify-center gap-2">
            مرحباً بك فى
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              منصة التميز
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            منصة تعليمية شاملة لطلاب المرحلة الثانوية، نقدم لك أفضل الطرق لفهم
            المواد الدراسية من خلال محاضرات تفاعلية وتمارين متنوعة تساعدك على
            النجاح الأكاديمي.
          </p>
          <div>
            <Link href="#grades">
              <button className="btn-primary text-xl px-8 py-4 shadow-lg">
                ابدأ التعلم الآن
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <div className="text-6xl">📚</div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <div className="text-6xl">🎓</div>
      </div>
    </section>
  );
};

export default Hero;

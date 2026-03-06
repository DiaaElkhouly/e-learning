"use client";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium text-gray-600">
              منصة تعليمية رائدة
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            مرحباً بك في
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              منصة التميز
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            اكتشف تجربة تعليمية فريدة. نقدم لك محتوى تعليمي متميز, ومحاضرات
            تفاعلية, واختبارات ذكية帮助你 على التفوق في مرحلتك الثانوية.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#grades">
              <button className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                ابدأ رحلتك التعليمية
              </button>
            </Link>
            <Link href="/class">
              <button className="btn-secondary text-lg px-8 py-4 hover:bg-blue-50 transition-all duration-300">
                استكشف الصفوف
              </button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-500">طالب مسجل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-500">مادة دراسية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-500">محاضرة فيديو</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

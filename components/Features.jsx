"use client";
import React from "react";
import { PlayCircleIcon, BookIcon, QuizIcon } from "@/components/icons";

const Features = () => {
  const features = [
    {
      icon: <PlayCircleIcon className="w-12 h-12 text-red-500" />,
      iconBg: "bg-red-100",
      title: "محاضرات فيديو تفاعلية",
      description: "محاضرات مصورة بجودة عالية مع شرح مبسط وأمثلة عملية",
    },
    {
      icon: <BookIcon className="w-12 h-12 text-blue-500" />,
      iconBg: "bg-blue-100",
      title: "مواد دراسية شاملة",
      description: "ملفات PDF وملخصات شاملة لجميع المواد الدراسية",
    },
    {
      icon: <QuizIcon className="w-12 h-12 text-green-500" />,
      iconBg: "bg-green-100",
      title: "اختبارات تفاعلية",
      description: "تمارين واختبارات متنوعة لقياس مستوى الفهم والتقدم",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            مميزات <span className="text-gradient">منصتنا</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم لك تجربة تعليمية متكاملة تجمع بين التقنية الحديثة والجودة
            التعليمية
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 text-center group hover:border-blue-200"
            >
              {/* Icon Container */}
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${feature.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-6">
                <span className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer transition-colors">
                  اعرف المزيد
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

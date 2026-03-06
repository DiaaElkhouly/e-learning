"use client";
import React from "react";
import {
  PeopleIcon,
  PlayCircleIcon,
  StarIcon,
  CheckCircleIcon,
} from "@/components/icons";

const Stats = () => {
  const stats = [
    {
      number: "500+",
      label: "طالب مسجل",
      icon: <PeopleIcon className="w-8 h-8" />,
      color: "bg-white/20",
    },
    {
      number: "50+",
      label: "محاضرة متاحة",
      icon: <PlayCircleIcon className="w-8 h-8" />,
      color: "bg-white/20",
    },
    {
      number: "4.8",
      label: "تقييم المنصة",
      icon: <StarIcon className="w-8 h-8" />,
      color: "bg-white/20",
    },
    {
      number: "100%",
      label: "نسبة النجاح",
      icon: <CheckCircleIcon className="w-8 h-8" />,
      color: "bg-white/20",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`${stat.color} p-4 rounded-xl backdrop-blur-sm`}
                >
                  <div className="text-white text-2xl">{stat.icon}</div>
                </div>
              </div>

              {/* Number */}
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-lg text-white/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

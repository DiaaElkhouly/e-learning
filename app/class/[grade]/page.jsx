"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BookIcon, QuizIcon, ArrowBackIcon } from "@/components/icons";

// Memoized SubjectCard with React.memo for performance
const SubjectCard = React.memo(function SubjectCard({ subject, grade }) {
  return (
    <div
      className={`card p-6 border-2 ${subject.borderColor} hover:shadow-xl group`}
    >
      <div
        className={`flex items-center justify-between mb-4 p-3 rounded-lg ${subject.bgColor}`}
      >
        <h2 className="text-xl font-bold text-gray-800">{subject.name}</h2>
        <span className="text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
          {subject.icon}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href={`/material?subject=${encodeURIComponent(subject.name)}&grade=${grade}`}
          className="btn-primary w-full text-base font-semibold py-3 flex items-center justify-center gap-2 group-hover:shadow-lg text-center"
        >
          <BookIcon className="w-5 h-5" />
          المحاضرات والمواد
        </Link>
        <Link
          href={`/quiz?subject=${encodeURIComponent(subject.name)}&grade=${grade}`}
          className="btn-secondary w-full text-base font-semibold py-3 flex items-center justify-center gap-2 border-2 border-green-200 text-green-700 hover:bg-green-600 hover:text-white hover:border-green-600 text-center"
        >
          <QuizIcon className="w-5 h-5" />
          الاختبارات والتمارين
        </Link>
      </div>
    </div>
  );
});

// Static data moved outside component
const subjectsData = {
  1: [
    {
      name: "اللغة العربية",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: "📖",
    },
    {
      name: "اللغة الإنجليزية",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: "🌍",
    },
    {
      name: "الرياضيات",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: "🔢",
    },
    {
      name: "الفيزياء",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      icon: "⚡",
    },
    {
      name: "الكيمياء",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      icon: "🧪",
    },
    {
      name: "الأحياء",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      icon: "🧬",
    },
    {
      name: "التاريخ",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      icon: "🏛️",
    },
    {
      name: "الجغرافيا",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      icon: "🗺️",
    },
    {
      name: "الفلسفة والمنطق",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      icon: "💭",
    },
  ],
  2: [
    {
      name: "اللغة العربية",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: "📖",
    },
    {
      name: "اللغة الإنجليزية",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: "🌍",
    },
    {
      name: "الرياضيات",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: "🔢",
    },
    {
      name: "الفيزياء",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      icon: "⚡",
    },
    {
      name: "الكيمياء",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      icon: "🧪",
    },
    {
      name: "الأحياء",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      icon: "🧬",
    },
    {
      name: "التاريخ",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      icon: "🏛️",
    },
  ],
  3: [
    {
      name: "اللغة العربية",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: "📖",
    },
    {
      name: "اللغة الإنجليزية",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: "🌍",
    },
    {
      name: "الرياضيات",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: "🔢",
    },
    {
      name: "الفيزياء",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      icon: "⚡",
    },
    {
      name: "الكيمياء",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      icon: "🧪",
    },
    {
      name: "الأحياء",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      icon: "🧬",
    },
    {
      name: "التاريخ",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      icon: "🏛️",
    },
  ],
};

const gradeNames = {
  1: "الصف الأول الثانوي",
  2: "الصف الثاني الثانوي",
  3: "الصف الثالث الثانوي",
};

const Page = () => {
  const { grade } = useParams();
  const subjects = subjectsData[grade] || [];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <Link
            href="/class"
            className="btn-secondary mb-6 inline-flex items-center gap-2"
          >
            <ArrowBackIcon className="w-5 h-5" />
            العودة للصفوف
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            المواد الدراسية
          </h1>
          <p className="text-xl text-gray-500">{gradeNames[grade]}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} grade={grade} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
            <span className="text-sm text-gray-600">تم عرض</span>
            <span className="font-bold text-blue-600">{subjects.length}</span>
            <span className="text-sm text-gray-600">
              من أصل {subjects.length} مادة
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

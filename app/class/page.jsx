"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import BookIcon from "@mui/icons-material/Book";
import QuizIcon from "@mui/icons-material/Quiz";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const subjectsData = {
  1: [
    {
      name: "اللغة العربية",
      icon: BookIcon,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      name: "اللغة الإنجليزية",
      icon: BookIcon,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "الرياضيات",
      icon: BookIcon,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      name: "الفيزياء",
      icon: BookIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      name: "الكيمياء",
      icon: BookIcon,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      name: "الأحياء",
      icon: BookIcon,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      name: "التاريخ",
      icon: BookIcon,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      name: "الجغرافيا",
      icon: BookIcon,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      name: "الفلسفة والمنطق",
      icon: BookIcon,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ],
  2: [
    {
      name: "اللغة العربية",
      icon: BookIcon,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      name: "اللغة الإنجليزية",
      icon: BookIcon,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "الرياضيات",
      icon: BookIcon,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      name: "الفيزياء",
      icon: BookIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      name: "الكيمياء",
      icon: BookIcon,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      name: "الأحياء",
      icon: BookIcon,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      name: "التاريخ",
      icon: BookIcon,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
  ],
  3: [
    {
      name: "اللغة العربية",
      icon: BookIcon,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      name: "اللغة الإنجليزية",
      icon: BookIcon,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "الرياضيات",
      icon: BookIcon,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      name: "الفيزياء",
      icon: BookIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      name: "الكيمياء",
      icon: BookIcon,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      name: "الأحياء",
      icon: BookIcon,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      name: "التاريخ",
      icon: BookIcon,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
  ],
};

function ClassPageWithParams() {
  const searchParams = useSearchParams();
  const grade = searchParams.get("grade");
  if (!grade) {
    const grades = [
      {
        title: "الصف الأول الثانوي",
        subjects: 9,
        lectures: 12,
        color: "from-blue-600 to-blue-800",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        icon: "🎓",
      },
      {
        title: "الصف الثاني الثانوي",
        subjects: 7,
        lectures: 11,
        color: "from-green-600 to-green-800",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        icon: "📚",
      },
      {
        title: "الصف الثالث الثانوي",
        subjects: 7,
        lectures: 15,
        color: "from-purple-600 to-purple-800",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        icon: "🏆",
      },
    ];

    return (
      <div className="min-h-screen pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="btn-secondary mb-6 inline-flex items-center gap-2">
              <Link href="/">
                <ArrowBackIcon />
                العودة للصفحة الرئيسية
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              الصفوف الدراسية
            </h1>
            <p className="text-xl text-gray-600">اختر الصف الذي تريد دراسته</p>
          </div>

          {/* Grades Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grades.map((grade, index) => (
              <div
                key={index}
                className={`card p-8 text-center relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 text-6xl opacity-10">
                  {grade.icon}
                </div>

                {/* Header */}
                <div
                  className={`bg-linear-to-r ${grade.color} text-white p-6 rounded-xl mb-6 relative`}
                >
                  <h3 className="text-2xl font-bold mb-2">{grade.title}</h3>
                  <div className="flex justify-center">
                    <BookIcon className="text-3xl" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div
                    className={`${grade.bgColor} p-4 rounded-lg border ${grade.borderColor}`}
                  >
                    <div className="text-3xl font-bold text-gray-800">
                      {grade.subjects}
                    </div>
                    <div className="text-sm text-gray-600">مادة دراسية</div>
                  </div>
                  <div
                    className={`${grade.bgColor} p-4 rounded-lg border ${grade.borderColor}`}
                  >
                    <div className="text-3xl font-bold text-gray-800">
                      {grade.lectures}
                    </div>
                    <div className="text-sm text-gray-600">محاضرة</div>
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  <Link
                    href={`/class/${index + 1}`}
                    className="btn-primary w-full text-lg font-semibold py-3 inline-block text-center"
                  >
                    دخول الصف
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const subjects = subjectsData[grade] || [];
  const gradeNames = {
    1: "الصف الأول الثانوي",
    2: "الصف الثاني الثانوي",
    3: "الصف الثالث الثانوي",
  };
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="btn-secondary mb-6 inline-flex items-center gap-2">
            <Link href="/">
              <ArrowBackIcon />
              العودة للصفحة الرئيسية
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-300 mb-2">
            المواد الدراسية
          </h1>
          <p className="text-xl text-gray-500">{gradeNames[grade]}</p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => {
            return (
              <div
                key={index}
                className={`card p-6 border-2 ${subject.borderColor} hover:shadow-xl group`}
              >
                <div
                  className={`flex items-center justify-between mb-4 p-3 rounded-lg ${subject.bgColor}`}
                >
                  <div className="flex items-center gap-3">
                    <div></div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {subject.name}
                    </h2>
                  </div>
                  <div className="text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                    📖
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <Link
                      href={`/material?subject=${encodeURIComponent(subject.name)}&grade=${grade}`}
                      className="btn-primary w-full text-base font-semibold py-3 flex items-center justify-center gap-2 group-hover:shadow-lg text-center"
                    >
                      <BookIcon fontSize="small" />
                      المحاضرات والمواد
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={`/quiz?subject=${encodeURIComponent(subject.name)}&grade=${grade}`}
                      className="btn-secondary w-full text-base font-semibold py-3 flex items-center justify-center gap-2 border-2 border-green-200 text-green-700 hover:bg-green-600 hover:text-white hover:border-green-600 text-center"
                    >
                      <QuizIcon fontSize="small" />
                      الاختبارات والتمارين
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
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
}

const Page = () => (
  <Suspense fallback={<div>جار التحميل...</div>}>
    <ClassPageWithParams />
  </Suspense>
);

export default Page;

"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { BookIcon, QuizIcon, ArrowBackIcon } from "@/components/icons";
import { getSubjectsByGrade } from "@/lib/data/subjects";
import { getGradeById } from "@/lib/data/grades";

// Subject Card Component
function SubjectCard({ subject, grade }) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border ${subject.borderColor} hover:shadow-xl transition-shadow duration-300`}
    >
      <div
        className={`flex items-center justify-between mb-4 p-3 rounded-lg ${subject.bgColor}`}
      >
        <div className="flex items-center gap-3">
          <div className="text-3xl">{subject.icon}</div>
          <h2 className="text-xl font-bold text-gray-800">{subject.name}</h2>
        </div>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{subject.description}</p>
      <div className="flex flex-col gap-3">
        <Link
          href={`/material?subject=${encodeURIComponent(subject.name)}&grade=${grade}`}
          className="btn-primary w-full text-base font-semibold py-3 flex items-center justify-center gap-2 text-center"
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
}

function ClassPageWithParams() {
  const searchParams = useSearchParams();
  const grade = searchParams.get("grade") || "1";
  const gradeId = parseInt(grade);
  const subjects = getSubjectsByGrade(gradeId);

  const gradeNames = {
    1: "الصف الأول الثانوي",
    2: "الصف الثاني الثانوي",
    3: "الصف الثالث الثانوي",
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Link
            href="/"
            className="btn-secondary mb-6 inline-flex items-center gap-2"
          >
            <ArrowBackIcon className="w-5 h-5" />
            العودة للرئيسية
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {gradeNames[gradeId] || "الصف الدراسي"}
          </h1>
          <p className="text-lg text-gray-600">اختر المادة التي تريد دراستها</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} grade={grade} />
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
}

const Page = () => (
  <Suspense
    fallback={
      <div className="min-h-screen pt-20 text-center">جار التحميل...</div>
    }
  >
    <ClassPageWithParams />
  </Suspense>
);

export default Page;

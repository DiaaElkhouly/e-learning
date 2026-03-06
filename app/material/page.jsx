"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import {
  PlayCircleIcon,
  PictureAsPdfIcon,
  DownloadIcon,
  ArrowBackIcon,
  AccessTimeIcon,
  DescriptionIcon,
} from "@/components/icons";

// Material Card Component
function MaterialCard({ material }) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border ${material.borderColor} hover:shadow-xl transition-shadow duration-300 group`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center ${material.bgColor}`}
          >
            {material.type === "video" ? (
              <PlayCircleIcon className={`${material.color} w-8 h-8`} />
            ) : (
              <PictureAsPdfIcon className={`${material.color} w-8 h-8`} />
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              {material.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              {material.type === "video" ? (
                <>
                  <AccessTimeIcon className="w-4 h-4" />
                  <span>{material.duration}</span>
                </>
              ) : (
                <>
                  <DescriptionIcon className="w-4 h-4" />
                  <span>{material.pages}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">
        {material.description}
      </p>
      <button
        className={`btn-primary w-full text-base font-semibold py-3 flex items-center justify-center gap-2 group-hover:shadow-lg ${material.type === "video" ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}`}
      >
        {material.type === "video" ? (
          <>
            <PlayCircleIcon className="w-5 h-5" />
            مشاهدة المحاضرة
          </>
        ) : (
          <>
            <DownloadIcon className="w-5 h-5" />
            تحميل الملف
          </>
        )}
      </button>
    </div>
  );
}

// Mock data for materials
const materials = [
  {
    id: 1,
    title: "المحاضرة الأولى - مقدمة",
    type: "video",
    duration: "45 دقيقة",
    description: "مقدمة شاملة للموضوع الأساسي مع شرح مفصل للمفاهيم الأساسية",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    id: 2,
    title: "المحاضرة الثانية - التفاصيل",
    type: "video",
    duration: "50 دقيقة",
    description: "شرح مفصل للنقاط الرئيسية والتطبيقات العملية",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    id: 3,
    title: "ملخص المحاضرات",
    type: "pdf",
    pages: "15 صفحة",
    description: "ملخص شامل لجميع المحاضرات مع النقاط الرئيسية والأمثلة",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 4,
    title: "أسئلة تدريبية",
    type: "pdf",
    pages: "10 صفحات",
    description: "أسئلة متنوعة للتدريب والمراجعة مع الإجابات المفصلة",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
];

const gradeNames = {
  1: "الصف الأول الثانوي",
  2: "الصف الثاني الثانوي",
  3: "الصف الثالث الثانوي",
};

function MaterialPageWithParams() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");
  const grade = searchParams.get("grade");

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Link
            href={`/class?grade=${grade}`}
            className="btn-secondary mb-6 inline-flex items-center gap-2"
          >
            <ArrowBackIcon className="w-5 h-5" />
            العودة للمواد
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {subject || "المواد التعليمية"}
          </h1>
          <p className="text-lg text-gray-600">
            {gradeNames[grade]} - المحتوى التعليمي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              إحصائيات المواد
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {materials.filter((m) => m.type === "video").length}
                </div>
                <div className="text-sm text-gray-600">محاضرة</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {materials.filter((m) => m.type === "pdf").length}
                </div>
                <div className="text-sm text-gray-600">ملف</div>
              </div>
            </div>
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
    <MaterialPageWithParams />
  </Suspense>
);

export default Page;

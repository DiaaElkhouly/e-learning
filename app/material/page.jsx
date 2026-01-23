"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
// icons
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DescriptionIcon from "@mui/icons-material/Description";

function MaterialPageWithParams() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");
  const grade = searchParams.get("grade");

  // Mock data for materials - in a real app, this would come from an API
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

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href={`/class?grade=${grade}`}>
            <button className="btn-secondary mb-6 inline-flex items-center gap-2">
              <ArrowBackIcon />
              العودة للمواد
            </button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            المحاضرات والمواد
          </h1>
          <p className="text-2xl font-semibold text-blue-600 mb-1">{subject}</p>
          <p className="text-lg text-gray-600">{gradeNames[grade]}</p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {materials.map((material, index) => (
            <div
              key={material.id}
              className={`card p-6 border-2 ${material.borderColor} hover:shadow-2xl group relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                {material.type === "video" ? "🎥" : "📄"}
              </div>

              {/* Header */}
              <div
                className={`flex items-start justify-between mb-4 p-4 rounded-xl ${material.bgColor} relative`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="shrink-0">
                    {material.type === "video" ? (
                      <PlayCircleIcon
                        className={`text-4xl ${material.color}`}
                      />
                    ) : (
                      <PictureAsPdfIcon
                        className={`text-4xl ${material.color}`}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-gray-800 mb-1 leading-tight">
                      {material.title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      {material.type === "video" ? (
                        <>
                          <AccessTimeIcon fontSize="small" />
                          <span>{material.duration}</span>
                        </>
                      ) : (
                        <>
                          <DescriptionIcon fontSize="small" />
                          <span>{material.pages}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {material.type === "video" ? "🎬" : "📚"}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {material.description}
              </p>

              {/* Action Button */}
              <button
                className={`btn-primary w-full text-base font-semibold py-3 flex items-center justify-center gap-2 group-hover:shadow-lg ${
                  material.type === "video"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {material.type === "video" ? (
                  <>
                    <PlayCircleIcon fontSize="small" />
                    مشاهدة المحاضرة
                  </>
                ) : (
                  <>
                    <DownloadIcon fontSize="small" />
                    تحميل الملف
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
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
  <Suspense fallback={<div>جار التحميل...</div>}>
    <MaterialPageWithParams />
  </Suspense>
);

export default Page;

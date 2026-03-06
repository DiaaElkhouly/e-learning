import Link from "next/link";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import { grades } from "@/lib/data/grades";
import { BookIcon } from "@/components/icons";

// Server Component for better performance
export default function Home() {
  return (
    <div>
      <main className="relative">
        <div className="min-h-screen">
          {/* Hero Section */}
          <Hero />
          {/* Features Section */}
          <Features />
          {/* Stats Section */}
          <Stats />
          {/* Grades Section */}
          <section id="grades" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  اختر صفك الدراسي
                </h2>
                <p className="text-lg text-gray-600">
                  ابدأ رحلتك التعليمية مع المحتوى المناسب لمستواك
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {grades.map((grade) => (
                  <div
                    key={grade.id}
                    className="card p-8 text-center relative overflow-hidden"
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 text-6xl opacity-10">
                      {grade.icon}
                    </div>

                    {/* Header */}
                    <div
                      className={`bg-gradient-to-r ${grade.color} text-white p-6 rounded-xl mb-6 relative`}
                    >
                      <h3 className="text-2xl font-bold mb-2">{grade.title}</h3>
                      <div className="flex justify-center">
                        <BookIcon className="w-8 h-8" />
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
                        href={`/class?grade=${grade.id}`}
                        className="btn-primary w-full text-lg font-semibold py-3 inline-block text-center"
                      >
                        دخول الصف
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

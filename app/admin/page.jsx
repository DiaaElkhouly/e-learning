"use client";
import React from "react";
import Link from "next/link";
import {
  SchoolIcon,
  BookIcon,
  VideoLibraryIcon,
  QuizIcon,
  PeopleIcon,
  TrendingUpIcon,
  ArrowForwardIcon,
} from "@/components/icons";

const stats = [
  {
    label: "الصفوف الدراسية",
    value: "3",
    icon: SchoolIcon,
    color: "from-blue-500 to-blue-700",
    href: "/admin/grades",
  },
  {
    label: "المواد الدراسية",
    value: "23",
    icon: BookIcon,
    color: "from-green-500 to-green-700",
    href: "/admin/subjects",
  },
  {
    label: "المحاضرات",
    value: "38",
    icon: VideoLibraryIcon,
    color: "from-purple-500 to-purple-700",
    href: "/admin/materials",
  },
  {
    label: "الاختبارات",
    value: "15",
    icon: QuizIcon,
    color: "from-orange-500 to-orange-700",
    href: "/admin/quizzes",
  },
];

const quickActions = [
  { label: "إضافة صف دراسي", href: "/admin/grades", icon: SchoolIcon },
  { label: "إضافة مادة", href: "/admin/subjects", icon: BookIcon },
  { label: "رفع محاضرة", href: "/admin/materials", icon: VideoLibraryIcon },
  { label: "إنشاء اختبار", href: "/admin/quizzes", icon: QuizIcon },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">مرحباً بك في لوحة التحكم</h1>
        <p className="text-blue-100">إدارة منصتك التعليمية بسهولة</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Link
              key={index}
              href={stat.href}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-blue-600">
                <span>عرض التفاصيل</span>
                <ArrowForwardIcon className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">إجراءات سريعة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link
                key={index}
                href={action.href}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-blue-700">
                  {action.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">النشاط الأخير</h2>
        <div className="space-y-4">
          {[
            {
              action: "تم إضافة محاضرة جديدة",
              time: "منذ ساعة",
              type: "material",
            },
            {
              action: "تم إنشاء اختبار جديد",
              time: "منذ 3 ساعات",
              type: "quiz",
            },
            {
              action: "تم تحديث معلومات الصف الأول",
              time: "أمس",
              type: "grade",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-gray-700">{activity.action}</span>
              </div>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DashboardIcon,
  SchoolIcon,
  BookIcon,
  QuizIcon,
  VideoLibraryIcon,
  LogoutIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/icons";

const adminNavItems = [
  { href: "/admin", label: "لوحة التحكم", icon: DashboardIcon },
  { href: "/admin/grades", label: "الصفوف الدراسية", icon: SchoolIcon },
  { href: "/admin/subjects", label: "المواد الدراسية", icon: BookIcon },
  {
    href: "/admin/materials",
    label: "المواد التعليمية",
    icon: VideoLibraryIcon,
  },
  { href: "/admin/quizzes", label: "الاختبارات", icon: QuizIcon },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
         mt-17 fixed lg:static inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold">
                م
              </div>
              <span className="text-xl font-bold text-gray-800">
                منصة التميز
              </span>
            </Link>
            <p className="text-xs text-gray-500 mt-2">لوحة تحكم المشرف</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {adminNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href));
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-100">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all"
            >
              <LogoutIcon className="w-6 h-6" />
              <span className="font-medium">العودة للمنصة</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white shadow-sm p-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          <span className="font-bold text-gray-800">لوحة تحكم المشرف</span>
          <div className="w-8" />
        </header>

        {/* Page Content */}
        <div className="mt-17 p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}

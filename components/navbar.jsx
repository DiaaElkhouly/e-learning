"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  NotificationsIcon,
  SchoolIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/icons";

// Simple Avatar Component
const Avatar = ({ alt, src, className = "" }) => (
  <div
    className={`w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold ${className}`}
  >
    {alt ? alt[0] : "ع"}
  </div>
);

// Simple Badge Component
const Badge = ({ children, color = "error", className = "" }) => {
  const colors = {
    error: "bg-red-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
  };
  return (
    <span
      className={`absolute -top-1 -right-1 ${colors[color]} text-white text-xs w-5 h-5 rounded-full flex items-center justify-center ${className}`}
    >
      {children}
    </span>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { id: "1", title: "الرئيسية", path: "/" },
    { id: "2", title: "الصفوف", path: "/class" },
    { id: "3", title: "المواد", path: "/material" },
    { id: "4", title: "الاختبارات", path: "/quiz" },
    { id: "5", title: "لوحة الإدارة", path: "/admin", isAdmin: true },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full px-4 py-3 shadow-lg flex justify-between items-center transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200" : "bg-gradient-to-r from-blue-800 to-blue-900"}`}
      >
        <div className="flex items-center gap-2">
          <SchoolIcon
            className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? "text-blue-600" : "text-white"}`}
          />
          <div
            className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-gray-800" : "text-white"}`}
          >
            منصة التميز
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={`font-semibold text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${link.isAdmin ? (isScrolled ? "text-purple-600 hover:text-purple-700 hover:bg-purple-50" : "text-purple-300 hover:text-purple-200 hover:bg-purple-800") : isScrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:text-yellow-300 hover:bg-blue-700"}`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Badge>4</Badge>
            <NotificationsIcon
              className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${isScrolled ? "text-gray-600" : "text-white"}`}
            />
          </div>
          <Avatar alt="م" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-gray-600" : "text-white"}`}
          >
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 md:hidden">
            <div className="px-4 py-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${link.isAdmin ? "text-purple-600 hover:bg-purple-50" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"}`}
                >
                  <span className="font-medium">{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

"use client";
import { useState, useEffect } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SchoolIcon from "@mui/icons-material/School";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { id: "1", title: "الرئيسية", path: "" },
    { id: "2", title: "الصفوف", path: "class" },
    { id: "3", title: "المواد", path: "material" },
    { id: "4", title: "الاختبارات", path: "quiz" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 py-3 shadow-lg flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200"
          : "bg-gradient-to-r from-blue-800 to-blue-900"
      }`}
      dir="rtl"
    >
      <motion.div
        className="flex items-center space-x-2 space-x-reverse"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <SchoolIcon
          className={`text-3xl transition-colors duration-300 ${isScrolled ? "text-blue-600" : "text-white"}`}
        />
        <div
          className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-gray-800" : "text-white"}`}
        >
          منصة التميز
        </div>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 space-x-reverse">
        {links.map((link, index) => {
          return (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/${link.path}`}
                className={`font-semibold text-lg px-4 py-2 rounded-lg flex items-center space-x-2 space-x-reverse transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white hover:text-yellow-300 hover:bg-blue-700 hover:shadow-md"
                }`}
              >
                <span>{link.title}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-3">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon
              className={`cursor-pointer transition-colors duration-300 ${isScrolled ? "text-gray-600" : "text-white"}`}
            />
          </Badge>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Avatar
            alt="User Avatar"
            src=""
            className="cursor-pointer ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300"
          />
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div className="md:hidden" whileTap={{ scale: 0.95 }}>
          <IconButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors duration-300 ${isScrolled ? "text-gray-600" : "text-white"}`}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 md:hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((link, index) => {
                return (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={`/${link.path}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 space-x-reverse text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-300"
                    >
                      <span className="font-medium">{link.title}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

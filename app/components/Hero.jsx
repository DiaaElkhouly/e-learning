"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

import SchoolIcon from "@mui/icons-material/School";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-6"
          >
            <SchoolIcon className="text-6xl text-blue-600" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            مرحباً بك في{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              منصة التميز
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            منصة تعليمية شاملة لطلاب المرحلة الثانوية، نقدم لك أفضل الطرق لفهم
            المواد الدراسية من خلال محاضرات تفاعلية وتمارين متنوعة تساعدك على
            النجاح الأكاديمي.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#grades">
              <button className="btn-primary text-xl px-8 py-4 shadow-lg">
                ابدأ التعلم الآن
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-6xl"
        >
          📚
        </motion.div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="text-6xl"
        >
          🎓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

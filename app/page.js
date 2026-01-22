"use client";
import { AnimatePresence, motion } from "motion/react";
import BookIcon from "@mui/icons-material/Book";
import Link from "next/link";

// components
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";

export default function Home() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="relative"
      >
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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  اختر صفك الدراسي
                </h2>
                <p className="text-lg text-gray-600">
                  ابدأ رحلتك التعليمية مع المحتوى المناسب لمستواك
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {grades.map((grade, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={`card p-8 text-center relative overflow-hidden`}
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
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link href={`/class?grade=${index + 1}`}>
                        <button className="btn-primary w-full text-lg font-semibold py-3">
                          دخول الصف
                        </button>
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </motion.main>
    </AnimatePresence>
  );
}

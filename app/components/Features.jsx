"use client";
import React from "react";
import { motion } from "motion/react";
// icons
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import BookIcon from "@mui/icons-material/Book";
import QuizIcon from "@mui/icons-material/Quiz";

const Features = () => {
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

  const data = [
    {
      icon: <PlayCircleIcon className="text-4xl text-red-600" />,
      title: "محاضرات فيديو تفاعلية",
      description: "محاضرات مصورة بجودة عالية مع شرح مبسط وأمثلة عملية",
    },
    {
      icon: <BookIcon className="text-4xl text-blue-600" />,
      title: "مواد دراسية شاملة",
      description: "ملفات PDF وملخصات شاملة لجميع المواد الدراسية",
    },
    {
      icon: <QuizIcon className="text-4xl text-green-600" />,
      title: "اختبارات تفاعلية",
      description: "تمارين واختبارات متنوعة لقياس مستوى الفهم والتقدم",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            مميزات المنصة
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم لك تجربة تعليمية متكاملة تجمع بين الجودة والتفاعل
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {data.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card text-center p-8"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

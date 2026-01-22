import React from "react";
import { motion } from "motion/react";
// icons
import PeopleIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Stats = () => {
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

  const stats = [
    { number: "500+", label: "طالب مسجل", icon: <PeopleIcon /> },
    { number: "50+", label: "محاضرة متاحة", icon: <PlayCircleIcon /> },
    { number: "4.8", label: "تقييم المنصة", icon: <StarIcon /> },
    { number: "24/7", label: "متاح دائماً", icon: <AccessTimeIcon /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-3">
                <div className="text-3xl">{stat.icon}</div>
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

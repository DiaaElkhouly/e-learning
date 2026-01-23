import React from "react";
// icons
import PeopleIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Stats = () => {

  const stats = [
    { number: "500+", label: "طالب مسجل", icon: <PeopleIcon /> },
    { number: "50+", label: "محاضرة متاحة", icon: <PlayCircleIcon /> },
    { number: "4.8", label: "تقييم المنصة", icon: <StarIcon /> },
    { number: "24/7", label: "متاح دائماً", icon: <AccessTimeIcon /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-3">
                <div className="text-3xl">{stat.icon}</div>
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

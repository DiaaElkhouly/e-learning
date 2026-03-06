// Centralized grades data
export const grades = [
  {
    id: 1,
    title: "الصف الأول الثانوي",
    subjects: 9,
    lectures: 12,
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: "🎓",
    description: "السنة الأولى من المرحلة الثانوية",
  },
  {
    id: 2,
    title: "الصف الثاني الثانوي",
    subjects: 7,
    lectures: 11,
    color: "from-green-600 to-green-800",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: "📚",
    description: "السنة الثانية من المرحلة الثانوية",
  },
  {
    id: 3,
    title: "الصف الثالث الثانوي",
    subjects: 7,
    lectures: 15,
    color: "from-purple-600 to-purple-800",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    icon: "🏆",
    description: "السنة الأخيرة من المرحلة الثانوية",
  },
];

export const getGradeById = (id) => grades.find((g) => g.id === parseInt(id));

export const getGradeName = (id) => {
  const grade = getGradeById(id);
  return grade ? grade.title : "";
};

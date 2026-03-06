"use client";
import React, { useState } from "react";
import { AddIcon, EditIcon, DeleteIcon, BookIcon } from "@/components/icons";
import { subjects } from "@/lib/data/subjects";

// Simple Button Component
const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-all";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger: "bg-red-100 text-red-600 hover:bg-red-200",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Simple Input Component
const Input = ({ label, value, onChange, placeholder, required }) => (
  <div>
    {label && (
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
    )}
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

// Simple Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl p-6 w-full mx-4 max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default function AdminSubjectsPage() {
  const [selectedGrade, setSelectedGrade] = useState(1);
  const [subjectsData, setSubjectsData] = useState(subjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSubject, setEditingSubject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    nameEn: "",
    description: "",
    icon: "📖",
  });

  const currentSubjects = subjectsData[selectedGrade] || [];

  const handleAdd = () => {
    setEditingSubject(null);
    setFormData({ name: "", nameEn: "", description: "", icon: "📖" });
    setIsModalOpen(true);
  };

  const handleEdit = (subject) => {
    setEditingSubject(subject);
    setFormData({
      name: subject.name,
      nameEn: subject.nameEn || "",
      description: subject.description || "",
      icon: subject.icon,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm("هل أنت متأكد من حذف هذه المادة؟")) {
      setSubjectsData({
        ...subjectsData,
        [selectedGrade]: currentSubjects.filter((s) => s.id !== id),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingSubject) {
      setSubjectsData({
        ...subjectsData,
        [selectedGrade]: currentSubjects.map((s) =>
          s.id === editingSubject.id ? { ...s, ...formData } : s,
        ),
      });
    } else {
      const newSubject = {
        id: Math.max(...currentSubjects.map((s) => s.id), 0) + 1,
        ...formData,
        color: "text-gray-600",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
      };
      setSubjectsData({
        ...subjectsData,
        [selectedGrade]: [...currentSubjects, newSubject],
      });
    }
    setIsModalOpen(false);
  };

  const icons = [
    "📖",
    "🌍",
    "🔢",
    "⚡",
    "🧪",
    "🧬",
    "🏛️",
    "🗺️",
    "💭",
    "🎨",
    "🎵",
    "💻",
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">المواد الدراسية</h1>
          <p className="text-gray-500 mt-1">إدارة المواد الدراسية في المنصة</p>
        </div>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <AddIcon className="w-5 h-5" />
          إضافة مادة دراسية
        </Button>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          اختر الصف الدراسي
        </label>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3].map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                selectedGrade === grade
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              الصف {grade}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSubjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl">
                  {subject.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-500">{subject.nameEn}</p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">{subject.description}</p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleEdit(subject)}
                className="flex-1"
              >
                <EditIcon className="w-4 h-4 ml-1" />
                تعديل
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(subject.id)}
              >
                <DeleteIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {currentSubjects.length === 0 && (
        <div className="text-center py-12">
          <BookIcon className="text-gray-300 w-16 h-16 mx-auto mb-4" />
          <p className="text-gray-500">لا توجد مواد دراسية لهذا الصف</p>
          <Button onClick={handleAdd} className="mt-4">
            <AddIcon className="w-5 h-5 ml-2" />
            إضافة مادة دراسية
          </Button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingSubject ? "تعديل مادة دراسية" : "إضافة مادة دراسية"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="اسم المادة بالعربية"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="اللغة العربية"
            required
          />
          <Input
            label="اسم المادة بالإنجليزية"
            value={formData.nameEn}
            onChange={(e) =>
              setFormData({ ...formData, nameEn: e.target.value })
            }
            placeholder="Arabic"
          />
          <Input
            label="الوصف"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="وصف المادة الدراسية"
          />
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              الأيقونة
            </label>
            <div className="flex flex-wrap gap-2">
              {icons.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => setFormData({ ...formData, icon })}
                  className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-2xl ${formData.icon === icon ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 pt-4">
            <Button type="submit" className="flex-1">
              {editingSubject ? "حفظ التغييرات" : "إضافة المادة"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              إلغاء
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

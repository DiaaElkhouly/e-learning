"use client";
import React, { useState } from "react";
import { AddIcon, EditIcon, DeleteIcon, SchoolIcon } from "@/components/icons";
import { grades } from "@/lib/data/grades";

// Simple Button Component (no MUI)
const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger: "bg-red-100 text-red-600 hover:bg-red-200",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Simple Input Component
const Input = ({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}) => (
  <div>
    {label && (
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
    )}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
    />
  </div>
);

// Simple Modal Component
const Modal = ({ isOpen, onClose, title, children, size = "md" }) => {
  if (!isOpen) return null;
  const sizes = { sm: "max-w-md", md: "max-w-lg", lg: "max-w-2xl" };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`relative bg-white rounded-2xl p-6 w-full mx-4 ${sizes[size]} max-h-[90vh] overflow-y-auto`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default function AdminGradesPage() {
  const [gradesData, setGradesData] = useState(grades);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGrade, setEditingGrade] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "🎓",
  });

  const handleAdd = () => {
    setEditingGrade(null);
    setFormData({ title: "", description: "", icon: "🎓" });
    setIsModalOpen(true);
  };

  const handleEdit = (grade) => {
    setEditingGrade(grade);
    setFormData({
      title: grade.title,
      description: grade.description || "",
      icon: grade.icon,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm("هل أنت متأكد من حذف هذا الصف؟")) {
      setGradesData(gradesData.filter((g) => g.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingGrade) {
      setGradesData(
        gradesData.map((g) =>
          g.id === editingGrade.id ? { ...g, ...formData } : g,
        ),
      );
    } else {
      const newGrade = {
        id: Math.max(...gradesData.map((g) => g.id)) + 1,
        ...formData,
        subjects: 0,
        lectures: 0,
        color: "from-gray-600 to-gray-800",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
      };
      setGradesData([...gradesData, newGrade]);
    }
    setIsModalOpen(false);
  };

  const icons = ["🎓", "📚", "🏆", "⭐", "🌟", "🎯", "📖", "🧠"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">الصفوف الدراسية</h1>
          <p className="text-gray-500 mt-1">إدارة الصفوف الدراسية في المنصة</p>
        </div>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <AddIcon className="w-5 h-5" />
          إضافة صف دراسي
        </Button>
      </div>

      {/* Grades Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gradesData.map((grade) => (
          <div
            key={grade.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl">
                  {grade.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {grade.title}
                  </h3>
                  <p className="text-sm text-gray-500">{grade.description}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
              <span>{grade.subjects} مادة</span>
              <span>•</span>
              <span>{grade.lectures} محاضرة</span>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleEdit(grade)}
                className="flex-1"
              >
                <EditIcon className="w-4 h-4 ml-1" />
                تعديل
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(grade.id)}
              >
                <DeleteIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {gradesData.length === 0 && (
        <div className="text-center py-12">
          <SchoolIcon className="text-gray-300 w-16 h-16 mx-auto mb-4" />
          <p className="text-gray-500">لا توجد صفوف دراسية</p>
          <Button onClick={handleAdd} className="mt-4">
            <AddIcon className="w-5 h-5 ml-2" />
            إضافة صف دراسي
          </Button>
        </div>
      )}

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingGrade ? "تعديل صف دراسي" : "إضافة صف دراسي"}
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="اسم الصف"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="الصف الأول الثانوي"
            required
          />
          <Input
            label="الوصف"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="وصف الصف الدراسي"
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
                  className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-2xl transition-all ${
                    formData.icon === icon
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 pt-4">
            <Button type="submit" className="flex-1">
              {editingGrade ? "حفظ التغييرات" : "إضافة الصف"}
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

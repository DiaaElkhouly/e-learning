"use client";
import React, { useState } from "react";
import {
  AddIcon,
  EditIcon,
  DeleteIcon,
  QuizIcon,
  CheckCircleIcon,
} from "@/components/icons";

// Simple Button Component
const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger: "bg-red-100 text-red-600 hover:bg-red-200",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition-all ${variants[variant]} ${className}`}
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

const initialQuizzes = [
  {
    id: 1,
    title: "اختبار الوحدة الأولى",
    subject: "اللغة العربية",
    grade: 1,
    questions: 10,
    duration: "30 دقيقة",
    status: "active",
  },
  {
    id: 2,
    title: "اختبار منتصف الفصل",
    subject: "الرياضيات",
    grade: 1,
    questions: 15,
    duration: "45 دقيقة",
    status: "active",
  },
  {
    id: 3,
    title: "اختبار نهائي",
    subject: "الفيزياء",
    grade: 1,
    questions: 20,
    duration: "60 دقيقة",
    status: "draft",
  },
];

export default function AdminQuizzesPage() {
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuiz, setEditingQuiz] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    grade: 1,
    questions: 10,
    duration: "30 دقيقة",
    status: "active",
  });

  const handleAdd = () => {
    setEditingQuiz(null);
    setFormData({
      title: "",
      subject: "",
      grade: 1,
      questions: 10,
      duration: "30 دقيقة",
      status: "active",
    });
    setIsModalOpen(true);
  };
  const handleEdit = (quiz) => {
    setEditingQuiz(quiz);
    setFormData({
      title: quiz.title,
      subject: quiz.subject,
      grade: quiz.grade,
      questions: quiz.questions,
      duration: quiz.duration,
      status: quiz.status,
    });
    setIsModalOpen(true);
  };
  const handleDelete = (id) => {
    if (confirm("هل أنت متأكد من حذف هذا الاختبار؟"))
      setQuizzes(quizzes.filter((q) => q.id !== id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingQuiz)
      setQuizzes(
        quizzes.map((q) =>
          q.id === editingQuiz.id ? { ...q, ...formData } : q,
        ),
      );
    else
      setQuizzes([
        ...quizzes,
        { id: Math.max(...quizzes.map((q) => q.id), 0) + 1, ...formData },
      ]);
    setIsModalOpen(false);
  };

  const activeCount = quizzes.filter((q) => q.status === "active").length;
  const draftCount = quizzes.filter((q) => q.status === "draft").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">الاختبارات</h1>
          <p className="text-gray-500 mt-1">إدارة الاختبارات والتمارين</p>
        </div>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <AddIcon className="w-5 h-5" /> إضافة اختبار
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <QuizIcon className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">
                {quizzes.length}
              </p>
              <p className="text-sm text-gray-500">إجمالي الاختبارات</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircleIcon className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{activeCount}</p>
              <p className="text-sm text-gray-500">نشط</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <QuizIcon className="text-gray-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{draftCount}</p>
              <p className="text-sm text-gray-500">مسودة</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${quiz.status === "active" ? "bg-green-100" : "bg-gray-100"}`}
                >
                  <QuizIcon
                    className={`w-8 h-8 ${quiz.status === "active" ? "text-green-600" : "text-gray-600"}`}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {quiz.title}
                  </h3>
                  <p className="text-sm text-gray-500">{quiz.subject}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${quiz.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
              >
                {quiz.status === "active" ? "نشط" : "مسودة"}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
              <span>{quiz.questions} سؤال</span>
              <span>•</span>
              <span>{quiz.duration}</span>
              <span>•</span>
              <span>الصف {quiz.grade}</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleEdit(quiz)}
                className="flex-1"
              >
                <EditIcon className="w-4 h-4 ml-1" />
                تعديل
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(quiz.id)}
              >
                <DeleteIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {quizzes.length === 0 && (
        <div className="text-center py-12">
          <QuizIcon className="text-gray-300 w-16 h-16 mx-auto mb-4" />
          <p className="text-gray-500">لا توجد اختبارات</p>
          <Button onClick={handleAdd} className="mt-4">
            <AddIcon className="w-5 h-5 ml-2" />
            إضافة اختبار
          </Button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingQuiz ? "تعديل اختبار" : "إضافة اختبار"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="عنوان الاختبار"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="اختبار الوحدة الأولى"
            required
          />
          <Input
            label="المادة"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            placeholder="اللغة العربية"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="الصف"
              type="number"
              value={formData.grade}
              onChange={(e) =>
                setFormData({ ...formData, grade: parseInt(e.target.value) })
              }
              min={1}
              max={3}
            />
            <Input
              label="عدد الأسئلة"
              type="number"
              value={formData.questions}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  questions: parseInt(e.target.value),
                })
              }
              min={1}
            />
          </div>
          <Input
            label="المدة"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            placeholder="30 دقيقة"
          />
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              الحالة
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === "active"}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">نشط</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="draft"
                  checked={formData.status === "draft"}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">مسودة</span>
              </label>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-4">
            <Button type="submit" className="flex-1">
              {editingQuiz ? "حفظ التغييرات" : "إضافة الاختبار"}
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

"use client";
import React, { useState } from "react";
import {
  AddIcon,
  EditIcon,
  DeleteIcon,
  VideoLibraryIcon,
  PlayCircleIcon,
  PictureAsPdfIcon,
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

const initialMaterials = [
  {
    id: 1,
    title: "المحاضرة الأولى - مقدمة",
    type: "video",
    duration: "45 دقيقة",
    description: "مقدمة شاملة للموضوع الأساسي",
    subjectId: 1,
    gradeId: 1,
  },
  {
    id: 2,
    title: "المحاضرة الثانية - التفاصيل",
    type: "video",
    duration: "50 دقيقة",
    description: "شرح مفصل للنقاط الرئيسية",
    subjectId: 1,
    gradeId: 1,
  },
  {
    id: 3,
    title: "ملخص المحاضرات",
    type: "pdf",
    pages: "15 صفحة",
    description: "ملخص شامل للمحاضرات",
    subjectId: 1,
    gradeId: 1,
  },
];

export default function AdminMaterialsPage() {
  const [materials, setMaterials] = useState(initialMaterials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "video",
    duration: "",
    description: "",
  });

  const handleAdd = () => {
    setEditingMaterial(null);
    setFormData({ title: "", type: "video", duration: "", description: "" });
    setIsModalOpen(true);
  };
  const handleEdit = (material) => {
    setEditingMaterial(material);
    setFormData({
      title: material.title,
      type: material.type,
      duration: material.duration || "",
      description: material.description,
    });
    setIsModalOpen(true);
  };
  const handleDelete = (id) => {
    if (confirm("هل أنت متأكد من حذف هذه المادة؟"))
      setMaterials(materials.filter((m) => m.id !== id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMaterial)
      setMaterials(
        materials.map((m) =>
          m.id === editingMaterial.id ? { ...m, ...formData } : m,
        ),
      );
    else
      setMaterials([
        ...materials,
        { id: Math.max(...materials.map((m) => m.id), 0) + 1, ...formData },
      ]);
    setIsModalOpen(false);
  };

  const videoCount = materials.filter((m) => m.type === "video").length;
  const pdfCount = materials.filter((m) => m.type === "pdf").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">المواد التعليمية</h1>
          <p className="text-gray-500 mt-1">
            إدارة المحاضرات والملفات التعليمية
          </p>
        </div>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <AddIcon className="w-5 h-5" /> إضافة مادة تعليمية
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <PlayCircleIcon className="text-red-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{videoCount}</p>
              <p className="text-sm text-gray-500">محاضرات</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <PictureAsPdfIcon className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{pdfCount}</p>
              <p className="text-sm text-gray-500">ملفات PDF</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <VideoLibraryIcon className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">
                {materials.length}
              </p>
              <p className="text-sm text-gray-500">إجمالي المواد</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <div
            key={material.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${material.type === "video" ? "bg-red-100" : "bg-blue-100"}`}
                >
                  {material.type === "video" ? (
                    <PlayCircleIcon className="text-red-600 w-8 h-8" />
                  ) : (
                    <PictureAsPdfIcon className="text-blue-600 w-8 h-8" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {material.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {material.type === "video"
                      ? material.duration
                      : material.pages}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600 line-clamp-2">
              {material.description}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleEdit(material)}
                className="flex-1"
              >
                <EditIcon className="w-4 h-4 ml-1" />
                تعديل
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(material.id)}
              >
                <DeleteIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {materials.length === 0 && (
        <div className="text-center py-12">
          <VideoLibraryIcon className="text-gray-300 w-16 h-16 mx-auto mb-4" />
          <p className="text-gray-500">لا توجد مواد تعليمية</p>
          <Button onClick={handleAdd} className="mt-4">
            <AddIcon className="w-5 h-5 ml-2" />
            إضافة مادة تعليمية
          </Button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingMaterial ? "تعديل مادة تعليمية" : "إضافة مادة تعليمية"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="عنوان المادة"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="المحاضرة الأولى"
            required
          />
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              نوع المادة
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="video"
                  checked={formData.type === "video"}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">فيديو</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="pdf"
                  checked={formData.type === "pdf"}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">ملف PDF</span>
              </label>
            </div>
          </div>
          <Input
            label={formData.type === "video" ? "المدة" : "عدد الصفحات"}
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            placeholder={formData.type === "video" ? "45 دقيقة" : "15 صفحة"}
          />
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              الوصف
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="وصف المادة التعليمية"
              rows={3}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <div className="flex items-center gap-3 pt-4">
            <Button type="submit" className="flex-1">
              {editingMaterial ? "حفظ التغييرات" : "إضافة المادة"}
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

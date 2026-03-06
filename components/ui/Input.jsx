"use client";
import React from "react";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
  error,
  ...props
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700">
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`
          w-full px-4 py-2.5 rounded-xl border-2 transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${
            error
              ? "border-red-300 bg-red-50 focus:ring-red-500"
              : "border-gray-200 bg-white hover:border-gray-300 focus:border-blue-500"
          }
        `}
        {...props}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;

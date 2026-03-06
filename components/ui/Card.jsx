// Reusable Card Component
import React from "react";

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "md",
  ...props
}) => {
  const paddingSizes = {
    none: "",
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        bg-white rounded-2xl shadow-md border border-gray-100
        ${hover ? "hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" : ""}
        ${paddingSizes[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Header Component
const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);
Card.Header = CardHeader;

// Card Body Component
const CardBody = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);
Card.Body = CardBody;

// Card Footer Component
const CardFooter = ({ children, className = "" }) => (
  <div className={`mt-4 pt-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);
Card.Footer = CardFooter;

export default Card;

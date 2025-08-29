import React from 'react'

const Button = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-[#EE6F4B] text-white",
    secondary: "bg-gray-100 text-gray-900"
  };

  return (
    <button className={`px-6 py-3 rounded-lg font-medium transition-colors ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};


export default Button
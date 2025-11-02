"use client";

export default function Tag({ children, variant = "default" }) {
  const variants = {
    default: "border-orange-500 text-orange-500",
    green: "border-green-50 text-green-50",
    background: "bg-orange-950/60 border-orange-500 text-orange-500",
    primary: "border-blue-500 text-blue-500",
    secondary: "border-orange-500 text-orange-500",
    success: "border-green-500 text-green-500",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full border ${
        variants[variant] || variants.default
      } text-sm font-jet-brains-mono`}
    >
      {children}
    </span>
  );
}

// ✅ Nuevo Button.tsx (reemplaza el actual)
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid"
  size?: "sm" | "md" | "lg"
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "solid",
  size = "md",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center border font-medium rounded-md transition-all duration-200"
  const sizeStyle =
    size === "sm"
      ? "px-4 py-2 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "px-5 py-2"
  const variantStyle =
    variant === "outline"
      ? "border-gray-300 bg-transparent text-gray-800 hover:bg-gray-100"
      : "border-transparent bg-blue-600 text-white hover:bg-blue-700"

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${sizeStyle} ${variantStyle} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
import React from "react";
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "outline" | "solid";
    size?: "sm" | "md" | "lg";
}
declare const Button: React.FC<ButtonProps>;
export default Button;

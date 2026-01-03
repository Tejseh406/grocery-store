import { sizes, variants } from "@/constants/Button";
import type { IButtonProps } from "@/models/ButtonModel";
import type React from "react";

const Button: React.FC<IButtonProps> = ({
  label,
  variant = "primary",
  size = "md",
  handleClick,
  disabled = false,
  customStyles,
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`cursor-pointer font-semibold rounded-full disabled:bg-(--gray-3) disabled:text-black disabled:pointer-none: ${customStyles} ${variants[variant]} ${sizes[size]}`}
    >
      {label}
    </button>
  );
};

export default Button;

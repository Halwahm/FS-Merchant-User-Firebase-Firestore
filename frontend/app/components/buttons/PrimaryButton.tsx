import React, { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const PrimaryButton: FC<ButtonProps> = ({ label, onClick, className = "", disabled = false }) => (
  <button
    onClick={onClick}
    className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ${className}`}
    disabled={disabled}
  >
    {label}
  </button>
);

export default PrimaryButton;

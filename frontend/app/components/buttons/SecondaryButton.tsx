import React, { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const SecondaryButton: FC<ButtonProps> = ({ label, onClick, className = "", disabled = false }) => (
  <button
    onClick={onClick}
    className={`bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200 ${className}`}
    disabled={disabled}
  >
    {label}
  </button>
);

export default SecondaryButton;

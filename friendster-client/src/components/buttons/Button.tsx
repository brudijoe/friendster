import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  borderColor: string;
  backgroundColor?: string;
  backgroundColorHover: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  cursor?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
};

export function Button({
  type = "button",
  borderColor,
  backgroundColor,
  backgroundColorHover,
  onClick,
  cursor,
  ariaLabel,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-24 py-2 px-4 ${backgroundColor} ${backgroundColorHover} text-white font-semibold hover:text-white border-2 ${borderColor} hover:border-transparent rounded ${cursor}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

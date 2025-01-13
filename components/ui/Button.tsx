import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  btnType?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string; 
}

const Button = ({ btnType = "button", children, className = "", ariaLabel }: ButtonProps) => {
  return (
    <button
      type={btnType}
      className={`bg-zinc-700 p-2 px-4 text-slate-200 rounded-xl hover:bg-zinc-900 hover:text-zinc-200 transition delay-75 ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;

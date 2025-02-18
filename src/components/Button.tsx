import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ text, className = 'px-4 py-1 text-base rounded', disabled = false, onClick, ...rest }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...rest}
      className={clsx(
        'transition-colors duration-300',
        disabled
          ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
          : 'bg-[#1973e8] text-white hover:bg-blue-700 cursor-pointer',
        className
      )}
    >
      {text}
    </button>
  );
}

export default Button;

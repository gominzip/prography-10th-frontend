import React from 'react';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className = '' }: BoxProps) => {
  return <div className={`bg-white rounded-2xl shadow p-7 mx-auto w-full ${className}`}>{children}</div>;
};

export default Box;

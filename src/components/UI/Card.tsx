import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  onClick 
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden';
  const hoverStyles = hover ? 'hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer' : '';
  const clickStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${clickStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
import React from 'react';

const Button = ({ text, onClick, type = 'primary', className = '' }) => {
  let baseStyles = 'px-5 py-2 rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-opacity-75';
  let typeStyles = '';

  switch (type) {
    case 'primary':
      typeStyles = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
      break;
    case 'secondary':
      typeStyles = 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400';
      break;
    case 'outline':
      typeStyles = 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-100 focus:ring-blue-500';
      break;
    case 'danger':
      typeStyles = 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
      break;
    default:
      typeStyles = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
  }

  const combinedStyles = `${baseStyles} ${typeStyles} ${className}`.trim();

  return (
    <button
      className={combinedStyles}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

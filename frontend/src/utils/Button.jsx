const Button = ({ text, onClick = () => {}, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 h-12 rounded-xl text-lg font-medium border border-gray-700 dark:border-gray-300
        bg-yellow-500 text-black hover:bg-yellow-600 transition duration-200 shadow-sm
        ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

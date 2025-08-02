const Input = ({ type = 'text', value, onChange, placeholder = '', name = '', className = '' }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full max-w-md h-12 px-4 py-2 rounded-xl text-base border border-gray-300 
        focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white dark:border-gray-600
        ${className}`}
    />
  );
};

export default Input;

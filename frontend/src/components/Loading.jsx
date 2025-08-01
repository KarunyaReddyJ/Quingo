export const LoadingComponent = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-indigo-500 animate-bounce [animation-delay:0s]"></div>
          <div className="w-4 h-4 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.1s]"></div>
          <div className="w-4 h-4 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]"></div>
          <span className="text-gray-600 dark:text-gray-300 text-lg ml-4">Loading...</span>
        </div>
      </div>
    );
  };
  
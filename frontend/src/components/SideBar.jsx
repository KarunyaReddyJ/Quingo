import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="fixed top-4 left-4 z-1100 p-2 bg-gray-100 rounded shadow-md cursor-pointer"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-gray-100 shadow-lg z-1000 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <ul className="mt-16 p-4">
          <li className="mb-4">
            <Link
              to="/"
              className="block text-gray-700 text-lg font-bold p-2 rounded hover:bg-gray-200 hover:text-blue-600"
              onClick={toggleSidebar}
            >
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/post"
              className="block text-gray-700 text-lg font-bold p-2 rounded hover:bg-gray-200 hover:text-blue-600"
              onClick={toggleSidebar}
            >
              AddPost
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/profile"
              className="block text-gray-700 text-lg font-bold p-2 rounded hover:bg-gray-200 hover:text-blue-600"
              onClick={toggleSidebar}
            >
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/friend"
              className="block text-gray-700 text-lg font-bold p-2 rounded hover:bg-gray-200 hover:text-blue-600"
              onClick={toggleSidebar}
            >
              Friends
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;

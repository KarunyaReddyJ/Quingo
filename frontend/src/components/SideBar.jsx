import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md shadow-md bg-white dark:bg-gray-800"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-gray-900 shadow-md transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Menu</h2>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <ul className="mt-6 space-y-2 px-4">
          {[
            { to: "/", label: "Home" },
            { to: "/post", label: "Add Post" },
            { to: "/profile", label: "Profile" },
            { to: "/friend", label: "Friends" },
            { to: "/chat", label: "Messages" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={toggleSidebar}
                className="block px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SideBar;

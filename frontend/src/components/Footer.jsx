const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} YourAppName. All rights reserved.</p>

        <div className="flex gap-4 text-sm">
          <a href="/privacy" className="hover:underline hover:text-indigo-500 transition">Privacy</a>
          <a href="/terms" className="hover:underline hover:text-indigo-500 transition">Terms</a>
          <a href="/contact" className="hover:underline hover:text-indigo-500 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

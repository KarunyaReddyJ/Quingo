import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <header className="flex-shrink-0">
        <Header />
      </header>

      {/* Main Content Area */}
      <main className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <SideBar />
        </aside>

        {/* Main Page Content */}
        <section className="flex-grow p-6">
          {children}
        </section>
      </main>

      {/* Footer (Optional - Uncomment if needed) */}
      {/* <footer className="flex-shrink-0">
        <Footer />
      </footer> */}
    </div>
  );
};

export default Layout;

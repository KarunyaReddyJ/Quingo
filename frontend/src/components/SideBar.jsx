import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

const styles = {
  aside: {
    padding: '20px',
    borderRadius: '8px',
    width: '250px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.1)',
    background: '#f4f4f4',
    zIndex: 1000,
    transform: 'translateX(-100%)', // Hidden by default
    transition: 'transform 0.3s ease-in-out',
  },
  asideOpen: {
    transform: 'translateX(0)', // Slide in when open
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '50px',
  },
  li: {
    marginBottom: '15px',
    fontSize: '18px',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'block',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  linkHover: {
    color: '#007BFF',
    background: '#e9ecef',
  },
  hamburger: {
    position: 'fixed',
    top: '15px',
    left: '15px',
    background: '#f4f4f4',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1100,
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  },
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button style={styles.hamburger} onClick={toggleSidebar}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside style={{ ...styles.aside, ...(isOpen ? styles.asideOpen : {}) }}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link to="/" style={styles.link} onClick={toggleSidebar}>Home</Link>
          </li>
          <li style={styles.li}>
            <Link to="/post" style={styles.link} onClick={toggleSidebar}>AddPost</Link>
          </li>
          <li style={styles.li}>
            <Link to="/profile" style={styles.link} onClick={toggleSidebar}>Profile</Link>
          </li>
          <li style={styles.li}>
            <Link to="/friend" style={styles.link} onClick={toggleSidebar}>Friends</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;

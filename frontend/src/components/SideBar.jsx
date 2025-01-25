import { Link } from 'react-router-dom';

const styles = {
  aside: {
    padding: '20px',
    borderRadius: '8px',
    width: '250px',  // Increased width for the sidebar
    height: '100vh',  // Make it full height of the screen
    position: 'fixed', // Fixed position so it stays on the left side
    top: 0,
    left: 0,
    boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow to the sidebar
    background: '#f4f4f4', // Lighter background to separate from the content
    zIndex: 1000, // Ensure it's above other content
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '50px', // To add some space from the top
  },
  li: {
    marginBottom: '15px',
    fontSize: '18px', // Adjusted font size for better readability
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'block', // Ensures the link takes the full width of the li element
    padding: '10px 15px', // Adds padding inside the link for better click area
    borderRadius: '5px', // Rounded corners for the link
  },
  linkHover: {
    color: '#007BFF',
    background: '#e9ecef', // Light background when hovered
  },
};

// Usage in your component
const SideBar = () => {
  return (
    <aside style={styles.aside}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.li}>
          <Link to="/post" style={styles.link}>AddPost</Link>
        </li>
        <li style={styles.li}>
          <Link to="/profile" style={styles.link}>Profile</Link>
        </li>
        <li style={styles.li} >
          <Link to="/friend" style={styles.link} >Friends</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;

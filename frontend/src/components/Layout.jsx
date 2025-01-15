import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Header style={styles.header} />
      <div style={styles.main}>
        <SideBar style={styles.sidebar} />
        <div style={styles.content}>
          {children}
        </div>
      </div>
    
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    margin:'0',
    padding:'0'
  },
  header: {
    flexShrink: 0,
  },
  main: {
    display: 'flex',
    flexGrow: 1,
  },
  sidebar: {
    flexShrink: 0,
    width: '250px', // Adjust the width as needed
  },
  content: {
    flexGrow: 1,
    padding: '20px',
  },
  footer: {
    flexShrink: 0,
  },
};

export default Layout;

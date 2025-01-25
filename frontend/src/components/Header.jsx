import { useAuth } from "../hooks/useAuth";
import Avatar from "react-avatar";

const Header = () => {
  const {userDetails}=useAuth()
  return (
    <div style={{margin:'0',padding:'0',display:"flex",justifyContent:'space-between'}} >
      <h1 style={{ fontSize: "48px",textAlign:'left' }}>Quingo</h1>
      
      {
        userDetails && <div id="profile">
        <Avatar name={userDetails.name}/>
      </div>
      }
    </div>
  );
};

export default Header;

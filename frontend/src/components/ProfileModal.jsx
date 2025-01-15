import Avatar from "react-avatar";
import Button from "../utils/Button";
import { userLogout } from "../services/authServices";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { getUserProfile } from "../services/userService";
import PostModal from "./PostModal";

// eslint-disable-next-line react/prop-types
const ProfileModal = ({ id, name, email }) => {
  const { setUserDetails } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const data = await getUserProfile(id);
      setProfile(data);
    };
    fetchUserProfile();
  }, [id]);

  const handleLogout = () => {
    userLogout();
    setUserDetails(null);
  };

  return (
    <div style={styles.modalContainer}>
      <Button
        onChange={handleLogout}
        text={"Logout"}
        style={styles.logoutButton}
      />
      <div style={styles.profileInfo}>
        <Avatar
          name={name}
          style={styles.avatar}
        />
        <div style={styles.userDetails}>
          <h2>{name}</h2>
          <h4>{email}</h4>
        </div>
      </div>
      <div style={styles.sectionsContainer}>
        <div style={styles.section}>
          <h3>Friends</h3>
          {profile ? (
            profile["friends"].length > 0 ? (
              profile["friends"].map((friend) => (
                <div key={friend.id} style={styles.friendItem}>{friend.name}</div>
              ))
            ) : (
              <div>No Friends</div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </div>

        <div style={styles.section}>
          <h3>Posts</h3>
          {profile ? (
            profile["posts"].length > 0 ? (
              <>
                {profile["posts"].map((post) => (
                  <PostModal
                    key={post._id}
                    user={name}
                    content={post.content}
                    likes={post.likes?.length || 0}
                    comments={post.comments?.length || 0}
                    id={post._id}
                  />
                ))}
                <p style={styles.morePosts}>More Posts</p>
              </>
            ) : (
              <div>No Posts</div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalContainer: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    background: "#fff",
    borderRadius: "10px",
    overflowY: "auto",
    position: "relative", // This ensures the logout button is positioned relative to this container
  },
  profileInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    justifyContent: "center",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginRight: "20px",
  },
  userDetails: {
    textAlign: "left",
  },
  sectionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    marginBottom: "20px",
  },
  section: {
    width: "48%",
  },
  friendItem: {
    padding: "5px 0",
    borderBottom: "1px solid #ddd",
  },
  logoutButton: {
    position: "absolute",
    top: "20px",
    right: "30px",
    padding: "10px 15px",
    borderRadius: "10px",
    backgroundColor: "#f44336", // Red color for logout button
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  morePosts: {
    color: "#007BFF",
    textDecoration: "underline",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default ProfileModal;

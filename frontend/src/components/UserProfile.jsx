import ProfileModal from "./ProfileModal";

// eslint-disable-next-line react/prop-types
const UserProfile = ({ profiles }) => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {profiles?.map((profile) => (
        <ProfileModal
          key={profile._id}
          id={profile._id}
          name={profile.name}
          email={profile.email} 
        />
      ))}
    </div>
  );
};

export default UserProfile;

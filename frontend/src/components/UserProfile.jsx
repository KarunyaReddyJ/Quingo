import ProfileModal from "./ProfileModal";

// eslint-disable-next-line react/prop-types
const UserProfile = ({ profiles }) => {
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        profiles?.map((profile) => {
          return (
            <ProfileModal
              key={profile._id}
              id={profile._id}
              name={profile.name}
              email={profile.emaail}
            />
          );
        })
      }
    </div>
  );
};

export default UserProfile;

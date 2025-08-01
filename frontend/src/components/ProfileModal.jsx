import Avatar from "react-avatar";
import Button from "../utils/Button";
import { userLogout } from "../services/authServices";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { getUserProfile } from "../services/userService";
import PostModal from "./PostModal";
import toast from "react-hot-toast";
import { LoadingComponent } from "./Loading";
import { sendFriendRequest } from "../utils/friend";

const ProfileModal = ({ id, name, email }) => {
  const { setUserDetails, userDetails, loading } = useAuth();
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

  const getMutualFriendsCount = () => {
    if (!userDetails || !profile) return 0;
    const currentUserFriends = new Set(userDetails.friends.map(f => f._id || f));
    return profile.friends.filter(f => currentUserFriends.has(f.id || f._id)).length;
  };

  return (
    <div className="relative p-6 max-w-5xl mx-auto min-w-2/6 rounded-xl shadow-md overflow-y-auto">
      <Button
        onClick={handleLogout}
        className="absolute top-5 right-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        text="Logout"
      />

      {loading ? (
        <div className="text-center text-gray-500"><LoadingComponent /></div>
      ) : userDetails && userDetails.name === name ? null : (
        <Button
          text="Add Friend"
          onClick={async () => {
            const res = await sendFriendRequest(id);
            if (!res) toast.success("Friend Request Sent");
          }}
          className="absolute top-5 left-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        />
      )}

      <div className="flex flex-col items-center mb-8 mt-10">
        <Avatar name={name} size="120" round={true} className="mb-4" />
        <div className="text-center">
          <h2 className="text-2xl font-bold">{name}</h2>
          <h4 className="text-gray-600">{email}</h4>
          {userDetails && userDetails.name !== name && (
            <p className="text-sm text-gray-500 mt-1">
              {getMutualFriendsCount()} mutual friend(s)
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Friends Section */}
        <div className="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold mb-4">Friends</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scroll">
            {profile ? (
              profile.friends.length > 0 ? (
                profile.friends.map((friend) => (
                  <div
                    key={friend.id}
                    className="flex items-center gap-3 p-2 border rounded-md bg-white hover:shadow"
                  >
                    <Avatar name={friend.name} size="40" round />
                    <div>
                      <div className="font-medium text-gray-800">{friend.name}</div>
                      {/* Add buttons like View Profile or Message here */}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No Friends</div>
              )
            ) : (
              <div className="text-gray-500"><LoadingComponent /></div>
            )}
          </div>
        </div>

        {/* Posts Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Posts</h3>
          {profile ? (
            profile.posts.length > 0 ? (
              <>
                {profile.posts.map((post) => (
                  <PostModal
                    key={post._id}
                    user={name}
                    content={post.content}
                    likes={post.likes?.length || 0}
                    comments={post.comments?.length || 0}
                    id={post._id}
                  />
                ))}
                <p className="mt-3 text-blue-500 underline cursor-pointer">
                  More Posts
                </p>
              </>
            ) : (
              <div className="text-gray-500">No Posts</div>
            )
          ) : (
            <div className="text-gray-500"><LoadingComponent /></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

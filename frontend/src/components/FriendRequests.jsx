import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import { LoadingComponent } from "./Loading";

const FriendRequests = () => {
  const { userDetails: user, loading } = useAuth();
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/friends/request/${user._id}`);
        setRequests(res.data.received || []);
      } catch (err) {
        setError("Failed to load friend requests");
      }
    };
    if (user?._id) fetchRequests();
  }, [user, user?._id]);

  const handleAction = async (reqId, senderId, action) => {
    try {
      if (action === "accept") {
        await axios.put("http://localhost:5000/api/friends/request", {
          senderId,
          receiverId: user._id,
        });
      } else if (action === "reject") {
        await axios.delete(`http://localhost:5000/api/friends/request/${reqId}`);
      }
      setRequests((prev) => prev.filter((r) => r._id !== reqId));
    } catch (err) {
      alert("Failed to process request");
    }
  };

  if (loading) return <LoadingComponent />;
  if (error) return <div className="text-red-500 text-center mt-4">{error}</div>;
  if (!requests.length) return <div className="text-center text-gray-500 mt-4">No friend requests.</div>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">Friend Requests</h2>
      <ul className="space-y-4">
        {requests.map((req) => (
          <li key={req._id} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
            <div className="flex items-center space-x-3">
              <img
                src={req.sender.profilePicture || "/default-avatar.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover border"
              />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">{req.sender.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{req.sender.email}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleAction(req._id, req.sender._id, "accept")}
                className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded"
              >
                Accept
              </button>
              <button
                onClick={() => handleAction(req._id, req.sender._id, "reject")}
                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
              >
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendRequests;

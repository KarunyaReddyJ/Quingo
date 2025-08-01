import UserProfile from "../components/UserProfile";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { useState } from "react";
import { searchUserProfile } from "../services/userService";
import FriendRequests from "../components/FriendRequests";

const Friend = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    const data = await searchUserProfile(searchText.trim());
    setSearchResults(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6 px-4">
      {/* Container */}
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Friend Requests */}
        <div>
          <FriendRequests />
        </div>

        {/* Search Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
        >
          <Input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search username"
            className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <Button
            text="Search"
            onClick={handleSubmit}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
          />
        </form>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <UserProfile profiles={searchResults} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Friend;

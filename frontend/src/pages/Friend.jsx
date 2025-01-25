import UserProfile from "../components/UserProfile";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { useState } from "react";
import { searchUserProfile } from "../services/userService";
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
    <div>
         <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <Input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search username"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: "10px",
            height:'30px'
          }}
        />
        <Button
          text="Search"
          onChange={handleSubmit}
          style={{
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer"
          }}
        />
      </div>
      {searchResults.length > 0 && <UserProfile profiles={searchResults} />}

    </div>
  )
}

export default Friend
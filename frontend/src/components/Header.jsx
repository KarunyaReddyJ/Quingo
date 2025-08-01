import { useAuth } from "../hooks/useAuth";
import Avatar from "react-avatar";
import { LoadingComponent } from "./Loading";

const Header = () => {
  const { userDetails, loading } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm py-4 px-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold px-9 text-gray-800 dark:text-gray-100">Quingo</h1>

      {loading ? (
        <div className="text-sm text-gray-500"><LoadingComponent/></div>
      ) : (
        userDetails && (
          <div id="profile">
            <Avatar
              name={userDetails.name}
              size="40"
              round={true}
              textSizeRatio={2}
            />
          </div>
        )
      )}
    </header>
  );
};

export default Header;

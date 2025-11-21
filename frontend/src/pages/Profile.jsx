// images
import filler from "../assets/react.svg";

// user components
import UserDash from "../components/user/UserDash";
import UserStats from "../components/user/UserStats";
import UserFavorites from "../components/user/UserFavorites";
import UserCampaigns from "../components/user/UserCampaigns";

export default function Profile({ data }) {
  return (
    <div className="profile-container">
      <h1>Welcome back adventurer Bob!</h1>
      <UserDash filler={filler} />
      <div className="profile-middle">
        <UserFavorites data={data} filler={filler} />
        <UserStats data={data} />
      </div>
      <UserCampaigns />
    </div>
  );
}

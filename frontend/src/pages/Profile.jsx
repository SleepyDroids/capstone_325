// images

// user components
import UserDash from "../components/user/UserDash";
import UserStats from "../components/user/UserStats";
import UserFavorites from "../components/user/UserFavorites";
import UserCampaigns from "../components/user/UserCampaigns";
import UserComments from "../components/user/UserComments";

export default function Profile({ data }) {
  return (
    <div className="profile-container">
      <h1>Welcome back adventurer Bob!</h1>
      <UserDash />
      <div className="profile-middle">
        <UserFavorites data={data} />
        <UserStats data={data} />
      </div>
      <UserCampaigns /> 
      <UserComments />
    </div>
  );
}

// user components
import UserDash from "../components/user/UserDash";
import UserStats from "../components/user/UserStats";
import UserFavorites from "../components/user/UserFavorites";
import UserCampaigns from "../components/user/UserCampaigns";
import UserComments from "../components/user/UserComments";

export default function Profile({ data }) {
  return (
    <div className="profile-container">
      <h1 className="profile-page-title">Welcome back adventurer Bob!</h1>

      <UserDash />

      <div className="profile-middle">


<div className="profile-col profile-col-left">
        <UserFavorites data={data} />

</div>

<div className="profile-col profile-col-right">
        <UserStats data={data} />




  
      <UserCampaigns /> 
      <UserComments />
</div>
      </div>
    </div>
  );
}

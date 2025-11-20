export default function UserFavorites({ filler }) {
  return (
    <div className="user-favorites">
      <span className="profile-text">Your Favorites:</span>
      <img src={filler} alt="profile picture" />
      <img src={filler} alt="profile picture" />
      <img src={filler} alt="profile picture" />
      <img src={filler} alt="profile picture" />
    </div>
  );
}

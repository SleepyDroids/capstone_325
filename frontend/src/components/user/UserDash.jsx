import user_icon_temp from "../../assets/avatars/lann.jpg"

export default function UserDash() {
  return (
    <div className="user-dash">
      <img src={user_icon_temp} alt="profile picture" />
      <ul>
        <li>Username</li>
        <li>Messages</li>
      </ul>
    </div>
  );
}

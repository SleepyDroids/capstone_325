export default function UserDash({ filler }) {
  return (
    <div className="user-dash">
      <img src={filler} alt="profile picture" />
      <ul>
        <li>Username</li>
        <li>Messages</li>
      </ul>
    </div>
  );
}

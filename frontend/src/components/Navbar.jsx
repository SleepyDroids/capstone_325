import { Link } from "react-router"

export default function Navbar() {
  return (
    <div className="nav-bar">
      <p>Online Status lil green dot?</p>
      <p><Link to="/">Home</Link></p> <p><Link to="/profile">Profile</Link></p> <p><Link to="/characters">Characters</Link></p> <p><Link to="/characters/new">Create New</Link></p>
      <p>Sign Out</p>
    </div>
  );
}

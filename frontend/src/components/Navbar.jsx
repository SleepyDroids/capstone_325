import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-title">
        <h1>Cool logo for character cubby? </h1>
      </div>
      <div className="nav-status">
        <p>
          Online Status <span className="lil-green-dot"></span>
        </p>
      </div>

      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/characters" className="nav-link">Characters</Link>
        <Link to="/characters/new" className="nav-link">Create New</Link>
      </nav>

      <button className="nav-sign-out" type="button">
        Signout
      </button>
    </div>
  );
}

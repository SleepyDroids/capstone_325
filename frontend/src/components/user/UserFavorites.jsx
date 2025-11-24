import ember_icon from "../../assets/avatars/ember.jpg"

export default function UserFavorites({ data }) {
  return (
    <div className="user-favorites">
      <span className="profile-text">Your Favorites:</span>
      {data.map((c) => {
        if (c.isFavorite === true) {
          return (
            <div className="favorites-tiny" key={c._id}>
              <img src={ember_icon} alt={c.name} />
              <p>
                <strong>{c.name}</strong> <br />
                <strong>Level:</strong> {c.level} |  
                <strong>Class:</strong> {c.charClass}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}

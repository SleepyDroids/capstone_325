export default function UserFavorites({ filler, data }) {
  return (
    <div className="user-favorites">
      <span className="profile-text">Your Favorites:</span>
      {data.map((c) => {
        if (c.isFavorite === true) {
          return (
            <div className="favorites-tiny" key={c._id}>
              <img src={filler} alt={c.name} />
              <p>
                <strong>Level:</strong> {c.level} &middot;{" "}
                <strong>Class:</strong> {c.charClass}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}

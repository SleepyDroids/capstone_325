import camellia_placeholder from "../../assets/avatars/camellia.jpg"

export default function HomepageRecent({ data }) {


  return (
    <div className="homepage-recent">
        
      {data.slice(-5).map((c) => {
        return (
          <div className="recent-tiny" key={c._id}>
            <img src={camellia_placeholder} alt={c.name} />
            <p>
              <strong>{c.name}</strong> <br />
              <strong>Level:</strong> {c.level} |<strong>Class:</strong>{" "}
              {c.charClass}
            </p>
          </div>
        );
      })}
    </div>
  );
}

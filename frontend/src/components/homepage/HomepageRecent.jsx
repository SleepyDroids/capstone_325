export default function HomepageRecent({ data, reload, setReload }) {

    // if (data !== reload) {
    //     setReload(data);
    // }

    // console.log(reload);

  return (
    <div className="homepage-recent">
        
      {data.slice(-5).map((c) => {
        return (
          <div className="recent-tiny" key={c._id}>
            <img src={null} alt={c.name} />
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

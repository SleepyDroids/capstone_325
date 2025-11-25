import volo from "../assets/volo-loading.webp";

export default function Loading() {
  return (
    <div className="loading">
      <img
        src={volo}
        alt="Image of Volo from Volo's Guide to Monsters"
        className="loading-image"
      />

      <div className="loading-text">
        <h1>Rolls in progress...</h1>
        <div className="loading-msg">
          <p>
            Hold tight—Volo is dusting off your character sheets for display.
          </p>
        </div>
      </div>
    </div>
  );
}

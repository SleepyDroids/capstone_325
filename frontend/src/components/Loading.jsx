import volo from "../assets/volo-loading.webp"

export default function Loading(){
    return(
        <div className="loading">
            <img src={volo} alt="Image of Volo from Volo's Guide to Monsters" /> 
        <p>Rolls in progress...</p>
            <div className="loading-msg">
                <p>Hold tight—Volo is dusting off your character sheets for display.</p>
            </div>
        </div>
    )
}
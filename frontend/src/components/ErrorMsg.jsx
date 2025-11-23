import xanathar from "../assets/xanathar-error.png"

export default function ErrorMsg(){
    return(
        <div className="error">
            <img src={xanathar} alt="Image of Xanathar" /> 
            <h1>Critical Failure</h1>
            <div className="error-msg">
                <p>Something went sideways in the Underdark. Xanathar blocked our request, so we couldn’t load your characters. Refresh to roll again.</p>
            </div>
        </div>
    )
}
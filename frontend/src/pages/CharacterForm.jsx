import { useState, useRef } from "react";

export default function CharacterForm({ data }) {

  return (
    <div className="form-container">
      <form>
    <div className="form-character">
     <label htmlFor="name">Character Name:</label> <input type="text" id="name" name="character_name" /> <br />
     
    </div>

    <div className="form-stats">
      Stat block form with randommizer for stats
    </div>

    <div className="form-subimt">
      <submit>Create Character</submit>
    </div>

      </form>

    </div>
  )
}
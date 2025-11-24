// Image icon imports
import barbarian_icon from "../../assets/classes/barbarian-icon.jpeg";
import bard_icon from "../../assets/classes/bard-icon.jpeg";
import cleric_icon from "../../assets/classes/cleric-icon.jpeg";
import druid_icon from "../../assets/classes/druid-icon.jpeg";
import fighter_icon from "../../assets/classes/fighter-icon.jpeg";
import monk_icon from "../../assets/classes/monk-icon.jpeg";
import paladin_icon from "../../assets/classes/paladin-icon.jpeg";
import rogue_icon from "../../assets/classes/rogue-icon.jpeg";
import ranger_icon from "../../assets/classes/ranger-icon.jpeg";
import sorcerer_icon from "../../assets/classes/sorcerer-icon.jpeg";
import warlock_icon from "../../assets/classes/warlock-icon.jpeg";
import wizard_icon from "../../assets/classes/wizard-icon.jpeg";

export default function HomepageClasses({
  classData,
  toggleClear,
  callClassData,
}) {
  return (
    <div className="homepage-lore">
      <h2>Currently Available Classes</h2>

      <div className="class-icon-container">
        <div className="lore-box">
          <img
            src={barbarian_icon}
            alt="Barbarian Class Info"
            onClick={() => callClassData("barbarian")}
          />
          <p>Barbarian</p>
        </div>

        <div className="lore-box">
          <img
            src={bard_icon}
            alt="Bard Class Info"
            onClick={() => callClassData("bard")}
          />
          <p>Bard</p>
        </div>

        <div className="lore-box">
          <img
            src={cleric_icon}
            alt="Cleric Class Info"
            onClick={() => callClassData("cleric")}
          />
          <p>Cleric</p>
        </div>

        <div className="lore-box">
          <img
            src={druid_icon}
            alt="Druid Class Info"
            onClick={() => callClassData("druid")}
          />
          <p>Druid</p>
        </div>

        <div className="lore-box">
          <img
            src={monk_icon}
            alt="Monk Class Info"
            onClick={() => callClassData("monk")}
          />
          <p>Monk</p>
        </div>

        <div className="lore-box">
          <img
            src={fighter_icon}
            alt="Fighter Class Info"
            onClick={() => callClassData("fighter")}
          />
          <p>Fighter</p>
        </div>

        <div className="lore-box">
          <img
            src={paladin_icon}
            alt="Paladin Class Info"
            onClick={() => callClassData("paladin")}
          />
          <p>Paladin</p>
        </div>

        <div className="lore-box">
          <img
            src={ranger_icon}
            alt="Ranger Class Info"
            onClick={() => callClassData("ranger")}
          />
          <p>Ranger</p>
        </div>

        <div className="lore-box">
          <img
            src={rogue_icon}
            alt="Rogue Class Info"
            onClick={() => callClassData("rogue")}
          />
          <p>Rogue</p>
        </div>

        <div className="lore-box">
          <img
            src={sorcerer_icon}
            alt="Sorcerer Class Info"
            onClick={() => callClassData("sorcerer")}
          />
          <p>Sorcerer</p>
        </div>

        <div className="lore-box">
          <img
            src={warlock_icon}
            alt="Warlock Class Info"
            onClick={() => callClassData("warlock")}
          />
          <p>Warlock</p>
        </div>

        <div className="lore-box">
          <img
            src={wizard_icon}
            alt="Wizard Class Info"
            onClick={() => callClassData("wizard")}
          />
          <p>Wizard</p>
        </div>
      </div>
    </div>
  );
}

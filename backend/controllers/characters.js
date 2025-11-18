import Character from "../models/Character.js";

const getAll = async (req, res) => {
  try {
    const result = await Character.find({});
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message });
  }
};

const createCharacter = async (req, res) => {
  try {
    /*
    Based off my schema, the req.body needs to include: 
    name, race, charClass --> required
    background: optional
    level: optional, default is 1
    stats: { 
    str: optional for now, default is 10,
    dex: optional for now, default is 10,
    con: optional for now, default is 10,
    int: optional for now, default is 10,
    wis: optional for now, default is 10,
    cha: optional for now, default is 10 
    }
    notes: optional
    */

    // Destructuring values from the req.body
    const { name, race, charClass, background, level, stats, notes } = req.body;

    // Additional validation in my server as these are required fields by the schema
    if (!name || !race || !charClass) {
      return res
        .status(400)
        .json({ message: "Name, race and class are required entries." });
    }

    const newCharacter = await Character.create({
      name,
      race,
      charClass,
      background,
      level,
      stats,
      notes,
    });
    res.status(201).json(newCharacter); // ok!
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};

const getOne = async (req, res) => {
  try {
    // Find a character by their ID
    const result = await Character.findById(req.params.id);
    console.log(result);
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message });
  }
};

const editCharacter = async (req, res) => {
  try {
    const originalDoc = req.params.id;
    const { name, race, charClass, background, level, stats, notes } = req.body;

    if (!name || !race || !charClass) {
      return res
        .status(400)
        .json({ message: "Name, race and class are required entries." });
    }

    const replacementDoc = await Character.replaceOne(
      { _id: originalDoc },
      {
        name,
        race,
        charClass,
        background,
        level,
        stats,
        notes,
      }
    );
    console.log("Updated character:" + replacementDoc);
    res.status(200).json(replacementDoc);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message });
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
    if (!deletedCharacter) {
      return res
        .status(404)
        .json({ error: "No Character with that id exists." });
    }
    console.log("Character Doc Deleted:", deletedCharacter._id);
    res.status(200).json({ "Character Doc Deleted": deletedCharacter._id });
  } catch (e) {
    console.log(e);
    res.json({ error: e.message });
  }
};

export default {
  getOne,
  getAll,
  deleteCharacter,
  editCharacter,
  createCharacter,
};

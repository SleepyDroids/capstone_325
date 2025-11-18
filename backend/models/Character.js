import mongoose from "mongoose";

// separate schema for stats because of how mongodb behaves with nested objects
const statsSchema = mongoose.Schema(
  {
    str: {
      type: Number,
      default: 10,
    },
    dex: {
      type: Number,
      default: 10,
    },
    con: {
      type: Number,
      default: 10,
    },
    int: {
      type: Number,
      default: 10,
    },
    wis: {
      type: Number,
      default: 10,
    },
    cha: {
      type: Number,
      default: 10,
    },
  },
  { _id: false }
);

const characterSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    race: { type: String, required: true },
    charClass: { type: String, required: true },
    background: { type: String },
    level: { type: Number, default: 1 },
    // If no stats are provided, Mongoose starts stats as a fresh object,
    // then applies the defaults from statsSchema so each new character
    // gets its own stats block instead of sharing one.
    stats: { type: statsSchema, default: () => ({}) },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Character", characterSchema);

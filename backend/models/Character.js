import mongoose from "mongoose";

// separate schema for stats because of how mongodb behaves with nested objects
const statsSchema = mongoose.Schema({
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
});

const characterSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    race: { type: String, required: true },
    class: { type: String, required: true },
    background: { type: String },
    level: { type: Number, default: 1 },
    stats: { type: statsSchema, default: () => ({}) },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Character", characterSchema);



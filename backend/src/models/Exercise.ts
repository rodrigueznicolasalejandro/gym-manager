import { Schema, model } from "mongoose";

const ExerciseSchema = new Schema({
  name: { type: String, required: true },
  sets: { type: Number, default: 3 },
  reps: { type: Number, default: 10 },
  weight: { type: Number, default: 0 },
  notes: { type: String }
});

export default model("Exercise", ExerciseSchema);

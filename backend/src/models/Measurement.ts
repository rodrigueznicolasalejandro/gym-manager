import { Schema, model } from "mongoose";

const MeasurementSchema = new Schema({
  date: { type: Date, default: Date.now },
  weight: Number,
  chest: Number,
  waist: Number,
  glutes: Number,
  notes: String,
});

export default model("Measurement", MeasurementSchema);

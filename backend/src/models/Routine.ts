import { Schema, model, Types } from "mongoose";

const DaySchema = new Schema({
  date: { type: Date, required: true },
  exercises: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
});

const RoutineSchema = new Schema({
  title: { type: String, required: true },
  owner: { type: String }, // puedes linkear a user si implementas auth
  days: [DaySchema]
}, { timestamps: true });

export default model("Routine", RoutineSchema);

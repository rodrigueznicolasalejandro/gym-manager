import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routineRoutes from "./routes/routine";
import measurementRoutes from "./routes/measurement";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/routines", routineRoutes);
app.use("/api/measurements", measurementRoutes);

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/gym-manager";

mongoose.connect(MONGODB_URI)
  .then(()=> {
    app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`));
  })
  .catch(err => console.error(err));

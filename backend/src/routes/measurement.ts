import { Router } from "express";
import Measurement from "../models/Measurement";
const router = Router();

router.post("/", async (req, res) => {
  const m = new Measurement(req.body);
  await m.save();
  res.status(201).json(m);
});

router.get("/", async (_, res) => {
  const list = await Measurement.find().sort({ date: -1 });
  res.json(list);
});

export default router;

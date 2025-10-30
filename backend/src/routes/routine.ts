import { Router } from "express";
import Routine from "../models/Routine";
const router = Router();

// Crear rutina
router.post("/", async (req, res) => {
  const r = new Routine(req.body);
  await r.save();
  res.status(201).json(r);
});

// Obtener rutinas
router.get("/", async (req, res) => {
  const routines = await Routine.find().populate("days.exercises");
  res.json(routines);
});

// Agregar ejercicio a un día
router.post("/:id/day", async (req, res) => {
  const routine = await Routine.findById(req.params.id);
  if(!routine) return res.status(404).send("Not found");
  routine.days.push(req.body);
  await routine.save();
  res.json(routine);
});

export default router;

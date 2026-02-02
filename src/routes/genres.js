import { Router } from "express";
import { getDb } from "../db.js";

const router = Router();

router.get("/", (_req, res) => {
  try {
    const db = getDb();
    const genres = db.query("SELECT * FROM genres ORDER BY genre_name ASC").all();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

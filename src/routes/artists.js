import { Router } from "express";
import { getDb } from "../db.js";

const router = Router();

router.get("/", (_req, res) => {
  try {
    const db = getDb();
    const artists = db.query(
      `SELECT 
        a.artist_id,
        a.artist_name,
        a.artist_image_url,
        a.spotify_url,
        a.spotify_desc,
        t.type_name as types
      FROM artists a
      LEFT JOIN types t ON a.artist_type_id = t.type_id
      ORDER BY a.artist_name ASC`
    ).all();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const db = getDb();
    const artists = db.query(
      `SELECT 
        a.artist_id,
        a.artist_name,
        a.artist_image_url,
        a.spotify_url,
        a.spotify_desc,
        t.type_name as types
      FROM artists a
      LEFT JOIN types t ON a.artist_type_id = t.type_id
      WHERE a.artist_id = ?`
    ).all(id);
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/averages/:id", (req, res) => {
  try {
    const { id } = req.params;

    const db = getDb();
    const averages = db.query(
      `SELECT 
        AVG(s.bpm) as avg_bpm,
        AVG(s.energy) as avg_energy,
        AVG(s.danceability) as avg_danceability,
        AVG(s.loudness) as avg_loudness,
        AVG(s.liveness) as avg_liveness,
        AVG(s.valence) as avg_valence,
        AVG(s.duration) as avg_duration,
        AVG(s.acousticness) as avg_acousticness,
        AVG(s.speechiness) as avg_speechiness,
        AVG(s.popularity) as avg_popularity
      FROM songs s
      WHERE s.artist_id = ?`
    ).get(id);
    res.json(averages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

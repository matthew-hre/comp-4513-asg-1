import { Router } from "express";
import { getDb } from "../db.js";

const router = Router();

router.get("/", (_req, res) => {
  try {
    const db = getDb();
    const songs = db.query(`
      SELECT 
        s.song_id,
        s.title,
        s.year,
        s.bpm,
        s.energy,
        s.danceability,
        s.loudness,
        s.liveness,
        s.valence,
        s.duration,
        s.acousticness,
        s.speechiness,
        s.popularity,
        json_object('artist_id', a.artist_id, 'artist_name', a.artist_name) as artist,
        json_object('genre_id', g.genre_id, 'genre_name', g.genre_name) as genre
      FROM songs s
      LEFT JOIN artists a ON s.artist_id = a.artist_id
      LEFT JOIN genres g ON s.genre_id = g.genre_id
      ORDER BY s.title ASC
    `).all();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/sort/:order", (req, res) => {
  try {
    const { order } = req.params;
    const validOrders = ["id", "title", "artist", "genre", "year", "duration"];

    if (!validOrders.includes(order)) {
      return res.status(400).json({ error: `Invalid sort order. Must be one of: ${validOrders.join(", ")}` });
    }

    const db = getDb();
    const orderByMap = {
      id: "s.song_id",
      title: "s.title",
      artist: "a.artist_name",
      genre: "g.genre_name",
      year: "s.year",
      duration: "s.duration"
    };

    const songs = db.query(`
      SELECT 
        s.song_id,
        s.title,
        s.year,
        s.bpm,
        s.energy,
        s.danceability,
        s.loudness,
        s.liveness,
        s.valence,
        s.duration,
        s.acousticness,
        s.speechiness,
        s.popularity,
        json_object('artist_id', a.artist_id, 'artist_name', a.artist_name) as artist,
        json_object('genre_id', g.genre_id, 'genre_name', g.genre_name) as genre
      FROM songs s
      LEFT JOIN artists a ON s.artist_id = a.artist_id
      LEFT JOIN genres g ON s.genre_id = g.genre_id
      ORDER BY ${orderByMap[order]} ASC
    `).all();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

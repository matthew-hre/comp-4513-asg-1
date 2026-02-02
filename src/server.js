import express from "express";

import artistRoutes from "./routes/artists.js";
import genreRoutes from "./routes/genres.js";
import songRoutes from "./routes/songs.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/artists", artistRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/songs", songRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

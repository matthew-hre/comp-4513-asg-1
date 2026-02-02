import express from "express";
import genreRoutes from "./routes/genres.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/genres", genreRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

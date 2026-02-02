import { Database } from "bun:sqlite";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DB_PATH = join(__dirname, "..", "songs-2026.db");

// singleton, as to avoid spawning multiple connections
let db = null;

export function getDb() {
  if (!db) {
    db = new Database(DB_PATH);
  }
  return db;
}

export function closeDb() {
  if (db) {
    db.close();
    db = null;
  }
}

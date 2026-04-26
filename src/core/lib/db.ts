import sqlite3 from "sqlite3";
import { open } from "sqlite";

// OPEN CONNECTION TO DB
export async function getDB() {
  return open({
    filename: "./notes.db",
    driver: sqlite3.Database
  });
}

// DB INIT
export async function initDB() {
  const db = await getDB();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY,
      title TEXT,
      content TEXT,
      isFavorite INTEGER DEFAULT 0
    )
  `);
}
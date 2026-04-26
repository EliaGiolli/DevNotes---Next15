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

// Helper functions
//GET
export async function getAllNotes() {
  const db = await getDB();
  return db.all("SELECT * FROM notes");
}

//GET/:ID
export async function getNoteById(id: number) {
  const db = await getDB();

  return db.get("SELECT * FROM notes WHERE id = ?", id);
}

//PATCH
export async function updateNote(
  id: number,
  data: { isFavorite: boolean }
) {
  const db = await getDB();

  await db.run(
    "UPDATE notes SET isFavorite = ? WHERE id = ?",
    data.isFavorite ? 1 : 0,
    id
  );

  return getNoteById(id);
}
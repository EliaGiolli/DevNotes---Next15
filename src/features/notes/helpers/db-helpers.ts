import { getDB } from "@/core/lib/db";

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
"use server";

import { getDB } from "@/lib/db";

export async function createNoteAction(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const db = await getDB();

  await db.run(
    "INSERT INTO notes (title, content, isFavorite) VALUES (?, ?, ?)",
    title,
    content,
    0
  );
}
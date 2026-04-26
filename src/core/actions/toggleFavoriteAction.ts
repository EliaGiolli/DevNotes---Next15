"use server";

import { getNoteById, updateNote } from "@/core/lib/db";


export async function toggleFavoriteAction(noteId: number) {
  const note = await getNoteById(noteId);

  if (!note) {
    throw new Error("Note not found");
  }

  return updateNote(noteId, {
    isFavorite: !note.isFavorite
  });
}
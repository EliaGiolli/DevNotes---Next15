"use client";

import { toggleFavoriteAction } from "@/actions/toggleFavoriteAction";

export async function toggleFavorite(
  noteId: number,
  setNotes: Function
) {
  // 1. optimistic UI
  setNotes((prev: any[]) =>
    prev.map(note =>
      note.id === noteId
        ? { ...note, isFavorite: !note.isFavorite }
        : note
    )
  );

  try {
    // 2. server sync
    await toggleFavoriteAction(noteId);
  } catch (err) {
    // 3. rollback (semplice)
    setNotes((prev: any[]) =>
      prev.map(note =>
        note.id === noteId
          ? { ...note, isFavorite: !note.isFavorite }
          : note
      )
    );
  }
}
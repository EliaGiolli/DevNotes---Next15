"use server";

import { getDB } from "@/core/lib/db";
import { revalidatePath } from "next/cache";


// POST
export async function createNoteAction(prevState: any, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const errors: Record<string, string> = {};

  if (!title || title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters";
  }

  if (!content || content.trim().length < 5) {
    errors.content = "Content must be at least 5 characters";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors
    };
  }

  const db = await getDB();

  await db.run(
    "INSERT INTO notes (title, content, isFavorite) VALUES (?, ?, ?)",
    title,
    content,
    0
  );

  // CACHE INVALIDATION
  revalidatePath("/");

  return {
    success: true
  };
}

// UPDATE / PATCH
export async function updateNoteAction(prevState: any, formData: FormData) {
  const id = Number(formData.get("id"));
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const errors: Record<string, string> = {};

  if (!title || title.length < 3) {
    errors.title = "Title too short";
  }

  if (!content || content.length < 5) {
    errors.content = "Content too short";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  const db = await getDB();

  await db.run(
    "UPDATE notes SET title = ?, content = ? WHERE id = ?",
    title,
    content,
    id
  );

  revalidatePath("/");

  return { success: true };
}
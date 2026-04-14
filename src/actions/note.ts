"use server";

import { getDB } from "@/lib/db";
import { revalidatePath } from "next/cache";

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
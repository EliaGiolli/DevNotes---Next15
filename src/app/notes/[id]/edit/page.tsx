import { getNoteById } from "@/core/lib/db";
import EditNoteForm from "@/features/notes/EditNoteForm";

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const note = await getNoteById(Number(params.id));

  if (!note) {
    return <div>Note not found</div>;
  }

  return <EditNoteForm note={note} />;
}
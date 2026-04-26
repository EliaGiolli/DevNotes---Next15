import { getNoteById } from "@/features/notes/helpers/db-helpers";
import EditNoteForm from "@/features/notes/components/EditNoteForm";

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
import { createNoteAction } from "@/actions/note";
import Button from "@/components/Button";

export default function CreatePage() {
  return (
    <form action={createNoteAction} className="flex flex-col gap-4 p-6">
      <label htmlFor="title">Title</label>
      <input
        name="title"
        placeholder="Title"
        className="border p-2 rounded"
      />

      <textarea
        name="content"
        placeholder="Content"
        className="border p-2 rounded"
      />

      <Button type="submit" size="md">
        Create Note
      </Button>
    </form>
  );
}
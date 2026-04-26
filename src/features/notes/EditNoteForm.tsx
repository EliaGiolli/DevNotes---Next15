import { useFormState } from "react-dom";
import { updateNoteAction } from "@/core/actions/note";
import SubmitButton from "@/shared/components/Buttons/SubmitButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function EditNoteForm({ note }: any) {
  const router = useRouter();

  const [state, formAction] = useFormState(updateNoteAction, {
    success: false,
    errors: {},
  });

  useEffect(() => {
    if (state.success) {
      router.push("/");
    }
  }, [state.success, router]);

  return (
    <form action={formAction} className="flex flex-col gap-4 p-6">

      {/* 👇 ID NASCOSTO */}
      <input type="hidden" name="id" value={note.id} />

      <input
        name="title"
        defaultValue={note.title}
        className="border p-2 rounded"
      />

      <textarea
        name="content"
        defaultValue={note.content}
        className="border p-2 rounded"
      />

      <SubmitButton />

      {state.errors?.title && <p>{state.errors.title}</p>}
      {state.errors?.content && <p>{state.errors.content}</p>}
    </form>
  );
}
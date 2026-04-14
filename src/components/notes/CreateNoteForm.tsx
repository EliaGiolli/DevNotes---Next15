'use client';

import { useFormState } from "react-dom";
import { createNoteAction } from "@/actions/note";
import SubmitButton from "../Buttons/SubmitButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const initialState = {
  success: false,
  errors: {}
};

export default function CreateNoteForm() {
  const router = useRouter();
  const [state, formAction] = useFormState(createNoteAction, initialState);

  useEffect(() => {
    if (state.success) {
      router.push("/");
    }
  }, [state.success, router]);

  return (
    <form action={formAction} className="flex flex-col gap-4 p-6">
        {/* TITLE */}
        <div className="flex flex-col gap-1">
            <label htmlFor="title" className="text-sm font-medium">
                Title
            </label>

            <input
                id="title"
                name="title"
                aria-invalid={!!state.errors?.title}
                aria-describedby={state.errors?.title ? "title-error" : undefined}
                className="border p-2 rounded"
            />

            {state.errors?.title && (
            <p id="title-error" className="text-red-500 text-sm">
                {state.errors.title}
            </p>
            )}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-1">
            <label htmlFor="content" className="text-sm font-medium">
                Content
            </label>

            <textarea
                id="content"
                name="content"
                aria-invalid={!!state.errors?.content}
                aria-describedby={state.errors?.content ? "content-error" : undefined}
                className="border p-2 rounded"
            />

            {state.errors?.content && (
            <p id="content-error" className="text-red-500 text-sm">
                {state.errors.content}
            </p>
            )}
        </div>

        <SubmitButton />

        {state.success && (
            <p role="status" className="text-green-500">
            Note created!
            </p>
        )}
        {state.errors && Object.keys(state.errors).length > 0 && (
            <div className="p-3 bg-red-50 text-red-600 rounded">
                Please fix the errors above
            </div>
        )}
    </form>
  );
}
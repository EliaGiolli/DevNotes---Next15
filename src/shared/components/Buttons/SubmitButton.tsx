'use client';

import { useFormStatus } from "react-dom";
import Button from "../Buttons/Button";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
    >
      {pending ? "Creating..." : "Create Note"}
    </Button>
  );
}
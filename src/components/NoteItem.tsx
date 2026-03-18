'use client';
import { useState } from "react";
import { NoteItemProps } from "@/types/notes";
import Button from "./Button";
import { NotepadText } from "lucide-react";

function NoteItem({note}:NoteItemProps) {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);
  return (
    <li key={note.id} className="h-full flex flex-col justify-center items-center">
        <article
            aria-labelledby={note.title} 
            className="flex flex-col flex-1 min-h-50 p-6 gap-y-4 border-2 rounded-2xl shadow-md shadow-zinc-400"
            >
            <div className="flex gap-x-2">
                <NotepadText size={40} aria-hidden="true" className="text-violet-400"/>
                <h2 
                    className="font-semibold text-xl text-black"
                    id={note.title}
                    >
                        {note.title}
                </h2>
            </div>
            <p 
                className={isOpen? 'text-md text-zinc-400' : 'hidden'}
                id={`note-content-${note.id}`}
                >
                    {note.content}
            </p>
            <Button 
                onClick={toggle}
                aria-expanded={isOpen}
                aria-controls={`note-content-${note.id}`}
            >
                Hide the content
            </Button>
        </article>
    </li>
  )
}

export default NoteItem
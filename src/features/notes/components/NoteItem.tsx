'use client';
import { useState } from "react";
import { NoteItemProps } from "@/shared/types/notes";
import Button from "@/shared/components/Buttons/Button";
import { NotepadText } from "lucide-react";
import { Heart } from "lucide-react";
import Tooltip from "@/shared/components/Tooltip";
import Link from "next/link";

function NoteItem({note, search, filter, toggleFavorite}:NoteItemProps) {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);
  return (
    <li key={note.id} className="flex flex-col justify-center items-center">
        <article
            aria-labelledby={note.title} 
            className="flex flex-col min-h-48 flex-1 p-1 gap-y-4 border-2 rounded-2xl shadow-md shadow-zinc-400"
            >
            
            <div className="bg-slate-100 p-3 py-4 flex items-center gap-x-3">
                <NotepadText size={30} aria-hidden="true" className="text-violet-400"/>
                <h2 
                    className="font-semibold text-xl text-black"
                    id={note.title}
                    >
                        {note.title}
                </h2>
                <Tooltip 
                    text={
                        note.isFavourite
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                >
                    <Heart
                        onClick={() => toggleFavorite(note.id)} 
                        className={
                            note.isFavourite 
                                ? 'text-violet-700' 
                                : 'text-slate-500'
                            } 
                        size={30}
                        aria-pressed={note.isFavourite}
                        />
                </Tooltip>
            </div>
            <p 
                className={isOpen? 'text-md text-zinc-400 p-4' : 'hidden'}
                id={`note-content-${note.id}`}
                >
                    {note.content}
            </p>
            <div className="flex justify-end p-4">
                <Button 
                    variant="ghost"
                    size="sm" 
                    onClick={toggle}
                    aria-expanded={isOpen}
                    aria-controls={`note-content-${note.id}`}
                    >
                    Hide the content
                </Button>
            </div>
            <div className="flex justify-end p-4">
                <Link href={`/notes/${note.id}/edit`}>
                    <Button variant="default">
                        Edit note
                    </Button>
                </Link>
            </div>
        </article>
    </li>
  )
}

export default NoteItem
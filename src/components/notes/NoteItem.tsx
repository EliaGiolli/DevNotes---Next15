'use client';
import { useState } from "react";
import { NoteItemProps } from "@/types/notes";
import Button from "../Buttons/Button";
import { NotepadText } from "lucide-react";
import { Heart } from "lucide-react";

function NoteItem({note, search, filter, toggleFavorite}:NoteItemProps) {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);
  return (
    <li key={note.id} className="flex flex-col justify-center items-center">
        <article
            aria-labelledby={note.title} 
            className="flex flex-col min-h-48 flex-1 p-6 gap-y-4 border-2 rounded-2xl shadow-md shadow-zinc-400"
            >
            
            <div className="flex items-center gap-x-2">
                <NotepadText size={30} aria-hidden="true" className="text-violet-400"/>
                <h2 
                    className="font-semibold text-xl text-black"
                    id={note.title}
                    >
                        {note.title}
                </h2>
                <Heart className={note.isFavourite ? 'text-violet-700' : 'text-slate-500'} size={30}/>
            </div>
            <p 
                className={isOpen? 'text-md text-zinc-400' : 'hidden'}
                id={`note-content-${note.id}`}
                >
                    {note.content}
            </p>
            <div className="flex gap-x-3">
                <Button 
                    variant="outline"
                    onClick={() => toggleFavorite(note.id)}
                    aria-pressed={note.isFavourite}
                >
                    {note.isFavourite 
                        ? 'remove from favorites'
                        : 'add to favorites'
                    }
                </Button>

                <Button 
                    onClick={toggle}
                    aria-expanded={isOpen}
                    aria-controls={`note-content-${note.id}`}
                >
                    Hide the content
                </Button>
            </div>
        </article>
    </li>
  )
}

export default NoteItem
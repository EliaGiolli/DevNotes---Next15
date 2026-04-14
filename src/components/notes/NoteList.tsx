'use client';

import { useState,useMemo, useEffect } from "react";
import NoteItem from "./NoteItem";
import Button from "../Buttons/Button";
import { Note } from "@/types/notes";
import { notes } from "@/data/notes";
import { toggleFavorite } from "@/helpers/togglerHelperFunctions";
import Link from "next/link";

function NoteList() {
    
  const [notesState,setNotesState] = useState<Note[]>([]);
  const [search, setSearch] = useState('');
  const [filterTag, setFilterTag] = useState<'all' | 'favourites'>('all');

  useEffect(() => {
    setNotesState(notes);
  }, []);

  const filteredNotes = useMemo(() => {
    return notesState.filter((note) => {
      const matchesSearch = note.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filterTag === 'all' || note.isFavourite

      return matchesSearch && matchesFilter;
    })
  },[notesState, search, filterTag]);
  
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        
        <Link href="/create">
          <Button variant="default">
            + New Note
          </Button>
        </Link>
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full md:w-64
            px-4 py-2
            rounded-lg
            border border-zinc-300
            focus:outline-none
            focus:ring-2 focus:ring-violet-400
            focus:border-transparent
            text-sm
          "
        />
        <div className="flex gap-2">
          <Button 
            variant={filterTag === 'all' ? 'active' : 'outline'}
            onClick={() => setFilterTag('all')}
          >
            All
          </Button>

          <Button 
            variant={filterTag === 'all' ? 'active' : 'outline'}
            onClick={() => setFilterTag('favourites')}
          >
            Favorites
          </Button>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 mb-6 gap-6 h-full">
          {filteredNotes.map((note) =>
              <NoteItem 
                key={note.id} 
                note={note}
                search={search}
                filter={filterTag}
                toggleFavorite={(id) => toggleFavorite(id, setNotesState)}
              />
          )}
      </ul>
    </>
  )
}

export default NoteList
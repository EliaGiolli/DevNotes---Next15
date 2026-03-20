'use client';

import { useReducer, useEffect } from "react";
import { notes } from "@/data/notes";
import NoteItem from "./NoteItem";
import { favouritesReducer, FavouritesActionKind } from "@/reducers/favouritesReducer";

function NoteList() {
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [], 
    () => {
    // it avoid SSR errors in NextJS
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('favourites');
        return saved ? JSON.parse(saved) : [];
      }
      return [];
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);
  

  return (
    <>
        <ul className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 mb-6 gap-6 h-full">
            {notes.map((note) =>
                <NoteItem 
                  key={note.id} 
                  note={note}
                  dispatch={dispatch}
                  favorites={favourites.favorites}
                  filter={favourites.filterTag}
                  search={favourites.search}
                  />
            )}
        </ul>
    </>
  )
}

export default NoteList
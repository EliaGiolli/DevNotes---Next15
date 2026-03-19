'use client';

import { useState, useEffect } from "react";
import { notes } from "@/data/notes";
import NoteItem from "./notes/NoteItem";

function NoteList() {
  const [favourites, setFavourites] = useState<number[]>(() => {
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
  
  const addToFavourites = (id:number) => {
    
    if(favourites.includes(id)){
      const idToBeRemoved = favourites.filter((removedId) => removedId !== id);
      setFavourites(idToBeRemoved);
      
    } else{
      const newFavouriteId = [...favourites, id]
      setFavourites(newFavouriteId);
    }
  }

  return (
    <>
        <ul className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 mb-6 gap-6 h-full">
            {notes.map((note) =>
                <NoteItem 
                  key={note.id} 
                  note={note}
                  addToFavorites={addToFavourites}
                  favorites={favourites}
                  />
            )}
        </ul>
    </>
  )
}

export default NoteList
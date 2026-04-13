'use client';

import { useReducer, useEffect,useMemo } from "react";
import { notes } from "@/data/notes";
import NoteItem from "./NoteItem";
import Button from "../Button";
import { favouritesReducer, FavouritesActionKind } from "@/reducers/favouritesReducer";

const initialState = {
  favorites: [],
  filterTag: 'all',
  search: ''
};

function NoteList() {
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    initialState, 
    () => {
    // it avoid SSR errors in NextJS
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('favourites');
        return saved ? { ...initialState, ...JSON.parse(saved) } : initialState;
      }
      return initialState;
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);
  

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchesSearch = note.title
        .toLowerCase()
        .includes(favourites.search.toLowerCase());

      const matchesFilter =
        favourites.filterTag === 'all' ||
        favourites.favorites.includes(note.id);

      return matchesSearch && matchesFilter;
    })
  },[notes, favourites]);
  
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <input
          type="text"
          placeholder="Search notes..."
          value={favourites.search}
          onChange={(e) =>
            dispatch({ type: FavouritesActionKind.SEARCH, payload: e.target.value })
          }
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
            onClick={() =>
            dispatch({ type: FavouritesActionKind.FILTER, payload: 'all' })
          }>
            All
          </Button>

          <Button 
            onClick={() =>
            dispatch({ type: FavouritesActionKind.FILTER, payload: 'favourites' })
          }>
            Favorites
          </Button>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 mb-6 gap-6 h-full">
          {filteredNotes.map((note) =>
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
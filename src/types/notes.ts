import { type FavouriteAction } from "@/reducers/favouritesReducer";

export interface Note {
    id: number,
    title: string,
    content: string,
}

export interface NoteItemProps {
    note: Note,
    favorites: number[],
    search: string,
    filter: 'all' | 'favourites',
    dispatch: React.Dispatch<FavouriteAction>;
}
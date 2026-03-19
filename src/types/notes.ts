export interface Note {
    id: number,
    title: string,
    content: string,
}

export interface NoteItemProps {
    note: Note,
    favorites: number[],
    addToFavorites: (id:number) => void;
}
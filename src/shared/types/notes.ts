export interface Note {
    id: number,
    title: string,
    content: string,
    isFavourite: boolean
}

export interface NoteItemProps {
    note: Note,
    search: string,
    filter: 'all' | 'favourites',
    toggleFavorite: (id: number) => void;
}
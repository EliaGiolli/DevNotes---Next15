import { notes } from "@/data/notes";
import NoteItem from "./NoteItem";

function NoteList() {
  return (
    <>
        <ul className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-10 mb-6 gap-6 h-full">
            {notes.map((note) =>
                <NoteItem key={note.id} note={note}/>
            )}
        </ul>
    </>
  )
}

export default NoteList
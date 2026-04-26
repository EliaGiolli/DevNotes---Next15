import NoteList from "@/features/notes/components/NoteList";

export default function Home() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center gap-y-8 mx-auto">
      <h1
        id="main-title"
        className="text-3xl md:text-4xl uppercase underline text-black dark:text-white text-center"
      >
        Your modern notes app!
      </h1>
      <NoteList />
    </div>
  );
}
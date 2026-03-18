import NoteList from "@/components/NoteList";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main aria-labelledby="main-title" className="flex min-h-screen w-full max-w-3xl flex-col items-center py-20 md:py-24 px-10 bg-inherit sm:items-start">
          <h1 id="main-title" className="text-3xl md:text-4xl uppercase underline text-black mx-auto">Your modern notes app!</h1>
          <NoteList />
      </main>
    </div>
  );
}

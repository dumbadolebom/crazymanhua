"use client";

import ComicCard from "@/components/ComicCard";
import { comics } from "@/data/comics";
import { useBookmarks } from "@/lib/bookmarks";

export default function LibraryPage() {
  const bookmarks = useBookmarks();

  const savedComics = comics.filter((comic) => bookmarks.includes(comic.id));

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-4 text-3xl font-bold">My Library</h1>

      <p className="mb-6 text-zinc-400">
        {savedComics.length} bookmarked comics
      </p>

      {savedComics.length === 0 ? (
        <p className="text-zinc-500">
          You haven{"'"}t bookmarked any comics yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {savedComics.map((comic) => (
            <ComicCard
              key={comic.id}
              id={comic.id}
              title={comic.title}
              rating={comic.rating}
              chapter={comic.chapter}
            />
          ))}
        </div>
      )}
    </main>
  );
}

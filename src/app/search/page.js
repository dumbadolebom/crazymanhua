"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ComicCard from "@/components/ComicCard";
import { comics } from "@/data/comics";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  const filteredComics = comics.filter((comic) =>
    comic.title.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="p-8">
        <h1 className="mb-6 text-3xl font-bold">Browse Comics</h1>

        <input
          type="text"
          placeholder="Search manhua, manga and manhwa..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none focus:border-purple-500"
        />

        <p className="mb-6 text-sm text-zinc-400">
          {filteredComics.length} comics found
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredComics.map((comic) => (
            <ComicCard
              key={comic.id}
              title={comic.title}
              rating={comic.rating}
              chapter={comic.chapter}
            />
          ))}
        </div>

        {filteredComics.length === 0 && (
          <p className="mt-8 text-center text-zinc-400">No comics found.</p>
        )}
      </section>
    </main>
  );
}

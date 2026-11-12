"use client";

import { useEffect, useState } from "react";

export default function ComicCard({ id, title, rating, chapter }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedBookmarks = JSON.parse(
      localStorage.getItem("crazymanhua-bookmarks") || "[]",
    );

    setBookmarked(savedBookmarks.includes(id));
    setLoaded(true);
  }, [id]);

  function toggleBookmark() {
    const savedBookmarks = JSON.parse(
      localStorage.getItem("crazymanhua-bookmarks") || "[]",
    );

    const updatedBookmarks = bookmarked
      ? savedBookmarks.filter((comicId) => comicId !== id)
      : [...new Set([...savedBookmarks, id])];

    localStorage.setItem(
      "crazymanhua-bookmarks",
      JSON.stringify(updatedBookmarks),
    );

    setBookmarked(!bookmarked);
  }

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 text-white">
      <h2 className="text-xl font-bold">{title}</h2>

      <p className="mt-2 text-sm text-zinc-400">Rating: {rating}</p>

      <p className="mt-1 text-sm text-zinc-400">Latest: {chapter}</p>

      <button
        onClick={toggleBookmark}
        disabled={!loaded}
        className="mt-4 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-700"
      >
        {!loaded ? "Loading..." : bookmarked ? "Bookmarked ✓" : "Add Bookmark"}
      </button>
    </div>
  );
}

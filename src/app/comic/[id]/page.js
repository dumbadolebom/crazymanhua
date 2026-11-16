import Link from "next/link";
import { notFound } from "next/navigation";
import { comics } from "@/data/comics";
import { chapters } from "@/data/chapters";

export default async function ComicDetailsPage({ params }) {
  const { id } = await params;

  const comic = comics.find((comic) => comic.id === Number(id));

  if (!comic) {
    notFound();
  }

  const comicChapters = chapters
    .filter((chapter) => chapter.comicId === comic.id)
    .sort((a, b) => a.number - b.number);

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <Link href="/" className="text-sm text-purple-400 hover:underline">
        ← Back to Home
      </Link>

      <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <h1 className="text-3xl font-bold">{comic.title}</h1>

        <p className="mt-4 text-zinc-400">Rating: {comic.rating}</p>

        <p className="mt-2 text-zinc-400">Latest: {comic.chapter}</p>

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">Chapters</h2>

          {comicChapters.length === 0 ? (
            <p className="text-zinc-500">No chapters available yet.</p>
          ) : (
            <div className="space-y-3">
              {comicChapters.map((chapter) => (
                <Link
                  key={chapter.id}
                  href={`/comic/${comic.id}/chapter/${chapter.number}`}
                  className="block rounded-lg border border-zinc-700 bg-zinc-800 p-4 hover:border-purple-500"
                >
                  <h3 className="font-semibold">Chapter {chapter.number}</h3>

                  <p className="mt-1 text-sm text-zinc-400">{chapter.title}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

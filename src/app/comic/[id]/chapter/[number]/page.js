import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { comics } from "@/data/comics";
import { chapters } from "@/data/chapters";

export default async function ChapterPage({ params }) {
  // Get comic ID and chapter number from the URL
  const { id, number } = await params;

  const comicId = Number(id);
  const chapterNumber = Number(number);

  // Find the comic
  const comic = comics.find((item) => item.id === comicId);

  // Find the requested chapter
  const chapter = chapters.find(
    (item) => item.comicId === comicId && item.number === chapterNumber,
  );

  // Return 404 if either record doesn't exist
  if (!comic || !chapter) {
    notFound();
  }

  // Find all chapters belonging to this comic
  const comicChapters = chapters
    .filter((item) => item.comicId === comicId)
    .sort((a, b) => a.number - b.number);

  // Find where the current chapter appears in the list
  const currentIndex = comicChapters.findIndex(
    (item) => item.id === chapter.id,
  );

  const previousChapter = comicChapters[currentIndex - 1];
  const nextChapter = comicChapters[currentIndex + 1];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-8 text-center">
        <Link
          href={`/comic/${comicId}`}
          className="text-sm text-purple-400 hover:underline"
        >
          ← Back to {comic.title}
        </Link>

        <h1 className="mt-4 text-2xl font-bold">{comic.title}</h1>

        <h2 className="mt-2 text-zinc-400">
          Chapter {chapter.number}: {chapter.title}
        </h2>
      </section>

      <nav className="mx-auto mb-6 flex max-w-3xl items-center justify-between gap-4 px-4">
        {previousChapter ? (
          <Link
            href={`/comic/${comicId}/chapter/${previousChapter.number}`}
            className="rounded bg-zinc-800 px-4 py-2 hover:bg-zinc-700"
          >
            ← Previous
          </Link>
        ) : (
          <span className="text-zinc-600">First Chapter</span>
        )}

        <span className="text-sm text-zinc-400">Chapter {chapter.number}</span>

        {nextChapter ? (
          <Link
            href={`/comic/${comicId}/chapter/${nextChapter.number}`}
            className="rounded bg-purple-600 px-4 py-2 hover:bg-purple-700"
          >
            Next →
          </Link>
        ) : (
          <span className="text-zinc-600">Last Chapter</span>
        )}
      </nav>

      <section className="mx-auto max-w-3xl">
        {chapter.pages.map((page, index) => (
          <Image
            key={`${chapter.id}-${index}`}
            src={page}
            alt={`Chapter ${chapter.number}, Page ${index + 1}`}
            width={800}
            height={1200}
            sizes="(max-width: 768px) 100vw, 768px"
            className="block h-auto w-full"
          />
        ))}
      </section>

      <div className="py-8 text-center">
        {nextChapter ? (
          <Link
            href={`/comic/${comicId}/chapter/${nextChapter.number}`}
            className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700"
          >
            Continue to Chapter {nextChapter.number} →
          </Link>
        ) : (
          <Link
            href={`/comic/${comicId}`}
            className="text-purple-400 hover:underline"
          >
            Return to chapter list
          </Link>
        )}
      </div>
    </main>
  );
}

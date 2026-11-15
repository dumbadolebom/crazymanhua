import Link from "next/link";
import { notFound } from "next/navigation";
import { comics } from "@/data/comics";

export default async function ComicDetailsPage({ params }) {
  const { id } = await params;

  const comic = comics.find((comic) => comic.id === Number(id));

  if (!comic) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <Link href="/" className="text-sm text-purple-400 hover:underline">
        ← Back to Home
      </Link>

      <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <h1 className="text-3xl font-bold">{comic.title}</h1>

        <p className="mt-4 text-zinc-400">Rating: {comic.rating}</p>

        <p className="mt-2 text-zinc-400">Latest: {comic.chapter}</p>

        <p className="mt-6 text-zinc-500">
          Comic description and chapters will appear here.
        </p>
      </section>
    </main>
  );
}

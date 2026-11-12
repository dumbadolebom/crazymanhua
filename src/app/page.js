import ComicCard from "@/components/ComicCard";
import { comics } from "@/data/comics";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="p-8">
        <h1 className="mb-6 text-3xl font-bold">Popular Comics</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comics.map((comic) => (
            <ComicCard
              key={comic.id}
              id={comic.id}
              title={comic.title}
              rating={comic.rating}
              chapter={comic.chapter}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

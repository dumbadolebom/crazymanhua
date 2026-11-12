export default function ComicCard({ title, rating, chapter }) {
  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 text-white">
      <h2 className="text-xl font-bold">{title}</h2>

      <p className="mt-2 text-sm text-zinc-400">Rating: {rating}</p>

      <p className="mt-1 text-sm text-zinc-400">Latest: {chapter}</p>
    </div>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-zinc-950 text-white">
      <h1 className="text-2xl font-bold">CrazyManhua</h1>

      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/search">Browse</Link>
        <Link href="/library">My Library</Link>
      </div>
    </nav>
  );
}

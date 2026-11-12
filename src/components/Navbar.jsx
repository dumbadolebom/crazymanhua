export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-zinc-950 text-white">
      <h1 className="text-2xl font-bold">CrazyManhua</h1>

      <div className="flex items-center gap-6">
        <a href="/">Home</a>
        <a href="/search">Browse</a>
        <a href="/library">My Library</a>
      </div>
    </nav>
  );
}

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to CrazyManhua</h1>
      </section>
    </main>
  );
}

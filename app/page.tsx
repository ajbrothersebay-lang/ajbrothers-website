import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <header className="bg-zinc-950 border-b border-lime-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="AJ Brothers"
              width={60}
              height={60}
            />

            <h1 className="text-3xl font-bold text-lime-400">
              AJ Brothers
            </h1>
          </div>

          <nav className="flex gap-6 text-lime-400 font-semibold">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>

        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-5xl font-bold text-lime-400">
          Welcome to AJ Brothers
        </h2>

        <p className="mt-6 text-gray-300">
          Games • Electronics • Watches • Collectables
        </p>

<div className="mt-8">
  <a
    href="https://www.ebay.co.uk/str/ajbrothers1"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg bg-lime-400 px-8 py-4 text-xl font-bold text-black hover:bg-lime-300 transition"
  >
    Shop on eBay
  </a>
</div>
<div className="mt-16 grid grid-cols-3 gap-6 text-center">
  <div>
    <h3 className="text-4xl font-bold text-lime-400">1000+</h3>
    <p className="text-gray-400">Products Sold</p>
  </div>

  <div>
    <h3 className="text-4xl font-bold text-lime-400">★★★★★</h3>
    <p className="text-gray-400">Trusted Seller</p>
  </div>

  <div>
    <h3 className="text-4xl font-bold text-lime-400">UK</h3>
    <p className="text-gray-400">Fast Dispatch</p>
  </div>
</div>

        <div className="mt-10">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-xl rounded-lg border border-lime-400 bg-zinc-900 p-4 text-white"
          />
        </div>

        <div className="mt-16 rounded-xl border border-lime-400 bg-zinc-900 p-10">
          <h3 className="mb-4 text-3xl font-bold text-lime-400">
            Latest Products
          </h3>

          <p className="text-gray-400">
            Your eBay products will appear here automatically.
          </p>
        </div>
      </section>

    </main>
  );
}
<section className="mx-auto max-w-6xl px-6 py-16 text-center">

  ...

  <div className="mt-16 rounded-xl border border-lime-400 bg-zinc-900 p-10">
    <h3 className="mb-4 text-3xl font-bold text-lime-400">
      Latest Products
    </h3>

    <p className="text-gray-400">
      Your eBay products will appear here automatically.
    </p>
  </div>

  {/* ADD THE CATEGORY SECTION HERE */}

  <div className="mt-16">
    <h2 className="mb-8 text-3xl font-bold text-lime-400">
      Shop by Category
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      <div className="rounded-xl border border-lime-400 bg-zinc-900 p-6 text-center hover:bg-zinc-800 transition">
        <div className="text-5xl">🎮</div>
        <h3 className="mt-4 text-xl font-bold text-lime-400">Games</h3>
      </div>

      <div className="rounded-xl border border-lime-400 bg-zinc-900 p-6 text-center hover:bg-zinc-800 transition">
        <div className="text-5xl">💻</div>
        <h3 className="mt-4 text-xl font-bold text-lime-400">Electronics</h3>
      </div>

      <div className="rounded-xl border border-lime-400 bg-zinc-900 p-6 text-center hover:bg-zinc-800 transition">
        <div className="text-5xl">⌚</div>
        <h3 className="mt-4 text-xl font-bold text-lime-400">Watches</h3>
      </div>

      <div className="rounded-xl border border-lime-400 bg-zinc-900 p-6 text-center hover:bg-zinc-800 transition">
        <div className="text-5xl">📦</div>
        <h3 className="mt-4 text-xl font-bold text-lime-400">Collectables</h3>
      </div>

    </div>
  </div>

</section>
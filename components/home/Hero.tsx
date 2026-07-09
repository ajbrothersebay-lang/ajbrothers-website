export default function Hero() {
  return (
    <section className="bg-black px-6 py-20 text-center">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-5xl font-bold text-yellow-400 md:text-7xl">
          Buy • Sell • Trade Electronics
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
          Quality phones, gaming consoles, laptops, watches and collectables from AJ Brothers.
        </p>


        <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

          <a
            href="#products"
            className="rounded-lg bg-yellow-400 px-8 py-4 text-lg font-bold text-black hover:bg-yellow-300"
          >
            Shop Now
          </a>


          <a
            href="/sell"
            className="rounded-lg border border-yellow-400 px-8 py-4 text-lg font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            Sell Your Device
          </a>

        </div>


        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-zinc-900 p-6">
            <h2 className="text-3xl font-bold text-yellow-400">
              1000+
            </h2>
            <p className="text-gray-400">
              Items Sold
            </p>
          </div>


          <div className="rounded-xl bg-zinc-900 p-6">
            <h2 className="text-3xl font-bold text-yellow-400">
              ★★★★★
            </h2>
            <p className="text-gray-400">
              Trusted Seller
            </p>
          </div>


          <div className="rounded-xl bg-zinc-900 p-6">
            <h2 className="text-3xl font-bold text-yellow-400">
              UK
            </h2>
            <p className="text-gray-400">
              Fast Dispatch
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
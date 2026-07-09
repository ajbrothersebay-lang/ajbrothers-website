"use client";

const products = [
  {
    name: "Gaming Consoles",
    category: "Gaming",
    image: "/images/ps5.jpg",
    description: "PlayStation, Xbox and Nintendo consoles",
    link: "https://www.ebay.co.uk/str/ajbrothers1",
  },
  {
    name: "iPhones & Smartphones",
    category: "Phones",
    image: "/images/iphone15.jpg",
    description: "Quality phones at great prices",
    link: "https://www.ebay.co.uk/str/ajbrothers1",
  },
  {
    name: "Laptops & Computers",
    category: "Electronics",
    image: "/images/ps5.jpg",
    description: "Business laptops and electronics",
    link: "https://www.ebay.co.uk/str/ajbrothers1",
  },
  {
    name: "Watches & Collectables",
    category: "Collectables",
    image: "/logo.png",
    description: "Vintage and modern collectables",
    link: "https://www.ebay.co.uk/str/ajbrothers1",
  },
];


export default function FeaturedProducts() {

  return (

    <section className="bg-black px-6 py-16">

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-10 text-center text-4xl font-bold text-yellow-400">
          Featured AJ Brothers Products
        </h2>


        <div className="grid gap-8 md:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.name}
              className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden transition hover:scale-105"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-contain bg-black"
              />


              <div className="p-5">

                <p className="text-sm text-yellow-400">
                  {product.category}
                </p>


                <h3 className="mt-2 text-xl font-bold text-white">
                  {product.name}
                </h3>


                <p className="mt-3 text-gray-400">
                  {product.description}
                </p>


                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded bg-yellow-400 px-5 py-2 font-bold text-black hover:bg-yellow-300"
                >
                  View Products
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}
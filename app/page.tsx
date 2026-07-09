"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/ProductCard";


const categories = [
  {
    name: "Video Games",
    icon: "🎮",
    link: "/category/video-games",
    description: "PlayStation, Xbox, Nintendo games"
  },
  {
    name: "Video Game Consoles",
    icon: "🕹️",
    link: "/category/consoles",
    description: "Consoles, controllers and bundles"
  },
  {
    name: "Jewellery & Watches",
    icon: "⌚",
    link: "/category/watches",
    description: "Watches and jewellery"
  },
  {
    name: "Cameras & Photography",
    icon: "📷",
    link: "/category/cameras",
    description: "Cameras, lenses and accessories"
  },
  {
    name: "Toys & Games",
    icon: "🧸",
    link: "/category/toys",
    description: "Toys and collectables"
  },
  {
    name: "Home, Furniture & DIY",
    icon: "🏠",
    link: "/category/home",
    description: "Home products and DIY items"
  }
];



export default function Home() {


  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");



  useEffect(() => {


    fetch("/api/products")

      .then((res) => res.json())

      .then((data) => {

        setProducts(
          data.inventoryItems || []
        );

      })

      .catch((error) => {

        console.error(error);

      });


  }, []);






  const filteredProducts = products.filter((product) => {


    const title =
      product.product?.title?.toLowerCase() || "";



    return title.includes(
      search.toLowerCase()
    );


  });







  return (

    <>

      <Navbar />


      <main className="min-h-screen bg-black text-white">


        {/* HERO */}

        <section className="px-6 py-20 text-center">


          <h1 className="text-6xl font-bold text-yellow-400">
            AJ Brothers
          </h1>


          <p className="mt-6 text-xl text-gray-300">
            Games • Electronics • Watches • Collectables
          </p>



          <a
            href="https://www.ebay.co.uk/str/ajbrothers1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-yellow-400 px-8 py-4 font-bold text-black"
          >
            Visit eBay Store
          </a>


        </section>







        {/* CATEGORIES */}


        <section className="mx-auto max-w-7xl px-6 py-10">


          <h2 className="mb-10 text-4xl font-bold text-yellow-400">
            Shop Categories
          </h2>




          <div className="grid gap-6 md:grid-cols-3">


            {categories.map((category) => (


              <a

                key={category.name}

                href={category.link}

                className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition hover:scale-105"

              >


                <div className="text-5xl">
                  {category.icon}
                </div>


                <h3 className="mt-5 text-2xl font-bold text-yellow-400">
                  {category.name}
                </h3>


                <p className="mt-3 text-gray-400">
                  {category.description}
                </p>


              </a>


            ))}


          </div>


        </section>








        {/* PRODUCTS */}



        <section className="mx-auto max-w-7xl px-6 py-16">


          <h2 className="mb-8 text-4xl font-bold text-yellow-400">
            Latest Products
          </h2>




          <input

            type="text"

            placeholder="Search products..."

            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }

            className="mb-10 w-full rounded-lg border border-yellow-400 bg-zinc-900 p-4 text-white"

          />





          {filteredProducts.length === 0 && (

            <p className="text-gray-400">
              Loading products or no products found...
            </p>

          )}






          <div className="grid gap-6 md:grid-cols-3">


            {filteredProducts.map((product) => (


              <ProductCard

                key={product.sku}

                product={product}

              />


            ))}


          </div>


        </section>






        <footer className="border-t border-zinc-800 py-10 text-center text-gray-400">

          © {new Date().getFullYear()} AJ Brothers

        </footer>



      </main>


    </>

  );

}
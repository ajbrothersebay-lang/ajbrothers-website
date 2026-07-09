"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


const categoryNames: any = {

  "video-games": "Video Games",

  "consoles": "Video Game Consoles",

  "watches": "Jewellery & Watches",

  "cameras": "Cameras & Photography",

  "toys": "Toys & Games",

  "home": "Home, Furniture & DIY",

};



export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {


  const [products, setProducts] = useState<any[]>([]);



  useEffect(() => {


    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {

        const items = data.inventoryItems || [];


        const filtered = items.filter((item:any)=>{

          const title =
            item.product?.title?.toLowerCase() || "";


          return title.includes(
            params.category.replace("-", " ")
          );


        });


        setProducts(filtered);


      });


  }, [params.category]);




  return (

    <main className="min-h-screen bg-black text-white">


      <section className="px-6 py-12">


        <Link
          href="/"
          className="text-yellow-400"
        >
          ← Back to AJ Brothers
        </Link>



        <h1 className="mt-8 text-5xl font-bold text-yellow-400">
          {categoryNames[params.category]}
        </h1>



        <div className="mt-12 grid gap-6 md:grid-cols-3">


          {products.length === 0 && (

            <p className="text-gray-400">
              No products found yet.
            </p>

          )}




          {products.map((product)=> (


            <div
              key={product.sku}
              className="rounded-xl bg-zinc-900 p-5"
            >


              <img
                src={
                  product.product?.imageUrls?.[0]
                  ||
                  "/logo.png"
                }
                className="h-48 w-full object-contain"
              />



              <h2 className="mt-4 text-xl font-bold text-yellow-400">

                {product.product?.title}

              </h2>



              <a
                href="https://www.ebay.co.uk/str/ajbrothers1"
                target="_blank"
                className="mt-4 inline-block rounded bg-yellow-400 px-5 py-2 font-bold text-black"
              >
                Buy Now
              </a>


            </div>


          ))}



        </div>


      </section>


    </main>

  );

}
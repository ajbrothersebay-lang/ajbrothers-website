"use client";

import { useState } from "react";


export default function ProductGrid({
  products,
}: {
  products:any[];
}) {


  const [search,setSearch] = useState("");



  const filteredProducts = products.filter((product)=>{

    const title =
      product.product?.title?.toLowerCase() || "";


    return title.includes(
      search.toLowerCase()
    );

  });



  return (

    <section>


      <input

        type="text"

        placeholder="Search products..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        className="mb-8 w-full rounded-lg border border-yellow-400 bg-zinc-900 p-4 text-white"

      />



      <div className="grid gap-6 md:grid-cols-3">


      {filteredProducts.map((product)=>(


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



          <h3 className="mt-4 font-bold text-yellow-400">

          {product.product?.title}

          </h3>



          <p className="text-gray-400">

          {product.condition}

          </p>



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

  );

}
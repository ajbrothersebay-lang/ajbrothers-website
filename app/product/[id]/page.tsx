"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {


  const [product,setProduct] = useState<any>(null);



  useEffect(()=>{


    fetch("/api/products")
      .then((res)=>res.json())
      .then((data)=>{


        const items =
          data.inventoryItems || [];



        const found =
          items.find(
            (item:any)=>
              item.sku === params.id
          );



        setProduct(found);



      });



  },[params.id]);






  if(!product){

    return (

      <main className="min-h-screen bg-black text-white flex items-center justify-center">

        <p className="text-xl text-gray-400">
          Loading product...
        </p>

      </main>

    );

  }







  return (

    <main className="min-h-screen bg-black text-white px-6 py-12">



      <Link
        href="/"
        className="text-yellow-400"
      >
        ← Back to AJ Brothers
      </Link>





      <section className="mx-auto mt-10 max-w-5xl grid gap-10 md:grid-cols-2">



        <div className="rounded-xl bg-zinc-900 p-6">


          <img

            src={
              product.product?.imageUrls?.[0]
              ||
              "/logo.png"
            }

            alt={product.product?.title}

            className="h-96 w-full object-contain"

          />


        </div>






        <div className="rounded-xl bg-zinc-900 p-8">


          <h1 className="text-4xl font-bold text-yellow-400">

            {product.product?.title}

          </h1>




          <p className="mt-6 text-gray-300">

            Condition:
            {" "}
            {product.condition}

          </p>




          <p className="mt-6 text-gray-400">

            AJ Brothers quality checked item.
            Visit our eBay store for full details.

          </p>





          <a

            href="https://www.ebay.co.uk/str/ajbrothers1"

            target="_blank"

            rel="noopener noreferrer"

            className="mt-8 inline-block rounded-lg bg-yellow-400 px-8 py-4 font-bold text-black"

          >

            Buy on eBay

          </a>



        </div>




      </section>




    </main>

  );

}
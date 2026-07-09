"use client";

import Link from "next/link";


export default function ProductCard({
  product,
}: {
  product: any;
}) {


  const title =
    product.product?.title ||
    "AJ Brothers Product";


  const image =
    product.product?.imageUrls?.[0] ||
    "/logo.png";



  const price =
    product.product?.price?.value ||
    product.price?.value ||
    null;



  return (

    <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-5 hover:border-yellow-400 transition">


      <img

        src={image}

        alt={title}

        className="h-52 w-full object-contain"

      />



      <h3 className="mt-5 text-xl font-bold text-yellow-400 line-clamp-2">

        {title}

      </h3>





      {price && (

        <p className="mt-3 text-2xl font-bold text-white">

          £{price}

        </p>

      )}






      <p className="mt-2 text-gray-400">

        Condition:
        {" "}
        {product.condition || "Used"}

      </p>





      {product.sku && (

        <p className="text-sm text-gray-500">

          SKU:
          {" "}
          {product.sku}

        </p>

      )}







      <div className="mt-5 flex gap-3">


        <Link

          href={`/product/${product.sku}`}

          className="rounded bg-yellow-400 px-4 py-2 font-bold text-black"

        >

          View

        </Link>





        <a

          href="https://www.ebay.co.uk/str/ajbrothers1"

          target="_blank"

          rel="noopener noreferrer"

          className="rounded border border-yellow-400 px-4 py-2 font-bold text-yellow-400"

        >

          eBay

        </a>




      </div>




    </div>

  );

}
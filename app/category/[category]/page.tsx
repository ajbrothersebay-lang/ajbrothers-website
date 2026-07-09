"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


const categoryNames: any = {

  "video-games": "🎮 Video Games",

  "consoles": "🕹️ Video Game Consoles",

  "watches": "⌚ Jewellery & Watches",

  "cameras": "📷 Cameras & Photography",

  "toys": "🧸 Toys & Games",

  "home": "🏠 Home, Furniture & DIY"

};



const categoryWords: any = {

  "video-games": [
    "game",
    "playstation",
    "xbox",
    "nintendo",
    "switch"
  ],

  "consoles": [
    "console",
    "playstation",
    "xbox",
    "switch"
  ],

  "watches": [
    "watch",
    "jewellery",
    "gold",
    "silver"
  ],

  "cameras": [
    "camera",
    "lens",
    "photography"
  ],

  "toys": [
    "toy",
    "figure",
    "collectable"
  ],

  "home": [
    "home",
    "furniture",
    "diy"
  ]

};




export default function CategoryPage({

  params,

}: {

  params: {
    category: string
  }

}) {



const [products,setProducts] =
useState<any[]>([]);


const [search,setSearch] =
useState("");





useEffect(()=>{


fetch("/api/products")

.then(res=>res.json())

.then(data=>{


setProducts(
data.inventoryItems || []
);


});


},[]);






const words =
categoryWords[params.category] || [];





const filteredProducts = products.filter(product=>{


const title =
product.product?.title?.toLowerCase() || "";



const matchesCategory =
words.some((word:string)=>
title.includes(word)
);



const matchesSearch =
title.includes(
search.toLowerCase()
);



return matchesCategory && matchesSearch;


});







return (


<main className="min-h-screen bg-black text-white px-6 py-12">


<Link
href="/"
className="text-yellow-400"
>
← Back to AJ Brothers
</Link>





<h1 className="mt-10 text-5xl font-bold text-yellow-400">

{categoryNames[params.category] || "Products"}

</h1>





<p className="mt-4 text-gray-400">

AJ Brothers collection

</p>







<input

type="text"

placeholder="Search this category..."

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

className="mt-10 w-full rounded-lg border border-yellow-400 bg-zinc-900 p-4"

/>








<div className="mt-12 grid gap-6 md:grid-cols-3">





{filteredProducts.map(product=>(


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

alt="product"

className="h-48 w-full object-contain"

/>





<h2 className="mt-5 text-xl font-bold text-yellow-400">

{product.product?.title}

</h2>





<p className="mt-2 text-gray-400">

Condition:
{" "}
{product.condition}

</p>





<Link

href={`/product/${product.sku}`}

className="mt-5 inline-block rounded bg-yellow-400 px-5 py-2 font-bold text-black"

>

View Product

</Link>





</div>



))}



</div>







{filteredProducts.length === 0 && (

<p className="mt-10 text-gray-400">

No products found in this category yet.

</p>

)}




</main>


);


}
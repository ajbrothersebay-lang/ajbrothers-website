import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/30 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="AJ Brothers"
            width={50}
            height={50}
          />

          <span className="text-2xl font-bold text-yellow-400">
            AJ Brothers
          </span>
        </Link>


        <nav className="hidden gap-6 text-white md:flex">
          <Link href="/">Home</Link>
          <Link href="/phones">Phones</Link>
          <Link href="/gaming">Gaming</Link>
          <Link href="/laptops">Laptops</Link>
          <Link href="/sell">Sell</Link>
        </nav>


        <div className="flex gap-4 text-yellow-400">
          <Search className="h-5 w-5" />
          <User className="h-5 w-5" />
          <ShoppingCart className="h-5 w-5" />
        </div>

      </div>
    </header>
  );
}
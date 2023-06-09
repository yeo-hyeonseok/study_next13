"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();

  function getStyle(url: string): string {
    if (url === pathName) {
      return "text-black bg-stone-100 text-xl font-semibold border border-stone-100 flex-1 text-center pt-2 pb-2";
    } else {
      return "text-stone-100 text-xl font-semibold border border-stone-100 flex-1 text-center pt-2 pb-2";
    }
  }

  return (
    <div className={`flex justify-around`}>
      <Link href="/posts" className={getStyle("/posts")}>
        POSTS
      </Link>
      <Link href="/apis" className={getStyle("/apis")}>
        APIS
      </Link>
      <Link href="/products" className={getStyle("/products")}>
        PRODUCTS
      </Link>
      <Link href="/routers" className={getStyle("/routers")}>
        ROUTERS
      </Link>
      <Link href="/caching" className={getStyle("/caching")}>
        CACHING
      </Link>
      <Link href="/rendering" className={getStyle("/rendering")}>
        RENDERING
      </Link>
      <Link href="/register" className={getStyle("/register")}>
        REGISTER
      </Link>
    </div>
  );
}

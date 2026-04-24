"use client";

import Link from "next/link";
import { categories } from "@/data/categories";

////////////////// need fix nanti

export default function MobileMenu({
  openCategory,
}: {
  openCategory: boolean;
}) {
  return (
    <div className="md:hidden px-4 pb-4 space-y-3">
      {openCategory && (
        <div className="space-y-2">
          {categories.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block border-b pb-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      <Link href="#">Deals</Link>
      <Link href="#">What's New</Link>
      <Link href="#">Delivery</Link>
    </div>
  );
}
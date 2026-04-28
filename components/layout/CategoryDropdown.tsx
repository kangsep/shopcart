"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryDropdown() {
  return (
    <div className="absolute left-0 mt-4 w-125 bg-white shadow-xl rounded-xl p-4 z-50">
      <h3 className="font-semibold mb-4">Popular Categories</h3>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              className="rounded-md"
            />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">
                240 Item Available
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
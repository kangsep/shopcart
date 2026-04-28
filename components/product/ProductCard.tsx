"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";
import { Product } from "@/data/products";

interface ProductGridProps {
  title: string;
  products: Product[];
}

const categories = ["Gadgets", "Fashion", "Toys", "Education", "Beauty", "Fitness", "Furniture", "Sneakers"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) =>
        star <= rating ? (
          <FaStar key={star} className="text-green-500 text-sm" />
        ) : (
          <FaRegStar key={star} className="text-green-500 text-sm" />
        )
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);
  const isDraggingCard = useRef(false);

  return (
    <Link
      href={`/product/${product.id}`}
      draggable={false}
      className="flex flex-col select-none"
      onMouseDown={() => { isDraggingCard.current = false; }}
      onMouseMove={() => { isDraggingCard.current = true; }}
      onClick={(e) => { if (isDraggingCard.current) e.preventDefault(); }}
    >
      <div className="relative bg-gray-100 rounded-xl overflow-hidden h-[200px] flex items-center justify-center group">
        <Image
          src={product.image}
          alt={product.name}
          width={160}       
          height={160}
          className="object-contain pointer-events-none transition-transform duration-300 group-hover:scale-110"
          draggable={false}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setWished(!wished);
          }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-white transition-colors duration-200 ${
            wished ? "text-red-400" : "text-gray-400 hover:bg-pink-100"
          }`}
        >
          <FaHeart className={wished ? "text-red-400" : ""} />
        </button>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <p className="font-bold text-gray-900 text-sm leading-tight">{product.name}</p>
        <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
          <span className="text-xs align-top mt-0.5 inline-block">$</span>
          {product.price.toFixed(0)}
          <span className="text-xs text-gray-500">.00</span>
        </p>
      </div>
      <p className="text-sm text-gray-500 mt-0.5 leading-snug">{product.desc}</p>

      <div className="flex items-center gap-1.5 mt-1">
        <StarRating rating={product.rating} />
        <span className="text-xs text-gray-400">({product.buyed})</span>
      </div>

      <button
        onClick={(e) => e.preventDefault()}
        className="mt-3 border border-gray-900 text-gray-900 rounded-full px-4 py-1.5 text-xs font-medium hover:bg-gray-900 hover:text-white transition-colors w-fit"
      >
        Add to Cart
      </button>
    </Link>
  );
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState("Gadgets");

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-6">
          {title}
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-green-900 text-white border-green-900"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
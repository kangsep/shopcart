"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";
import { deals } from "@/data/products";

// 
export interface Product {
  id: number;
  name: string;
  price: number;
  desc: string;
  image: string;
  rating: number;
  buyed: number;
}

//  
interface ProductSectionProps {
  title: string;
  products: Product[];
}

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

  return (
    <div className="min-w-75 max-w-75 flex flex-col select-none">
      <div className="relative bg-gray-100 rounded-xl overflow-hidden h-65 flex items-center group justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={220}
          height={220}
          className="object-contain pointer-events-none transition-transform duration-300 group-hover:scale-110"
          draggable={false}
        />
        <button
          onClick={() => setWished(!wished)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-white transition-colors duration-200 ${
            wished ? "text-red-400" : "text-gray-400 hover:bg-pink-100"
          }`}
        >
          <FaHeart className={wished ? "text-red-400" : ""} />
        </button> 
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <p className="font-bold text-gray-900 text-base leading-tight">{product.name}</p>
        <p className="text-base font-semibold text-gray-900 whitespace-nowrap">
          <span className="text-sm align-top mt-0.5 inline-block">$</span>
          {product.price}
          <span className="text-xs text-gray-500">.00</span>
        </p>
      </div>
      <p className="text-sm text-gray-500 mt-0.5">{product.desc}</p>

      <div className="flex items-center gap-2 mt-1">
        <StarRating rating={product.rating} />
        <span className="text-sm text-gray-500">({product.buyed})</span>
      </div>

      <button className="mt-3 border border-gray-900 text-gray-900 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors w-fit">
        Add to Cart
      </button>
    </div>
  );
}


export default function ProductSection({title, products}: ProductSectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const el = sliderRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const current = el.scrollLeft;
    setProgress(maxScroll > 0 ? (current / maxScroll) * 100 : 0);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateProgress);
    return () => el.removeEventListener("scroll", updateProgress);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (sliderRef.current?.offsetLeft ?? 0);
    scrollLeft.current = sliderRef.current?.scrollLeft ?? 0;
    if (sliderRef.current) sliderRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX.current;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    if (sliderRef.current) sliderRef.current.style.cursor = "grab";
  };

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-6">
          {title}
        </h2>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-4 cursor-grab"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-4 h-0.75 bg-gray-200 rounded-full">
          <div
            className="h-full bg-gray-900 rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
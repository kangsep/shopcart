"use client";
import { useState } from "react";
import Image from "next/image";
import { FaStar, FaRegStar, FaTruck, FaUndo } from "react-icons/fa";
import { Product } from "@/data/products";
import Link from "next/link";

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

export default function ProductInformation({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const thumbnails = [product.image, product.image, product.image, product.image];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* bag. kiri */}
      <div className="flex flex-col gap-4">
        <div className="bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center h-105">
          <Image
            src={thumbnails[activeImage]}
            alt={product.name}
            width={380}
            height={380}
            className="object-contain"
          />
        </div>

        {/* thumbnails */}
        <div className="grid grid-cols-4 gap-3">
          {thumbnails.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`bg-gray-100 rounded-xl overflow-hidden h-[90px] flex items-center justify-center border-2 transition-colors ${
                activeImage === i ? "border-green-700" : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`thumb-${i}`}
                width={70}
                height={70}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* bag. kanan */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-500 mt-2 text-sm leading-relaxed">
            {product.desc}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-gray-500 text-sm">({product.buyed})</span>
        </div>

        <hr className="border-gray-200" />

        <div>
          <p className="text-3xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
            <span className="text-lg font-normal text-gray-500 ml-2">
              or ${(product.price / 6).toFixed(2)}/month
            </span>
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Suggested payments with 6 months special financing
          </p>
        </div>

        <hr className="border-gray-200" />

        {product.colors && product.colors.length > 0 && (
          <div>
            <p className="font-semibold text-gray-900 mb-3">Choose a Color</p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-3 transition-all ${
                    selectedColor === color
                      ? "border-green-700 scale-105"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}

        <hr className="border-gray-200" />

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="text-gray-700 text-lg font-bold hover:text-gray-900"
            >
              -
            </button>
            <span className="text-gray-900 font-semibold w-4 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="text-gray-700 text-lg font-bold hover:text-gray-900"
            >
              +
            </button>
          </div>

          {product.stock && (
            <div>
              <p className="text-gray-800 text-sm">
                Only{" "}
                <span className="text-green-500 font-bold">
                  {product.stock} Items
                </span>{" "}
                Left!
              </p>
              <p className="text-gray-400 text-sm">Don&apos;t miss it</p>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <Link href={`/checkout?id=${product.id}`} className="flex-1">
            <button className="w-full bg-green-900 text-white rounded-full py-3 font-semibold hover:bg-green-800 transition-colors">
              Buy Now
            </button>
          </Link>
          <button className="flex-1 border border-gray-900 text-gray-900 rounded-full py-3 font-semibold hover:bg-gray-900 hover:text-white transition-colors">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-4">
            <FaTruck className="text-orange-400 text-xl mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                Free Delivery
              </p>
              <p className="text-gray-400 text-sm underline cursor-pointer">
                Enter your Postal code for Delivery Availability
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-4">
            <FaUndo className="text-orange-400 text-xl mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                Return Delivery
              </p>
              <p className="text-gray-400 text-sm">
                Free 30days Delivery Returns.{" "}
                <span className="underline cursor-pointer">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useSearchParams } from "next/navigation";
import { allProducts } from "@/data/products";
import CheckoutPage from "@/components/checkout/CheckoutPage";

export default function Checkout() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  const product = allProducts.find((p) => p.id === id);

  if (!product) return <p className="p-10 text-gray-500">Product not found</p>;

  return <CheckoutPage product={product} />;
}
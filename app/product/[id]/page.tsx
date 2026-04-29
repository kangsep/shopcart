import { allProducts, mostSelling } from "@/data/products";
import Link from "next/link";
import ProductInformation from "@/components/product-detail/ProductInformation";
import ProductSection from "@/components/product/ProductSection";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await delay(2000);

  const { id } = await params;
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100">
        <p className="text-4xl font-bold text-gray-500">
          Product Not Found
        </p>

        <Link href="/">
          <button className="mt-8 bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-900 transition cursor-pointer">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-sm text-gray-500 mb-8">
        products / {product.name}
      </p>

      <ProductInformation product={product} />
      <ProductSection
        products={mostSelling}
        title="Product Recommendations"
      />
    </div>
  );
}
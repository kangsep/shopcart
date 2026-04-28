import Image from "next/image";
import Link from "next/link";

export default function DiscountBanner() {
  return (
    <section className="relative w-full overflow-hidden min-h-105">

      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder/green-furniture.png"
          alt="Cash Back Banner"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex justify-end items-center min-h-150">
        <div className="bg-green-950 text-white p-16 max-w-md w-full">
          <h2 className="text-4xl font-bold leading-tight">
            Get 5% Cash Back On $200
          </h2>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
          <Link href="/">
            <button className="mt-8 border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-black hover:border-black transition-colors">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
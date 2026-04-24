"use client";
import Link from "next/link";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden min-h-[420px] md:min-h-[500px]">

      {/* bg */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder/hero.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* isian */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 leading-tight">
            Shopping And <br /> Department Store.
          </h1>
          <p className="mt-6 text-gray-600 max-w-md">
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
          <Link href="/">
            <button className="mt-8 bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
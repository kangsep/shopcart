import Image from "next/image"
import Link from "next/link"

export default function CardBanner() {
  return (
    <section className="bg-orange-100 relative w-full overflow-hidden min-h-90">
        <div className="relative max-w-7xl mx-auto px-10 py-20">
            <div>
                <h1 className="text-5xl md:text-6xl font-bold text-black">
                    Get 5% Cash Back
                </h1>
                <p className="mt-4 text-black max-w-md">
                    on Shopcart.com 
                </p>
                <Link href="/">
                    <button className="font-bold mt-4 bg-green-800 text-white px-8 py-5 rounded-full hover:bg-green-900 transition cursor-pointer">
                        Learn More
                    </button>
                </Link>

            </div>

        </div>

    </section>
  )
}

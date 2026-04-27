import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PromotionSection() {
  return (
    <section className="py-10">
        <div className="max-w-7xl mx-auto py-6 px-6">
            {/* Trending ....... Section */}
            <h2 className="text-3xl font-bold text-black">
                Trending Product For You
            </h2>
        </div>


            {/* card */}
            <div className=" max-w-7xl p-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-2xl overflow-hidden flex flex-col">
                    <div className="overflow-hidden h-70 group">
                        <Image
                        src="/placeholder/green-furniture.png"
                        alt="banner"
                        width={800}
                        height={280}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-5">
                        <p className="font-bold text-black text-lg">Furniture Village</p>
                        <p className="text-gray-800 text-sm mt-1">Delivery Within 24 Hours</p>
                        <Link href="/">
                        <button className="mt-4 bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-900 transition-colors cursor-pointer">
                            Shop Now
                        </button>
                        </Link>
                    </div>            
                </div>

                <div className="bg-gray-100 rounded-2xl overflow-hidden flex flex-col">
                    <div className="overflow-hidden h-70 group">
                        <Image
                        src="/placeholder/fashion-world.png"
                        alt="banner"
                        width={800}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-5">
                        <p className="font-bold text-black text-lg">Fashion World</p>
                        <p className="text-gray-800 text-sm mt-1">Delivery Within 24 Hours</p>
                        <Link href="/">
                        <button className="mt-4 bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-900 transition-colors cursor-pointer">
                            Shop Now
                        </button>
                        </Link>

                    </div>
                </div>
            </div>
    </section>
    
  )
}

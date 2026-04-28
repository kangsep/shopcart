import Image from 'next/image'
import Link from 'next/link'
import { FaTag } from "react-icons/fa"

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
        
        <div className="max-w-7xl mx-auto py-6 px-6">
            {/* Best Selling  ....... Section */}
            <h2 className="text-3xl font-bold text-black">
                Best Selling Store 
            </h2>
        </div>

        {/* card */}
        <div className="max-w-7xl p-6 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 ">

            <div className="flex flex-col">
                <div className="relative rounded-2xl h-55 group">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <Image
                            src="/placeholder/store-one.png"
                            alt="Staples"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-120 group-hover:rotate-6"
                        />
                    </div>
              <div className="absolute -bottom-5 left-4 w-15 h-15 rounded-full overflow-hidden border-2 border-white shadow-md z-10">
                <Image 
                src="/placeholder/staples.png" 
                alt="Staples Logo" 
                fill 
                className="object-cover" />
              </div>
            </div>
                <div className="mt-8">
                    <p className="font-bold text-black text-base ">Staples</p>
                    <p className="text-gray-500 text-sm mt-0.5">Bag - Perfume</p>
                    <div className="flex items-center gap-1.5 mt-1.5 text-pink-500 text-sm font-medium">
                        <FaTag className="text-xs" />
                        <span> Delivery Within 24 Hours</span>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="flex flex-col">
                <div className="relative rounded-2xl h-55 group">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <Image
                            src="/placeholder/store-two.png"
                            alt="Now Delivery"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-120 group-hover:rotate-6"
                        />
                    </div>
              <div className="absolute -bottom-5 left-4 w-15 h-15 rounded-full overflow-hidden border-2 border-white shadow-md z-10">
                <Image 
                src="/placeholder/now-delivery.png" 
                alt="Now Delivery logo" 
                fill 
                className="object-cover" />
              </div>
            </div>
                <div className="mt-8">
                    <p className="font-bold text-black text-base ">Now Delivery</p>
                    <p className="text-gray-500 text-sm mt-0.5">Bag - Perfume</p>
                    <div className="flex items-center gap-1.5 mt-1.5 text-pink-500 text-sm font-medium">
                        <FaTag className="text-xs" />
                        <span> Delivery Within 24 Hours</span>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="flex flex-col">
                <div className="relative rounded-2xl h-55 group">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <Image
                            src="/placeholder/store-three.png"
                            alt="Bevmo"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-120 group-hover:rotate-6"
                        />
                    </div>
              <div className="absolute -bottom-5 left-4 w-15 h-15 rounded-full overflow-hidden border-2 border-white shadow-md z-10">
                <Image 
                src="/placeholder/bevmo.png" 
                alt="Bevmo Logo" 
                fill 
                className="object-cover" />
              </div>
            </div>
                <div className="mt-8">
                    <p className="font-bold text-black text-base ">Bevmo</p>
                    <p className="text-gray-500 text-sm mt-0.5">Bag - Perfume</p>
                    <div className="flex items-center gap-1.5 mt-1.5 text-pink-500 text-sm font-medium">
                        <FaTag className="text-xs" />
                        <span> Delivery Within 24 Hours</span>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="flex flex-col">
                <div className="relative rounded-2xl h-55 group">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <Image
                            src="/placeholder/store-four.png"
                            alt="Quicklly"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-120 group-hover:rotate-6"
                        />
                    </div>
              <div className="absolute -bottom-5 left-4 w-15 h-15 rounded-full overflow-hidden border-2 border-white shadow-md z-10">
                <Image 
                src="/placeholder/quicklly.png" 
                alt="Quicklly Logo" 
                fill 
                className="object-cover" />
              </div>
            </div>
                <div className="mt-8">
                    <p className="font-bold text-black text-base ">Staples</p>
                    <p className="text-gray-500 text-sm mt-0.5">Bag - Perfume</p>
                    <div className="flex items-center gap-1.5 mt-1.5 text-pink-500 text-sm font-medium">
                        <FaTag className="text-xs" />
                        <span> Delivery Within 24 Hours</span>
                    </div>
                </div>
            </div>
        </div>

    </section>
    
  )
}

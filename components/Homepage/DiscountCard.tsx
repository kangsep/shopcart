import React from 'react'
import Image from 'next/image'

export default function DiscountCard() {
  return (
    <section className="py-10">

      {/* title */}
      <div className="max-w-7xl mx-auto py-6 px-6">
        <h2 className="text-3xl font-bold text-black">
          Get Up To 70% Off
        </h2>
      </div>

      {/* card */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">

        
        <div className="bg-amber-50 rounded-2xl overflow-hidden flex flex-col">
          <div className="p-5 flex flex-col gap-2">
            <p className="font-semibold text-gray-800">Save</p>
            <p className="text-5xl font-bold text-yellow-700 leading-none">
              <span className="text-2xl align-top mt-1 inline-block">$</span>100
            </p>
            <p className="text-gray-600 text-sm mt-2 leading-snug">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <div className="relative w-full min-h-60 flex-1 overflow-hidden">q   
            <Image 
            src="/placeholder/disc-sofa.png" 
            alt="Furniture" 
            fill 
            className="object-cover transition-transform duration-300 hover:scale-120" />
          </div>
        </div>

        
        <div className="bg-pink-100 rounded-2xl overflow-hidden flex flex-col">
          <div className="p-5 flex flex-col gap-2">
            <p className="font-semibold text-gray-800">Save</p>
            <p className="text-5xl font-bold text-red-700 leading-none">
              <span className="text-2xl align-top mt-1 inline-block">$</span>29
            </p>
            <p className="text-gray-600 text-sm mt-2 leading-snug">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <div className="relative w-full min-h-60 flex-1 overflow-hidden">
            <Image 
            src="/placeholder/disc-book.png"
            alt="Books"
            fill 
            className="object-cover transition-transform duration-300 hover:scale-120" />
          </div>
        </div>

        
        <div className="bg-orange-50 rounded-2xl overflow-hidden flex flex-col">
          <div className="p-5 flex flex-col gap-2">
            <p className="font-semibold text-gray-800">Save</p>
            <p className="text-5xl font-bold text-yellow-800 leading-none">
              <span className="text-2xl align-top mt-1 inline-block">$</span>67
            </p>
            <p className="text-gray-600 text-sm mt-2 leading-snug">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <div className="relative w-full min-h-60 flex-1 overflow-hidden">
            <Image 
            src="/placeholder/disc-baju.png" 
            alt="Clothes" 
            fill 
            className="object-cover transition-transform duration-300 hover:scale-120" />
          </div>
        </div>

        
        <div className="bg-teal-100 rounded-2xl overflow-hidden flex flex-col">
          <div className="p-5 flex flex-col gap-2">
            <p className="font-semibold text-gray-800">Save</p>
            <p className="text-5xl font-bold text-green-900 leading-none">
              <span className="text-2xl align-top mt-1 inline-block">$</span>59
            </p>
            <p className="text-gray-600 text-sm mt-2 leading-snug">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <div className="relative w-full min-h-60 flex-1 overflow-hidden">
            <Image 
            src="/placeholder/disc-bag.png" 
            alt="Backpack" 
            fill 
            className="object-cover transition-transform duration-300 hover:scale-120" />
          </div>
        </div>

      </div>
    </section>
  )
}
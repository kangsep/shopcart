import Image from "next/image"   

export default function ByBrand() {
  return (
    <section className="py-10">
      {/* Title */}
      <div className="max-w-7xl mx-auto py-6 px-6">
        <h2 className="text-3xl font-bold text-black">Choose By Brand</h2>
      </div>

      {/* Brand */}
      <div className="max-w-7xl mx-auto px-4 ">

        {/* Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-5 bg-gray-100 rounded hover:outline">
            <div className="flex item-center justify-center ">
              <Image
                src="/placeholder/staples.png"
                alt="brand"
                width="60"
                height="60"
                className=""
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Staples</h3>
              <p className="text-sm text-gray-700">
                Delivery within 24 hours
              </p>

            </div>
          </div>
          <div className="flex items-center gap-3 p-5 bg-gray-100 rounded hover:outline">
            <div className="flex items-center justify-center">
              <Image
              src="/placeholder/sprouts.png"
              alt="brand"
              width="60"
              height="60"
              className=""
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Sprouts</h3>
                <p className="text-sm text-gray-700">
                  Delivery within 24 hours
                </p>
            </div>


          </div>
          <div className="flex items-center gap-3 p-5 bg-gray-100 rounded hover:outline">
            <div className="flex items-center justify-center">
              <Image
              src="/placeholder/grocery_outlets.png"
              alt="brand"
              width="60"
              height="60"
              className=""
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Grocery Outlets</h3>
                <p className="text-sm text-gray-700">
                  Delivery within 24 hours
                </p>
            </div>
        

          </div>
          <div className="flex items-center gap-3 p-5 bg-gray-100 rounded hover:outline">
            <div className="flex items-center justify-center">
              <Image
              src="/placeholder/mollie_stones.png"
              alt="brand"
              width="60"
              height="60"
              className=""
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Mollie Stones</h3>
                <p className="text-sm text-gray-700">
                  Delivery within 24 hours
                </p>
            </div>
        

          </div>
          <div className="flex items-center gap-3 p-5 bg-gray-100 rounded hover:outline">
            <div className="flex items-center justify-center">
              <Image
              src="/placeholder/sports_basement.png"
              alt="brand"
              width="60"
              height="60"
              className=""
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Sports Basement</h3>
                <p className="text-sm text-gray-700">
                  Delivery within 24 hours
                </p>
            </div>
        

          </div>
          <div className="flex items-center gap-3 p-5 bg-gray-100 rounded hover:outline">
            <div className="flex items-center justify-center">
              <Image
              src="/placeholder/container_store.png"
              alt="brand"
              width="60"
              height="60"
              className=""
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Container Stores</h3>
                <p className="text-sm text-gray-700">
                  Delivery within 24 hours
                </p>
            </div>
        

          </div>
          <div className="flex items-center gap-3 p-5 bg-gray-100 rounded hover:outline">
            <div className="flex items-center justify-center">
              <Image
              src="/placeholder/target.png"
              alt="brand"
              width="60"
              height="60"
              className=""
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Target</h3>
                <p className="text-sm text-gray-700">
                  Delivery within 24 hours
                </p>
            </div>
        

          </div>
          <div className="flex items-center gap-3 p-5 bg-gray-100 rounded hover:outline">
            <div className="flex items-center justify-center">
              <Image
              src="/placeholder/bevmo.png"
              alt="brand"
              width="60"
              height="60"
              className=""
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">BevMo!</h3>
                <p className="text-sm text-gray-700">
                  Delivery within 24 hours
                </p>
            </div>
        

          </div>
        </div>
      </div>
    </section>
  );
}


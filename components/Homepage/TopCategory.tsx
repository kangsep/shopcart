import Image from "next/image";

export default function TopCategory() {
    return (
        <section className="py-10">
            {/* Title */}
            <div className="max-w-7xl mx-auto py-6 px-6">
                <h2 className="text-3xl font-bold text-black">
                    Shop Our Top Categories
                </h2>
            </div>

            {/* Card */}
            <div className="flex flex-wrap justify-center gap-6">
                <div className="relative rounded-xl flex flex-col items-center group overflow-hidden">                    
                    <Image
                        src="/placeholder/furniture.png"
                        alt="furniture"
                        width={175}
                        height={225}
                        className="transition-transform duration-300 ease-in-out group-hover:scale-120"
                    />
                    <span className="absolute top-3 text-white text-2xl font-semibold">
                        Furniture
                    </span>
                </div >
                <div className="relative rounded-xl flex flex-col items-center group overflow-hidden">       
                    <Image
                        src="/placeholder/handbag.png"
                        alt="handbag"
                        width={175}
                        height={225}
                        className="`transition-transform duration-300 ease-in-out group-hover:scale-120`"
                    />
                    <span className="absolute top-3 text-white text-2xl font-semibold">
                        Hand Bag
                    </span>
                </div >
                <div className="relative rounded-xl flex flex-col items-center group overflow-hidden">
                    <Image
                        src="/placeholder/books.png"
                        alt="books"
                        width={175}
                        height={225}
                        className="transition-transform duration-300 ease-in-out group-hover:scale-120"
                    />
                    <span className="absolute top-3 text-white text-2xl font-semibold">
                        Books
                    </span>
                </div >
                <div className="relative rounded-xl flex flex-col items-center group overflow-hidden">             
                    <Image
                        src="/placeholder/tech.png"
                        alt="tech"
                        width={175}
                        height={225}
                        className="transition-transform duration-300 ease-in-out group-hover:scale-120"
                    />
                    <span className="absolute top-3 text-white text-2xl font-semibold">
                        Tech
                    </span>
                </div >
                <div className="relative rounded-xl flex flex-col items-center group overflow-hidden">
                    <Image
                        src="/placeholder/sneakers.png"
                        alt="sneakers"
                        width={175}
                        height={225}
                        className="transition-transform duration-300 ease-in-out group-hover:scale-120"
                    />
                    <span className="absolute top-3 text-white text-2xl font-semibold">
                        Sneakers
                    </span>
                </div >
                <div className="relative rounded-xl flex flex-col items-center group overflow-hidden">
                    <Image
                        src="/placeholder/travel.png"
                        alt="travel"
                        width={175}
                        height={225}
                        className="transition-transform duration-300 ease-in-out group-hover:scale-120"
                    />
                    <span className="absolute top-3 text-white text-2xl font-semibold">
                        Travel
                    </span>
                </div >
            </div>
        </section>
    );
}

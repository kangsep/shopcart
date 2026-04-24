import ByBrand from "@/components/Homepage/ByBrand";
import DiscountCard from "@/components/Homepage/DiscountCard";
import HeroBanner from "@/components/Homepage/HeroBanner";
import TopCategory from "@/components/Homepage/TopCategory";
import ProductSection from "@/components/product/ProductSection";
import Image from "next/image";


export default function Home() {
  return (
    <>  
    <HeroBanner />
    <TopCategory />
    <ByBrand/>
    <ProductSection/>
    <DiscountCard/>
    </>
  );
}

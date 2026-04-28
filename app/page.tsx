import ByBrand from "@/components/Homepage/ByBrand";
import DiscountBanner from "@/components/Homepage/DiscountBanner";
import DiscountCard from "@/components/Homepage/DiscountCard";
import HeroBanner from "@/components/Homepage/HeroBanner";
import PromotionSection from "@/components/Homepage/PromotionSection";
import TopCategory from "@/components/Homepage/TopCategory";
import ProductSection from "@/components/product/ProductSection";
import { deals, trending } from "@/data/products";
import Image from "next/image";


export default function Home() {
  return (
    <>  
    <HeroBanner />
    <TopCategory />
    <ByBrand/>
    <ProductSection title="Todays Best Deals For You!" products={deals} />
    <DiscountCard/>
    <ProductSection title="Weekly Popular Products" products={trending} />
    <DiscountBanner/>
    <PromotionSection/>
    </>
  );
}

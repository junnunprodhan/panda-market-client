import Brand from "@/component/ui/home/Brand";
import Carousel from "@/component/ui/home/Carousel";
import FlashSale from "@/component/ui/home/FlashSale";
import TrendingProduct from "@/component/ui/home/TrendingProduct";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Carousel />
      <FlashSale />
      <Brand />
      <TrendingProduct />
    </div>
  );
}

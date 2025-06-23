import Hero from "@/components/home/Hero";
import Promote from "@/components/home/Promote";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <div className=" w-full flex flex-col">
      <Hero />
      <Promote />
      <Reviews />
    </div>
  );
}

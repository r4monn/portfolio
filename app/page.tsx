import Hero from "@/components/Hero";
import SEA from "@/components/SEA";
import WhyHire from "@/components/WhyHire";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
       <Hero />
       <WhyHire />
       <SEA />
    </div>
  );
}

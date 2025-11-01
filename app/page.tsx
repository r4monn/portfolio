import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/mode-toggle";
import WhyHire from "@/components/WhyHire";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
       Hello World
       <ModeToggle />
       <Hero />
    </div>
  );
}

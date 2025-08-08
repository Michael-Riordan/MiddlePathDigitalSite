import Hero from "@/components/Hero";
import OurWork from "@/components/OurWork";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col">
        <Hero />
        <Why />
        <OurWork />
      </main>
    </div>
  );
}

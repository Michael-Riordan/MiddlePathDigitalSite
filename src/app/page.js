import Hero from "@/components/Hero.jsx";
import OurWork from "@/components/OurWork";
import Why from "@/components/Why";

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

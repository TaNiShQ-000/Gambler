import HeroSection from "@/components/heroSection";
import Testing from "@/components/testing";
export default function Home() {
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      {/* <h1 className="text-3xl text-center"> Tanishq sattebaaz</h1> */}
      <Testing />
      <HeroSection />
    </main>
  );
}

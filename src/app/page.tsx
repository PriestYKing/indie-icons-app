import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-mono">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

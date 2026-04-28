import { Header } from "@/components/heritage/Header";
import { Hero } from "@/components/heritage/Hero";
import { SocialProof } from "@/components/heritage/SocialProof";
import { RetailCounter } from "@/components/heritage/RetailCounter";
import { SmokehouseBoard } from "@/components/heritage/SmokehouseBoard";
import { Processing } from "@/components/heritage/Processing";
import { Footer } from "@/components/heritage/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-smoke-white">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <RetailCounter />
        <SmokehouseBoard />
        <Processing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

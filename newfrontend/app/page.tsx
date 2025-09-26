import Features from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-3";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <HeroSection />
     <Features/>
     <IntegrationsSection />
     <StatsSection/>
      <TeamSection />
    </div>
  );
}

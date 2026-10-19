import { JourneyProvider } from "@/components/JourneyProvider";
import { CompareBar } from "@/components/overlays/CompareBar";
import { CompareDialog } from "@/components/overlays/CompareDialog";
import { PrivacyDialog } from "@/components/overlays/PrivacyDialog";
import { Toast } from "@/components/overlays/Toast";
import { TourDetailDialog } from "@/components/overlays/TourDetailDialog";
import { Approach } from "@/components/sections/Approach";
import { BeyondKerala } from "@/components/sections/BeyondKerala";
import { Destinations } from "@/components/sections/Destinations";
import { Faq } from "@/components/sections/Faq";
import { FinderBar } from "@/components/sections/FinderBar";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { IntroStrip } from "@/components/sections/IntroStrip";
import { Journeys } from "@/components/sections/Journeys";
import { PlanSection } from "@/components/sections/PlanSection";

export default function HomePage() {
  return (
    <JourneyProvider>
      <a className="skip" href="#journeys">
        Skip to journeys
      </a>
      <Header />
      <main>
        <Hero />
        <FinderBar />
        <IntroStrip />
        <Destinations />
        <Journeys />
        <Approach />
        <BeyondKerala />
        <PlanSection />
        <Faq />
      </main>
      <Footer />
      <CompareBar />
      <TourDetailDialog />
      <CompareDialog />
      <PrivacyDialog />
      <Toast />
    </JourneyProvider>
  );
}

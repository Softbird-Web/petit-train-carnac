import InformationsHero from "@/components/sections/InformationsHero";
import InformationsSchedule from "@/components/sections/InformationsSchedule";
import Prices from "@/components/sections/Prices";
import InformationsIntro from "@/components/sections/InformationsIntro";
import Reviews from "@/components/sections/Reviews";
import InformationsCTA from "@/components/sections/InformationsCTA";
import Locations from "@/components/sections/Locations";

export const metadata = {
  title: "Informations Pratiques — Petit Train de Carnac",
  description:
    "Toutes les informations pratiques pour votre visite du Petit Train de Carnac : horaires, tarifs, réservation, accessibilité et points de départ.",
};

export default function InformationsPage() {
  return (
    <main>
      <InformationsHero />
      <InformationsSchedule />
      <Prices />
      <InformationsIntro />
      <Reviews />
      <InformationsCTA />
      <Locations />
    </main>
  );
}

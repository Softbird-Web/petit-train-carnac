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
      <InformationsHero
        label="Informations Pratiques"
        heading={
          <>
            Informations pratiques pour le{" "}
            <em className="italic text-[#5a4a6e] not-italic font-['Libre_Baskerville',serif] italic">
              Petit Train de Carnac
            </em>
          </>
        }
        description="Retrouvez ici toutes les informations pratiques dont vous avez besoin avant de rejoindre le Petit Train de Carnac. Découvrez le point de départ, la durée de la visite, les horaires, l'accessibilité et les recommandations de réservation, pour planifier votre visite à Carnac en toute sérénité."
        imageSrc="/figma-assets/PracticalInformationHero.jpg"
        imageAlt="Le Petit Train de Carnac au bord de la mer"
      />
      <InformationsSchedule />
      <Prices />
      <InformationsIntro />
      <Reviews />
      <InformationsCTA />
      <Locations />
    </main>
  );
}

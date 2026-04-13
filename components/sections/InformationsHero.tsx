import Image from "next/image";

export default function InformationsHero() {
  return (
    <section className="bg-[#f7f7f0] pt-20 pb-0 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 xl:px-0">
        {/* Heading area */}
        <div className="flex flex-col items-center gap-6 max-w-[768px] mx-auto text-center mb-20">
          {/* Section label */}
          <div className="flex items-center gap-2">
            <div className="relative shrink-0 w-[19px] h-[19px]">
              <Image
                src="/figma-assets/icon-train.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
            <p className="font-['Libre_Baskerville',serif] italic text-[#5a4a6e] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
              Informations
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-['Libre_Baskerville',serif] text-[clamp(36px,5vw,60px)] leading-[1.1] tracking-[-4.2px] text-[#181d27] break-words">
            Practical information for the{" "}
            <em className="italic text-[#5a4a6e] not-italic font-['Libre_Baskerville',serif] italic">
              Petit Train de Carnac
            </em>
          </h1>

          {/* Supporting text */}
          <p className="font-['Roboto',sans-serif] text-base leading-[1.2] tracking-[-0.48px] text-[#535862] max-w-[551px]">
            Here you will find all the practical information you need before
            joining the Petit Train de Carnac. Learn about the departure point,
            tour duration, schedules, accessibility, and booking
            recommendations, so you can plan your visit to Carnac with
            confidence and enjoy a smooth sightseeing experience.
          </p>
        </div>
      </div>

      {/* Full-width banner image */}
      <div className="relative w-full max-w-[1280px] mx-auto h-[320px] md:h-[420px] lg:h-[512px] overflow-hidden rounded-tl-2xl rounded-tr-2xl md:rounded-tl-[48px] md:rounded-tr-[48px]">
        <Image
          src="/figma-assets/PracticalInformationHero.jpg"
          alt="Le Petit Train de Carnac au bord de la mer"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

import Image from "next/image";

export default function InformationsIntro() {
  return (
    <section className="bg-[#f7f7f0] py-16">
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 border-t border-[rgba(0,0,0,0.15)] pt-8 flex flex-col gap-10">
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
            Important Note
          </p>
        </div>

        {/* Two-column heading + text layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-[559px] shrink-0">
            <h2 className="font-['Libre_Baskerville',serif] text-[clamp(36px,4vw,48px)] leading-[1.1] tracking-[-3.36px] text-[#181d27]">
              Online Booking
            </h2>
          </div>
          <div className="flex-1">
            <p className="font-['Inter',sans-serif] text-[18px] md:text-[20px] leading-[1.5] text-[#535862]">
              Booking is possible but not mandatory. You can book up to{" "}
              <strong className="font-bold text-[#181d27]">2 hours</strong>{" "}
              before the desired service. Don&rsquo;t forget to consider travel time
              and parking at the site. After this deadline, go directly to the
              departure point and purchase your tickets at the ticket office or
              from the driver.
              <br />
              Not all seats are available for online sale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

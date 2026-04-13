import Image from "next/image";

const months = [
  {
    name: "April",
    hours: "From 10:00 AM to 6:00 PM",
    note: "Departures every 30 minutes from the Ménec car park",
  },
  {
    name: "May",
    hours: "From 10:00 AM to 6:00 PM",
    note: "Departures every 30 minutes from the Ménec car park",
  },
  {
    name: "June",
    hours: "From 10:00 AM to 6:00 PM",
    note: "Departures every 30 minutes from the Ménec car park",
  },
  {
    name: "July & August",
    hours: "From 9:30 AM to 6:30 PM",
    note: (
      <>
        <span className="text-white">Ménec car park</span> — Departures every 30
        minutes
        <br />
        <span className="text-white">Carnac plage</span> — Every hour 10:00 AM–12:00 PM &amp; 2:00–6:00 PM
        <br />
        <span className="text-white">La Trinité sur Mer harbour</span> — Every hour 10:15–11:15 AM &amp; 2:15–5:15 PM
      </>
    ),
  },
];

const monthsBottom = [
  {
    name: "September",
    hours: "From 10:00 AM to 6:00 PM",
    note: "Departures every 30 minutes from the Ménec car park",
  },
  {
    name: "October",
    hours: "From 10:00 AM to 6:00 PM",
    note: "Departures every 30 minutes from the Ménec car park",
  },
  {
    name: "November",
    hours: "From 10:00 AM to 6:00 PM",
    note: "Departures every 30 minutes from the Ménec car park",
  },
  {
    name: "December to February",
    hours: null,
    note: "The Petit Train de Carnac does not operate during this period.",
  },
];

export default function InformationsSchedule() {
  return (
    <section className="bg-[#f7f7f0] py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 flex flex-col gap-8">

        {/* Info cards — Operating period + Weather */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Operating period card */}
          <div className="relative rounded-tl-[32px] rounded-bl-[32px] overflow-hidden min-h-[156px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <Image
                src="/figma-assets/practical-1.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(88,73,108,0.9)]" />
            </div>
            <div className="relative z-10 flex items-start gap-4 p-6">
              <div className="shrink-0 w-[65px] h-[65px] rounded-[10px] bg-[#58496c] border border-[rgba(233,234,235,0.15)] flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                <div className="relative w-[41px] h-[41px]">
                  <Image
                    src="/figma-assets/CalendarIconBig.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-['Libre_Baskerville',serif] text-[28px] md:text-[32px] leading-[1.25] text-white tracking-[-2.24px]">
                  Operating period
                </h3>
                <p className="font-['Nunito',sans-serif] text-[14px] leading-[1.3] tracking-[-0.42px] text-white max-w-[400px]">
                  The Petit Train de Carnac operates every day from April to
                  early November, including Sundays and public holidays.
                </p>
              </div>
            </div>
          </div>

          {/* Weather card */}
          <div className="relative rounded-tr-[32px] rounded-br-[32px] overflow-hidden min-h-[156px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <Image
                src="/figma-assets/practical-2.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(88,73,108,0.9)]" />
            </div>
            <div className="relative z-10 flex items-start gap-4 p-6">
              <div className="shrink-0 w-[65px] h-[65px] rounded-[10px] bg-[#58496c] border border-[rgba(233,234,235,0.15)] flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                <div className="relative w-[40px] h-[40px]">
                  <Image
                    src="/figma-assets/WeatherIconBig.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-['Libre_Baskerville',serif] text-[28px] md:text-[32px] leading-[1.25] text-white tracking-[-2.24px]">
                  Weather
                </h3>
                <p className="font-['Nunito',sans-serif] text-[14px] leading-[1.3] tracking-[-0.42px] text-white max-w-[400px]">
                  The trains operate in all weather conditions, allowing you to
                  enjoy the tour whether it is sunny, cloudy, or rainy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timetable grid — purple gradient */}
        <div className="rounded-[32px] overflow-hidden" style={{ background: "linear-gradient(112deg, #58496c 23%, #7c6e8f 85%)" }}>
          <div className="px-10 py-12 flex flex-col gap-10">
            {/* Timetables heading */}
            <div className="flex items-center gap-4 pb-8 border-b border-[rgba(255,255,255,0.2)]">
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.35)]" />
              <h2 className="font-['Libre_Baskerville',serif] italic text-white text-[28px] tracking-[-1.5px] whitespace-nowrap">
                Timetables
              </h2>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.35)]" />
            </div>

            {/* Row 1 — April through July/August */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[rgba(255,255,255,0.4)]">
              {months.map((month) => (
                <div key={month.name} className="flex flex-col gap-3">
                  <p className="font-['Libre_Baskerville',serif] italic text-[28px] md:text-[32px] leading-[normal] text-white tracking-[-2.24px]">
                    {month.name}
                  </p>
                  {month.hours && (
                    <div className="flex items-center gap-2">
                      <div className="relative shrink-0 w-5 h-5">
                        <Image
                          src="/figma-assets/timetables-clock.svg"
                          alt=""
                          fill
                          className="object-contain"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="font-['Raleway',sans-serif] text-base text-white leading-[normal]">
                        {month.hours}
                      </p>
                    </div>
                  )}
                  <p className="font-['Raleway',sans-serif] text-[13px] leading-[1.4] text-[rgba(255,255,255,0.75)] tracking-[-0.42px]">
                    {month.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2 — September through December */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {monthsBottom.map((month) => (
                <div key={month.name} className="flex flex-col gap-3">
                  <p className="font-['Libre_Baskerville',serif] italic text-[28px] md:text-[32px] leading-[1.1] text-white tracking-[-2.24px]">
                    {month.name}
                  </p>
                  {month.hours && (
                    <div className="flex items-center gap-2">
                      <div className="relative shrink-0 w-5 h-5">
                        <Image
                          src="/figma-assets/timetables-clock.svg"
                          alt=""
                          fill
                          className="object-contain"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="font-['Raleway',sans-serif] text-base text-white leading-[normal]">
                        {month.hours}
                      </p>
                    </div>
                  )}
                  <p className="font-['Raleway',sans-serif] text-[13px] leading-[1.4] text-[rgba(255,255,255,0.75)] tracking-[-0.42px]">
                    {month.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Holidays & Off-season — standalone cream box */}
        <div className="rounded-[32px] border border-[rgba(0,0,0,0.1)] bg-[#f7f7f0] px-10 py-12 flex flex-col items-center gap-6 text-center">
          {/* Heading */}
          <div className="flex items-center gap-4 w-full">
            <div className="flex-1 h-px bg-[rgba(0,0,0,0.12)]" />
            <h2 className="font-['Libre_Baskerville',serif] italic text-[#58496c] text-[28px] tracking-[-1.5px] whitespace-nowrap">
              Holidays &amp; Off-season
            </h2>
            <div className="flex-1 h-px bg-[rgba(0,0,0,0.12)]" />
          </div>
          <p className="font-['Raleway',sans-serif] text-[#181d27] text-base leading-[normal] max-w-[476px]">
            Special departure times may apply during public holidays and
            off-season weekends.
          </p>
          <p className="font-['Raleway',sans-serif] text-[#181d27] text-center">
            <span className="text-[14px] tracking-[-0.48px]">Departures are usually scheduled at:</span>
            <br />
            <span className="text-[22px] tracking-[2.4px] font-medium">
              2:00 PM · 2:45 PM · 3:30 PM · 4:45 PM · 5:30 PM
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

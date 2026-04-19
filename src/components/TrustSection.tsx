export default function TrustSection() {
  return (
    <section className="py-5 md:py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Top Label */}
        <p className="text-[10.5px] tracking-[0.15em] uppercase text-[#8892A3] font-bold mb-6">
          Trusted by growing cloud kitchens and multi-outlet brands
        </p>

        {/* Quote */}
        <p className="text-[1.15rem] md:text-xl text-[#586174] font-medium mb-8">
          "We reduced waste by 28% in 6 weeks using Orkeneo"
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-[#B8C0D1] font-bold text-xl md:text-[1.35rem]">
          <span>CloudKitch</span>
          <span>SpiceWay</span>
          <span>UrbanGrill</span>
        </div>
      </div>
    </section>
  );
}

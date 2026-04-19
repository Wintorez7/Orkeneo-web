import Image from "next/image"

export default function DashboardShowcase() {
  return (
    <section className="my-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden">
            <Image src="/images/dashboard-mockup.png" alt="Orkeneo Dashboard" width={1200} height={800} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

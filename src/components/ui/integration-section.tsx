import Image from "next/image";
import { Card } from "../reusable/card";
import { Button } from "../reusable/button";
import { TextSection } from "../reusable/text-section";

export default function IntegrationsSection() {
  const logoArr = [
    {
      name: "Petpooja",
      src: "/integrations/petpooja.png",
      alt: "Image",
      style: "p-3",
    },
    {
      name: "Rista",
      src: "/integrations/rista.png",
      alt: "Image",
      style: "",
    },
    {
      name: "Posist",
      src: "/integrations/posist.png",
      alt: "Image",
      style: "",
    },
    {
      name: "Foodiv",
      src: "/integrations/foodiv.png",
      alt: "Image",
      style: "p-1",
    },
    {
      name: "TMBill",
      src: "/integrations/tmbill.png",
      alt: "Image removebg",
      style: "p-2 -mt-2",
    },
    {
      name: "RanceLab",
      src: "/integrations/rancelab.png",
      alt: "Image",
      style: "p-4",
    },
    {
      name: "Zoho",
      src: "/integrations/zoho.png",
      alt: "Image removebg",
      style: "p-2",
    },
    {
      name: "Odoo",
      src: "/integrations/odoo.png",
      alt: "Image removebg",
      style: "p-2",
    },
    {
      name: "Odoo",
      src: "/integrations/odoo.png",
      alt: "Image removebg",
      style: "p-2",
    },
    {
      name: "Zoho",
      src: "/integrations/zoho.png",
      alt: "Image removebg",
      style: "p-2",
    },
    {
      name: "RanceLab",
      src: "/integrations/rancelab.png",
      alt: "Image",
      style: "p-4",
    },
    {
      name: "TMBill",
      src: "/integrations/tmbill.png",
      alt: "Image removebg",
      style: "p-2 -mt-2",
    },
    {
      name: "Foodiv",
      src: "/integrations/foodiv.png",
      alt: "Image",
      style: "p-1",
    },
    {
      name: "Posist",
      src: "/integrations/posist.png",
      alt: "Image",
      style: "",
    },
    {
      name: "Rista",
      src: "/integrations/rista.png",
      alt: "Image",
      style: "",
    },
    {
      name: "Petpooja",
      src: "/integrations/petpooja.png",
      alt: "Image",
      style: "p-3",
    },
  ];  

  return (
    <section className="flex flex-col items-center gap-16 py-24 my-24 bg-neutral-50 w-full">
      <TextSection
        subtitle="Integrations"
        title="Get more value from your tools"
        description="Connect your tech stack, connect your teams. With over 40+ apps already available in our directory, your team's favourite tools are just a click away."
      />

      <div className="flex flex-col items-center gap-16 px-8 max-w-[1280px] w-full">
        <div className="flex flex-col items-center gap-8 w-full">
          {/* First row of integration logos */}
          <div className="container gap-4 md:gap-8 max-w-screen-xl xl:w-[70%] lg:w-[70%] md:w-[80%] sm:w-screen-xl grid grid-cols-4 sm:grid-col-4 md:grid-cols-6 lg:grid-cols-8">
            {logoArr.map((logo, index) => (
              <Card
                key={`first-row-${index}`}
                className="relative flex justify-center items-center w-20 h-20 bg-white rounded-lg overflow-hidden shadow-[0px_0px_5px_#0000001a] border-0"
              >
                <Image
                  className={`absolute ${logo.style}`}
                  width={100}
                  height={100}
                  alt={logo.alt}
                  src={logo.src}
                />
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-16 px-8 max-w-[1280px] w-full">
        <div className="flex flex-col items-center gap-8 w-full">
          <Button variant="default" size="lg">View all integrations</Button>
        </div>
      </div>
    </section>
  )
}
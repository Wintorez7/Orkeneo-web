import React from "react";
import { ClientsServe } from "../reusable/clients-serve";
import { serveData } from "@/lib/clientserve";
import { TextSection } from "../reusable/text-section";

export default function WhoWeServe({}) {
  return (
    <section className="mb-12 md:mb-24 px-4 md:px-0">
      <TextSection
        subtitle="Client-ale"
        title="Who we serve"
        description="We empower modern food businesses with data-driven automation. Whether you’re serving on the go or offering full-course dining, Orkeneo helps you operate smarter, faster, and leaner."
      />

      {serveData &&
        serveData.length &&
        serveData.map(({ content, image, placeImageLeft }, i) => (
          <ClientsServe
            key={i}
            content={content}
            image={image}
            placeImageLeft={placeImageLeft}
          />
        ))}
    </section>
  );
}

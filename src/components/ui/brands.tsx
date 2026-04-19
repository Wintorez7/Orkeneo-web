import Image from "next/image";
import Link from "next/link";
import React from "react";

type BrandsProps = {
  isbgSet?: boolean;
};

const brands = [
  {
    src: "/brand-images/wow-momo.png",
    alt: "WOW Momo",
    href: "https://x.com/naymur_dev",
  },
  {
    src: "/brand-images/barbeque-nation.png",
    alt: "Barbeque Nation",
    href: "https://www.youtube.com/naymurweb",
  },
  {
    src: "/brand-images/faasos.png",
    alt: "Faasos",
    href: "https://github.com/ui-layouts/uilayouts",
  },
  {
    src: "/brand-images/chai-sutta-bar.png",
    alt: "Chai Sutta Bar",
    href: "https://x.com/naymur_dev",
  },
];

// Repeat to simulate infinite scroll
const repeatedBrands = [...brands, ...brands, ...brands];

function Brands({ isbgSet }: BrandsProps) {
  return (
    <div
      className={`container mx-auto px-4 py-12 ${
        isbgSet ? "bg-[#FAFAFA]" : ""
      }`}
    >
      <div className="flex justify-center text-gray-500 font-inter">
        <p>Join 4,000+ Restaurants already growing</p>
      </div>
      <div className="w-full text-5xl py-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul
          className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {repeatedBrands.map((brand, i) => (
            <li key={i}>
              <Link
                href={brand.href}
                target="_blank"
                className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={36}
                  className="h-9 w-auto"
                />
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {repeatedBrands.map((brand, i) => (
            <li key={i}>
              <Link
                href={brand.href}
                target="_blank"
                className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={36}
                  className="h-9 w-auto"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Brands;
